# Pre-read: Preparing for React App Deployment

## 🎯 Learning Objectives

- Understand the deployment process for React applications
- Learn about different hosting platforms and their features
- Familiarize yourself with production build concepts
- Prepare for deploying your React application

---

## 1. Understanding Deployment

### What is Deployment?

Deployment is the process of making your application available on the internet. Think of it like opening a store:

- Building your store (development)
- Preparing it for customers (production build)
- Choosing a location (hosting platform)
- Opening for business (deployment)

### Production vs Development

```bash
# Development
npm start
# - Hot reloading
# - Detailed error messages
# - Development tools

# Production
npm run build
# - Optimized code
# - Minified files
# - Production-ready assets
```

---

## 2. Build Process

### Creating a Production Build

```bash
# Create a production build
npm run build

# The build output will be in the 'build' folder
# build/
# ├── static/
# │   ├── css/
# │   ├── js/
# │   └── media/
# ├── index.html
# └── asset-manifest.json
```

---

## 3. Hosting Platforms

### GitHub Pages

- Free for public repositories
- Simple setup
- Good for static sites
- Limited features

### Netlify

- Free tier available
- Automatic deployments
- Form handling
- Serverless functions
- Real-world analogy: Like a fully managed restaurant space

### Vercel

- Free tier available
- Built for Next.js
- Edge network
- Serverless functions
- Real-world analogy: Like a premium retail space

---

## 4. Deployment Configuration

### Netlify Configuration

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "build"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Vercel Configuration

```json
// vercel.json
{
  "version": 2,
  "builds": [
    {
      "src": "package.json",
      "use": "@vercel/static-build",
      "config": { "distDir": "build" }
    }
  ]
}
```

---

## 🤔 Self-Check Questions

1. What's the difference between development and production builds?
2. What are the main features of Netlify vs Vercel?
3. How does the build process optimize your application?

---

## 📚 Quick Reference

- [Netlify Documentation](https://docs.netlify.com/)
- [Vercel Documentation](https://vercel.com/docs)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)

**Get ready to deploy your React application!**
