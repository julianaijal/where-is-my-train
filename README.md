# 🚆 Where Is My Train

![Work in Progress](https://img.shields.io/badge/Status-Work%20in%20Progress-red)
[![Next.js](https://img.shields.io/badge/Next.js-14.0-black)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue)](https://www.typescriptlang.org/)
[![PWA](https://img.shields.io/badge/PWA-Ready-success)](https://web.dev/progressive-web-apps/)

A modern, responsive Progressive Web App (PWA) that provides real-time train departure information. Built with Next.js and TypeScript, deployed on Vercel.

## ✨ Features

- 🚉 Real-time train departure information
- 📱 PWA support for mobile installation
- 📍 Station search functionality

## 🛠️ Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** SASS/SCSS
- **Analytics:** Vercel Analytics
- **Deployment:** [Vercel](https://vercel.com)
- **PWA Support:** next-pwa

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm/yarn/pnpm

### Installation

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

3. Set up environment variables
   ```bash
   cp .env.example .env
   ```
   Add your API key to the `.env` file:
   ```
   API_KEY=your_api_key_here
   ```

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🌐 Live Demo

Visit [where-is-my-train.vercel.app](https://where-is-my-train.vercel.app) to see the live application.

## 📱 PWA Installation

This app can be installed as a Progressive Web App:

1. Visit the website in Chrome/Edge/Safari
2. Look for the "Install" or "Add to Home Screen" option
3. Follow the prompts to install the app

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
