"""
Turn the flattened white background into real transparency.

Flattening the checkerboard first is what makes this tractable. The checker had
two drifting tones that no threshold could separate from the mug and the paper;
plain white is a single exact value, so the key is unambiguous, and connectivity
from the frame edge keeps interior whites (mug, notepad, book pages) intact.

The subject's edges were composited over a light background, so they carry that
lightness. Left alone they read as a bright halo against a dark page. Rather
than eroding them away — which eats hair — the matte is estimated: over a white
background the observed pixel is `a*F + (1-a)*255`, so how far a pixel sits below
white, relative to how far the foreground beside it sits below white, is `a`.
"""

import sys
from collections import deque

import numpy as np
from PIL import Image, ImageFilter

src, dst = sys.argv[1], sys.argv[2]
width = int(sys.argv[3]) if len(sys.argv) > 3 else None

im = Image.open(src).convert('RGB')
rgb = np.array(im).astype(np.float32)
h, w = rgb.shape[:2]
v = rgb.mean(axis=2)

neutral = rgb.max(axis=2) - rgb.min(axis=2) <= 12
candidate = neutral & (v >= 200)

bg = np.zeros((h, w), dtype=bool)
q = deque()


def seed(y, x):
    if candidate[y, x] and not bg[y, x]:
        bg[y, x] = True
        q.append((y, x))


for x in range(w):
    seed(0, x)
    seed(h - 1, x)
for y in range(h):
    seed(y, 0)
    seed(y, w - 1)

while q:
    y, x = q.popleft()
    for ny, nx in ((y + 1, x), (y - 1, x), (y, x + 1), (y, x - 1)):
        if 0 <= ny < h and 0 <= nx < w and candidate[ny, nx] and not bg[ny, nx]:
            bg[ny, nx] = True
            q.append((ny, nx))

# The white mug and the white notepad touch the background along their rims, so
# the fill runs straight into them and hollows them out. Nothing in the pixels
# separates them from it — they are the same white at the same flatness, which
# is why every texture and tone test tried here failed on one or the other.
#
# What does separate them is where they are: both sit inside the desk scene, and
# the desk scene is foreground all the way across. Measured off the mask, the
# only background labelled inside this box is that leak.
# Two boxes, not one over the whole desk: the gap between the plant and the mug
# and the hole inside the mug's handle are both genuine background, and a single
# box wide enough to cover the mug body fills them in as white blocks.
SOLID = {
    'mug body': (1650, 1990, 385, 625),  # y0, y1, x0, x1 in the source's pixels
    'notepad': (1925, 2115, 160, 800),
}
for name, (y0, y1, x0, x1) in SOLID.items():
    leak = bg[y0:y1, x0:x1].mean()
    bg[y0:y1, x0:x1] = False
    print(f'{name}: recovered {leak * 100:.0f}% of its box from the fill')

print(f'background: {bg.mean() * 100:.1f}% of pixels')

# Matte. Solid inside, zero outside, and graded only in a 3px band along the
# boundary — that band is where pixels are genuinely part background. Applying
# the grade everywhere instead would dissolve the mug and the notepad, which are
# nearly as white as the background but wholly opaque.
darkest = rgb.min(axis=2)
grade = np.clip((255.0 - darkest) / 26.0, 0.0, 1.0)

grown = np.array(Image.fromarray(bg).filter(ImageFilter.MaxFilter(7))).astype(bool)
band = grown & ~bg

alpha = np.where(bg, 0.0, 1.0)
alpha[band] = grade[band]

mask = Image.fromarray((alpha * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.6))

out = np.dstack([np.array(im), np.array(mask)])
img = Image.fromarray(out, 'RGBA')
if width:
    img = img.resize((width, round(img.height * width / img.width)), Image.LANCZOS)
img.save(dst)
print('wrote', dst, img.size)
