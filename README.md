# 📚 Lit Directory

A lightweight, modern web app built with [Astro](https://astro.build) for cataloging and reviewing books. Created as a hands-on learning project to explore Astro's component-driven architecture and performance features.

## 🚀 Project Structure

```text
/
├── public/              # Static assets (images, icons, fonts)
├── src/
│   ├── components/      # Reusable Astro/UI components (Navbar, BookCard, etc.)
│   ├── content/         # Content Collections data files (JSON book datasets)
│   ├── layouts/         # Page layouts and global HTML wrappers (BaseLayout, etc.)
│   ├── pages/           # File-based routes (index.astro, books.astro, etc.)
│   └── content.config.ts # Configuration & Zod schema definitions for Content Collections
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

- [x] Basic layout & navigation header
- [x] Reusable page layouts & components
- [x] Refactored data store to Astro Content Collections (JSON format)
- [x] Book listing page rendering collection entries
- [ ] Transition content collection entries to Markdown/MDX reviews
- [ ] Dynamic individual review detail routes (/books/[id])
- [ ] Genre and tag filtering system


---

## 📚 Learn More

To learn more about the tools used in this project:

- [Astro Documentation](https://docs.astro.build)
- [Astro Discord Community](https://astro.build/chat)