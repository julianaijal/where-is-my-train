# 🚆 Where Is My Train

![Version](https://img.shields.io/badge/Version-0.1.0-blue)
[![Next.js](https://img.shields.io/badge/Next.js-15.3-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![PWA](https://img.shields.io/badge/PWA-Ready-success)](https://web.dev/progressive-web-apps/)

🚄 A modern, responsive Progressive Web App (PWA) that provides real-time train departure information. Built with Next.js and TypeScript, deployed on Vercel.

## 🎯 Project Status

This project is currently at **version 0.1.0**. 
- The core functionalities for displaying real-time train departure information and station search are implemented.

## 📖 Table of Contents

- [🎯 Project Status](#project-status)
- [✨ Features](#features)
- [🛠️ Tech Stack](#tech-stack)
- [🚀 Getting Started](#getting-started)
  - [📋 Prerequisites](#prerequisites)
  - [⚙️ Installation](#installation)
- [📜 Available Scripts](#available-scripts)
- [🧹 Linting](#linting)
- [📱 PWA Installation](#pwa-installation)
- [🤝 Contributing](#contributing)

## ✨ Features

- 🚉 Real-time train departure information
- 📱 PWA support for mobile installation
- 📍 Station search functionality

## 🛠️ Tech Stack

- 🚀 **Framework:** [Next.js 15](https://nextjs.org/)
- 💻 **Language:** [TypeScript](https://www.typescriptlang.org/)
- 🎨 **Styling:** SASS/SCSS
- 📊 **Analytics:** Vercel Analytics
- ☁️ **Deployment:** [Vercel](https://vercel.com)
- 📲 **PWA Support:** next-pwa

## 🚀 Getting Started

### 📋 Prerequisites

- ✅ Node.js 18+ 
- ✅ npm/yarn/pnpm

### ⚙️ Installation

1. Clone the repository
   ```bash
   git clone https://github.com/julianaijal/where-is-my-train.git
   cd where-is-my-train
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. 🔑 Set up environment variables
   ```bash
   cp .env.example .env
   ```
   Next, update the `.env` file with your specific API key. The `.env.example` file provides a placeholder:
   ```env
   # In .env.example:
   # Replace with the actual environment variable name and your API key
   # e.g., NEXT_PUBLIC_TRANSIT_API_KEY=your_actual_api_key_value_here
   YOUR_TRANSIT_API_KEY=your_api_key_value_here
   ```
   You'll need to:
   1. Identify the actual environment variable name your application expects (e.g., `NEXT_PUBLIC_TRANSIT_API_KEY`).
   2. In your `.env` file, use this actual variable name and set its value to your API key.

   Example (in your `.env` file):
   ```env
   NEXT_PUBLIC_TRANSIT_API_KEY=your_actual_api_key_from_provider
   ```

4. ▶️ Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. 🌐 Open [http://localhost:3000](http://localhost:3000) in your browser

## 📜 Available Scripts

In addition to the development server, the following scripts are available:

- **Build for production:**
  ```bash
  npm run build
  ```

- **Start production server:**
  ```bash
  npm run start
  ```

## 🧹 Linting

To ensure code quality and consistency, this project uses ESLint. You can run the linter with:

```bash
npm run lint
```

## 📸 Screenshots



## 🌐 Live Demo

Visit [where-is-my-train.vercel.app](https://where-is-my-train.vercel.app) to see the live application.

## 📱 PWA Installation

This app can be installed as a Progressive Web App:

1. Visit the website in Chrome/Edge/Safari
2. Look for the "Install" or "Add to Home Screen" option
3. Follow the prompts to install the app

## 🤝 Contributing

Contributions to this project are welcome! If you're interested in helping out:

1.  For significant changes or new features, please open an issue first to discuss your ideas.
2.  Feel free to fork the repository, create a dedicated branch for your changes, and then submit a Pull Request.

This project uses [Dependabot](https://docs.github.com/en/code-security/dependabot) to help keep dependencies up-to-date.
