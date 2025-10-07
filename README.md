# vini.praion.fr

This repository aims to power **[vini.praion.fr](https://vini.praion.fr)** — a personal website that brings together my **CV, blog, and portfolio** into a single place.
It also serves as a **DevOps playground**, where I experiment with tooling, workflows, and best practices as part of my career re-specialization toward the DevOps field.

---

## 🎯 Purpose

- **Personal branding** → showcase my professional background, projects, and skills.
- **Blogging space** → write about development, DevOps, and personal learning experiences.
- **Portfolio** → highlight selected projects and experiments.
- **DevOps playground** → test CI/CD pipelines, deployment strategies, monitoring, observability, and other operations-related practices.

This project started during my transition into unemployment as a way to keep learning and sharpening my skills, with the ultimate goal of becoming a **DevOps engineer**.

---

## 🛠️ Tech Stack

- **Frontend**:
  - [Nunjucks](https://mozilla.github.io/nunjucks/) templates
  - [Bootstrap](https://getbootstrap.com/) for layout & components
  - Custom dark/light theme toggle

- **Backend**:
  - [Node.js](https://nodejs.org/) with [Express](https://expressjs.com/)
  - French and English support
  - Static asset pipeline with cache optimization

- **DevOps playground**:
  - CI/CD pipelines (WIP)
  - Deployment experiments (containers)
  - Testing infrastructure (unit, integration)

---

## 🚀 Features

- **Resume (CV)**: structured, editable through modular partials.
- **Blog**: markdown-driven articles with multi-language support.
- **Portfolio**: show projects, experiments, and contributions.
- **Dark/Light mode**: toggleable via UI.
- **DevOps experiments**:
  - Cache-control headers for assets and HTML
  - Image upload & WebP conversion (planned)
  - Deployment automation (in progress)

---

## 📦 Installation

```bash
git clone https://github.com/vpraion/vini.praion.fr.git
cd vini.praion.fr
docker-compose up -d
```
