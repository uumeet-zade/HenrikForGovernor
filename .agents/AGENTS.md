# Custom Agent Rules for Henrik Vasmer Campaign

## Design Philosophy: "The Duality Principle"
The visual language reflects the two sides of Henrik Vasmer:
*   **The Resting State (The Academic):** Clean, highly composed, stark black and white. Represents his background as a PhD and intellectual. Colors: Pristine White background, Pitch Black text.
*   **The Combat State (The Advocate):** Aggressive, sharp, and high-impact. Represents his fight for the working class. Colors: Pitch Black background, White text, sudden flashes of Neon Combat Colors.

## Color Palette
Never use soft gradients or muted pastels. Colors must be fully saturated and high-contrast.
*   **Base Colors:** White (`#FFFFFF`), Black (`#000000`)
*   **Combat Colors (Exclusively for hovers and accents):** Hero Crimson Red (`#E60000`), Neon Cyan (`#00FFFF`), Electric Yellow (`#FFCC00`), Hot Magenta (`#FF00FF`)

## Neobrutalist UI Rules
*   **Borders:** Thick and unapologetic. `4px solid #000000` (or White in Combat State).
*   **Corners:** Absolutely no rounded corners (`border-radius: 0px`).
*   **Shadows:** Hard, offset block shadows. `box-shadow: 8px 8px 0px #000000`. No blur radius. Shadows snap to Combat Colors on hover.
*   **Transitions:** Fast and aggressive. `0.15s ease-in-out`. Elements must snap violently into their active states.
*   **Hover States:** Interactive elements must shift diagonally (`transform: translate(-2px, -2px)`) to simulate the button being physically pressed against its hard shadow.
*   **Imagery:** High-contrast, duotone or halftone black and white (`filter: grayscale(100%) contrast(150%)`). Images flash into full color only when hovered.

## Internationalization (i18n) Rules
*   **Architecture:** The site uses a custom Vanilla JS translation system.
*   **HTML Structure:** Any translatable text must be placed inside an element with a `data-i18n="namespace.key"` attribute. Do not hardcode text without this attribute.
*   **JavaScript Dictionary:** All translations must be stored inside the `translations` dictionary object in `assets/js/index.js`.
*   **Caprican Languages:** In the UI, English is "Alanian", Spanish is "Alcamerian", and French is "Gallic". When adding new text, always provide translations for all three (`en`, `es`, `fr`).
