"""
Remove the Gemini sparkle watermark from the book stack in about.png.

It is a white overlay at low opacity, not paint, so it divides back out:

    observed = (1 - a) * original + 255a    ->    original = (observed - 255a) / (1 - a)

The work is all in recovering a per-pixel `a`.

Below the seam, on the black cover, the clean picture can be predicted by reading
across from a column to the right of the sparkle and following the books' own
diagonal — the covers are near enough constant along that direction, and the
prediction lands within 2.6 levels of reality on a control patch. That makes `a`
directly measurable there.

Above the seam it is not: the blue cover has a gradient the lift disappears into,
and the words "Data-Intensive Applications" run through it leaving no trace at
all, since white under a white overlay stays white. So the measured half of the
sparkle is mirrored onto the unmeasurable half, about a centre fitted by asking
which one makes the two measurable halves agree.

Inverting over the lettering is harmless — it returns white to white.
"""

import sys

import numpy as np
from PIL import Image, ImageFilter

src, dst = sys.argv[1], sys.argv[2]

BOX = (1486, 2058, 1620, 2176)  # x0, y0, x1, y1 — sparkle plus falloff
CLEAN_X = 1636  # column to the right of the sparkle, on the same books
SEAM_AT, SEAM_SLOPE = (1500, 2093), 0.28  # a point on the blue/black edge, and its gradient
TEXT_RIGHT = 1517  # "…tems" ends here
MAX_ALPHA = 0.32

im = Image.open(src).convert('RGB')
a = np.array(im).astype(np.float32)
h, w = a.shape[:2]
x0, y0, x1, y1 = BOX

patch = a[y0:y1, x0:x1]
ys, xs = np.mgrid[y0:y1, x0:x1]

sy = np.clip(np.round(ys + SEAM_SLOPE * (CLEAN_X - xs)).astype(int), 0, h - 1)
predicted = a[sy, CLEAN_X]

seam_y = SEAM_AT[1] + SEAM_SLOPE * (xs - SEAM_AT[0])
measurable = (ys > seam_y + 10) & (xs >= TEXT_RIGHT)

g, pg = patch.mean(axis=2), predicted.mean(axis=2)
alpha_meas = np.clip((g - pg) / np.maximum(255.0 - pg, 1.0), 0.0, MAX_ALPHA)
print(f'measurable on {measurable.mean() * 100:.0f}% of the box, peak alpha {alpha_meas[measurable].max():.3f}')

iy, ix = ys - y0, xs - x0


def fold(cx, cy):
    """Each pixel's four mirror partners, averaged over those that are measurable."""
    mx = np.clip(np.round(2 * cx - xs).astype(int) - x0, 0, x1 - x0 - 1)
    my = np.clip(np.round(2 * cy - ys).astype(int) - y0, 0, y1 - y0 - 1)
    total = np.zeros_like(g)
    count = np.zeros_like(g)
    for jy, jx in ((iy, ix), (iy, mx), (my, ix), (my, mx)):
        ok = measurable[jy, jx]
        total += np.where(ok, alpha_meas[jy, jx], 0.0)
        count += ok
    return total, count


best = None
for cy in np.arange(2100, 2136, 0.5):
    for cx in np.arange(1536, 1568, 0.5):
        total, count = fold(cx, cy)
        agree = (count >= 2) & measurable
        if agree.sum() < 400:
            continue
        mean = total[agree] / count[agree]
        spread = float(np.mean((alpha_meas[agree] - mean) ** 2))
        if best is None or spread < best[0]:
            best = (spread, cx, cy)

spread, cx, cy = best
print(f'centre fitted at ({cx}, {cy}), partners agree to {spread ** 0.5:.4f} alpha')

total, count = fold(cx, cy)
alpha = np.where(count > 0, total / np.maximum(count, 1), 0.0)
alpha = (
    np.array(
        Image.fromarray((alpha / MAX_ALPHA * 255).astype(np.uint8)).filter(
            ImageFilter.GaussianBlur(1.6)
        )
    ).astype(np.float32)
    / 255.0
    * MAX_ALPHA
)[:, :, None]

a[y0:y1, x0:x1] = np.clip((patch - 255.0 * alpha) / (1.0 - alpha), 0, 255)
Image.fromarray(a.astype(np.uint8)).save(dst)
print('wrote', dst)
