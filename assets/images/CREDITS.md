# Image credits

Every photograph here is from [Unsplash](https://unsplash.com) and is used under the
[Unsplash License](https://unsplash.com/license), which permits free commercial use with no
attribution required. Credit is recorded here as a courtesy. No image is AI generated.

| Base name | Photographer | Source | Subject |
|---|---|---|---|
| `home-exterior-oakville` | [Dillon Kydd](https://unsplash.com/@kyddvisuals) | [3Ignkeds3w8](https://unsplash.com/photos/brown-and-white-concrete-house-under-blue-sky-during-daytime-3Ignkeds3w8) | Red brick two storey detached home, covered porch, double garage, recycling bins at the curb. Oshawa, ON |
| `home-exterior-autumn` | [Dillon Kydd](https://unsplash.com/@kyddvisuals) | [XGvwt544g8k](https://unsplash.com/photos/brown-and-white-concrete-house-under-blue-sky-during-daytime-XGvwt544g8k) | Detached brick and stone home, arched window, double garage. Oshawa, ON |
| `townhouse-row` | [Simi Iluyomade](https://unsplash.com/@simisola) | [MLbnzuPaKVk](https://unsplash.com/photos/white-concrete-building-beside-road-during-daytime-MLbnzuPaKVk) | Row of townhouses with private garages and balconies |
| `building-evening` | [Georgiana Andreca](https://unsplash.com/@andrecageorgiana) | [-us5QBCEvQ4](https://unsplash.com/photos/brown-concrete-building-under-blue-sky-during-daytime--us5QBCEvQ4) | Low rise apartment block in evening light, stacked balconies |
| `living-room-interior` | [Zac Gudakov](https://unsplash.com/@zacgudakov) | [95UK5aVgx54](https://unsplash.com/photos/white-couch-near-glass-window-95UK5aVgx54) | Double height living room, linear gas fireplace, wall of windows |
| `living-room-wide` | [Francesca Tosolini](https://unsplash.com/@fromitaly) | [tHkJAMcO3QE](https://unsplash.com/photos/beige-couch-and-armchair-tHkJAMcO3QE) | Open plan living and dining room with corner windows |
| `open-plan-kitchen` | [Bailey Alexander](https://unsplash.com/@baileyal3xander) | [PE4pFgcYzoQ](https://unsplash.com/photos/a-living-room-filled-with-furniture-and-a-kitchen-PE4pFgcYzoQ) | Open plan kitchen and living room under a vaulted ceiling |

`social-preview.jpg` is a 1.91:1 crop of `home-exterior-oakville`.

## Processing

Each original was pulled at full resolution (2140 to 3000px on the long edge), cropped to the exact
aspect ratio the slot renders at so no pixels are wasted, resized with Lanczos resampling and
encoded as WebP at two widths with a JPEG fallback underneath:

- `<base>-1400.webp` (or `-900` for the hero's small tier) — the desktop tier
- `<base>-760.webp` — the phone tier, served through `srcset` and a `sizes` hint
- `<base>-640.jpg` — the fallback, reached only by browsers with no WebP support

Quality was tuned per file so nothing exceeds 180KB. The largest is 175KB.

## Logo

`logo.svg`, `logo-reversed.svg` and `icon.svg` are the vector masters. `logo.png` (800x150) exists
only for the `RealEstateAgent` structured data, which wants a raster. `favicon.png` is 180x180.
