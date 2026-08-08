"""
Flatten the baked-in transparency checkerboard in about.png to plain white.

The file has a fully opaque alpha channel with the grey/white checker painted
into the RGB — a background remover's *preview* export rather than a real
cut-out. There is no alpha left to recover.

Keying the pattern back out to transparency does not work here: the mug, the
notepad and the paper are the same white as the light squares, at the same
flatness, so every test that catches the checker also catches them. Flattening
to white sidesteps that entirely — the light squares are already white, and if
the mask overreaches onto the mug or the paper it paints white onto white and
nothing shows. The subject's soft edges were composited over a light checker to
begin with, so they land on white correctly too, with no fringe.

Connectivity from the frame edge is still applied, so specular highlights inside
the laptop or the pen do not get filled.
"""

import sys
from collections import deque

import numpy as np
from PIL import Image

src, dst = sys.argv[1], sys.argv[2]
width = int(sys.argv[3]) if len(sys.argv) > 3 else None

im = Image.open(src).convert('RGB')
rgb = np.array(im).astype(np.int16)
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

print(f'flattened: {bg.mean() * 100:.1f}% of pixels')

out = np.array(im)
out[bg] = 255

img = Image.fromarray(out)
if width:
    img = img.resize((width, round(img.height * width / img.width)), Image.LANCZOS)
img.save(dst, quality=88, subsampling=1)
print('wrote', dst, img.size)
