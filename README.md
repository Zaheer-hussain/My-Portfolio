# My-Portfolio

Futuristic gaming-themed personal portfolio for **Zaheer Hussain** with dark/light mode, interactive effects, and responsive sections for About, Skills, Projects, Experience, Education, Links, and Contact.

## Run locally

Because this repository is a static site, you can run it with any simple static server:

```bash
# Python 3
python -m http.server 8080
```

Then open: `http://localhost:8080`

## Build/deploy

No compile step is required.

### GitHub Pages
1. Push to your default branch.
2. In GitHub: **Settings → Pages**.
3. Set source to **Deploy from a branch**.
4. Choose your branch and root (`/`) folder.
5. Save and wait for Pages deployment.

## Notes
- Theme toggle persists with `localStorage` and respects system preference on first load.
- Contact intentionally displays **email only**.
- TODO: Add hosted resume PDF path (for example `/resume.pdf`) once final resume asset is available.
