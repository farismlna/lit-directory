# 📚 Lit Directory

A lightweight, modern web app built with [Astro](https://astro.build) for cataloging and reviewing books. Created as a hands-on learning project to explore Astro's component-driven architecture and performance features.

## 🚀 Project Structure

```text
/
├── public/          # Static assets (images, icons, fonts)
├── src/
│   ├── components/  # Reusable Astro/UI components (Navbar, BookCard, etc.)
│   └── pages/       # File-based routes (e.g., index.astro)
└── package.json
```

- **`src/pages/`**: Every `.astro` or `.md` file in this directory represents a page route on your site.
- **`src/components/`**: The ideal place for all your Astro or frontend framework components.
- **`public/`**: Assets placed here are served directly at the root URL.

---

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

---

## 📋 Features & Roadmap

- [x] Initial project setup and core layout
- [x] Responsive navigation bar component
- [ ] Book grid and listing component
- [ ] Detailed book review pages
- [ ] Genre and rating filtering system

---

## 📚 Learn More

To learn more about the tools used in this project:

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord Community](https://astro.build/chat)