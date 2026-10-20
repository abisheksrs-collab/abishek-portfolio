# Abishek R — ERP Consultant portfolio

React, TypeScript and Vite portfolio.

## Local preview

Run `npm ci`, then `npm run dev`.

## Publish on GitHub Pages

1. Create a public repository called `abishek-portfolio`.
2. Push this project to the `main` branch.
3. In Settings → Pages → Build and deployment, select **GitHub Actions**.
4. Run **Publish portfolio to GitHub Pages** from Actions if it has not started.
5. The successful deployment displays the public site URL.

The GitHub Actions workflow builds and deploys future updates automatically.
The build uses relative asset paths so images, icons and the resume work under a repository subpath.

The public site includes the approved portrait, phone number, email and resume PDF. Local backup files and original details folder are excluded from Git.
