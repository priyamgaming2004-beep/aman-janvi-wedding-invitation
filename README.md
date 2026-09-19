# Aman & Janvi — Bilingual Wedding Invitation

This version adds a Hindi/English language selection before the invitation opens.

## Language behaviour
- First visit: guests see **हिंदी** and **English**.
- The selected language controls the invitation text.
- The choice is saved in the browser with `localStorage`.
- A language switch button is also available in the top navigation.

## Deploy on GitHub Pages
1. Create/open a GitHub repository.
2. Upload the contents of this folder (not the ZIP itself).
3. Ensure `index.html` is at the repository root.
4. Go to **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select your main branch and `/ (root)`.
7. Save. GitHub will give you a `github.io` URL.

## Important
Keep your existing `assets/` folder beside `index.html`, including `assets/images/` and optional `assets/music/wedding-song.mp3`.


## Music
The supplied wedding music has been added as `assets/music/wedding-song.mp3`. It starts after the guest presses **Open Invitation**, subject to browser autoplay rules.
