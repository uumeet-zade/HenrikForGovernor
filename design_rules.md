# Henrik Vasmer Campaign: Design System & Rules

This document outlines the strict design rules governing the Henrik Vasmer campaign website. All future additions, components, and pages must adhere to these guidelines to maintain the "Duality Principle" and the Neobrutalist aesthetic.

## 1. The Duality Principle
The visual language reflects the two sides of Henrik Vasmer:
*   **The Resting State (The Academic):** Clean, highly composed, stark black and white. Represents his background as a PhD and intellectual.
    *   *Usage:* Introductions, historical context, event listings.
    *   *Colors:* Pristine White background, Pitch Black text.
*   **The Combat State (The Advocate):** Aggressive, sharp, and high-impact. Represents his fight for the working class against monopolies.
    *   *Usage:* Platform policies, calls to action, interactive hover states.
    *   *Colors:* Pitch Black background, White text, sudden flashes of Neon Combat Colors.

## 2. Color Palette
Never use soft gradients or muted pastels. Colors must be fully saturated and high-contrast.
*   **Base Colors:**
    *   Pristine White: `#FFFFFF`
    *   Pitch Black: `#000000`
*   **Combat Colors (Used exclusively for hovers and accents):**
    *   Hero Crimson Red: `#E60000` (Primary accent, used for Call to Action and main bio highlights)
    *   Neon Cyan: `#00FFFF` (Used for Maritime/Labor)
    *   Electric Yellow: `#FFCC00` (Used for Education/Economy)
    *   Hot Magenta: `#FF00FF` (Used for Reform/Persuasion)

## 3. Typography
*   **Display / Headings:** `Monument Extended` (Ultra-bold, uppercase). Must be used for all section titles, massive call-outs, and buttons.
*   **Body / Utility:** `Space Grotesk` or `Inter`. Clean and highly legible.

## 4. Neobrutalist UI Rules
*   **Borders:** Thick and unapologetic. `4px solid #000000` (or White in Combat State).
*   **Corners:** Absolutely no rounded corners (`border-radius: 0px`). Everything must be a sharp 90-degree angle.
*   **Shadows:** Hard, offset block shadows. `box-shadow: 8px 8px 0px #000000`. No blur radius. Shadows snap to Combat Colors on hover.
*   **Transitions:** Fast and aggressive. `0.15s ease-in-out`. Elements should not fade dreamily; they must snap violently into their active states.
*   **Hover States:** Interactive elements must shift diagonally (`transform: translate(-2px, -2px)`) to simulate the button being physically pressed against its hard shadow.

## 5. Imagery
*   **Default:** High-contrast, duotone or halftone black and white (`filter: grayscale(100%) contrast(150%)`).
*   **Interaction:** Images flash into full, unadulterated color only when the user hovers over them, revealing the "real" Henrik underneath the academic exterior.
