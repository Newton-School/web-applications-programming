# Pre-read: Introduction to Next.js

## 🎯 Learning Objectives

- Understand what Next.js is and its role in modern web development
- Learn the basic concepts of routing in web applications
- Familiarize yourself with Next.js project structure
- Prepare for hands-on Next.js development

---

## 1. What is Next.js?

### 🌍 Understanding Next.js

Next.js is a React framework that provides additional features for building production-ready web applications. It's built on top of React and provides:

- Server-side rendering (SSR)
- Static site generation (SSG)
- File-based routing
- API routes
- Built-in optimizations

### Key Benefits

1. **Performance**
   - Automatic code splitting
   - Image optimization
   - Server-side rendering
   - Static site generation

2. **Developer Experience**
   - Hot reloading
   - File-based routing
   - Built-in TypeScript support
   - API routes

3. **Production Ready**
   - Automatic routing
   - Optimized builds
   - Environment variables
   - Deployment optimizations

In this lecture, we will look at routing in Next.js.

---

## 2. Routing Concepts

### Next.js Routing

Next.js uses file-based routing.

```javascript
// Next.js File-based Routing
// pages/index.js -> /
// pages/about.js -> /about
// pages/blog/[id].js -> /blog/1
// pages/blog/[id]/[slug].js -> /blog/1/my-blog-post
```

### File Structure in Next.js

```text
my-next-app/
├── pages/
│   ├── index.js      // Home page (/)
│   ├── about.js      // About page (/about)
│   └── blog/
│       ├── index.js  // Blog index (/blog)
│       └── [id].js   // Dynamic blog post (/blog/1)
├── public/           // Static files
└── styles/          // CSS files
```

---

## 3. Extras: Next.js Components

### Page Components

Page components are the main components in Next.js. They are used to create the main content of the page.

```jsx
// pages/index.js
export default function Home() {
  return (
    <div>
      <h1>Welcome to Next.js</h1>
    </div>
  );
}
```

### Navigation

The `Link` component is used to navigate between pages. It is a wrapper around the HTML `<a>` tag. It provides features like prefetching, scroll restoration, and more.

```jsx
import Link from 'next/link';

function Navigation() {
  return (
    <nav>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
```

### Image Component

The `Image` component is used to display images. It is a wrapper around the HTML `<img>` tag. It provides features like lazy loading, image optimization, and more.

```jsx
import Image from 'next/image';

function Logo() {
  return (
    <Image
      src="/logo.png"
      alt="Logo"
      width={100}
      height={100}
    />
  );
}
```

---

## 🤔 Self-Check Questions

1. What are the main benefits of using Next.js over plain React?
2. How does file-based routing work in Next.js?
3. How does the `Link` component differ from regular `<a>` tags?

---

## 📚 Quick Reference

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Routing](https://nextjs.org/docs/routing/introduction)

**Get ready to explore the power of Next.js!**
