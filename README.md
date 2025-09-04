# Meolon.dev - Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Static Export**: Configured for GitHub Pages deployment
- **Responsive Design**: Optimized for all screen sizes
- **Smooth Animations**: Framer Motion powered animations
- **Modern UI**: Clean, professional design with beautiful gradients
- **TypeScript**: Full type safety throughout the application

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/sluong-wf/meolon.git
cd meolon
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

## 🚀 Deployment

### Option 1: GitHub Actions (Recommended)

1. Push your code to the `main` branch
2. Go to your GitHub repository settings
3. Navigate to **Pages** in the sidebar
4. Under **Source**, select **GitHub Actions**
5. The workflow will automatically build and deploy your site

Your site will be available at: `https://yourusername.github.io/meolon`

### Option 2: Manual Deployment

1. Build the static files:
```bash
npm run build
```

2. Deploy to GitHub Pages:
```bash
npm run deploy
```

## 📁 Project Structure

```
meolon/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   └── components/
│       └── client/
│           ├── AnimatedSection.tsx
│           └── ProjectCard.tsx
├── public/
│   ├── .nojekyll
│   └── [assets]/
├── .github/
│   └── workflows/
│       └── deploy.yml
└── [config files]/
```

## 🎨 Customization

- **Colors**: Update the color scheme in `src/app/globals.css`
- **Content**: Modify project data in `src/app/page.tsx`
- **Links**: Update social media links in the hero section
- **Images**: Replace project images in the `public/` directory

## 📄 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run export` - Export static files
- `npm run deploy` - Deploy to GitHub Pages
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript type checking

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ using Next.js
