# Lecture 21: Next.js for Frontend Routing

## 1. Introduction to Next.js (10 minutes)

- Objective: Understand what Next.js is and why it's useful for React applications

- Key Points:
  1. What is Next.js?
     - A React framework for production
     - Built-in routing and server-side rendering
     - Real-world analogy: Think of Next.js like a pre-built house with all the essential features, while React is like building a house from scratch
  2. Benefits of Next.js:
     - Automatic routing
     - Better performance
     - SEO optimization
     - Built-in API routes
  3. When to use Next.js:
     - Large applications
     - SEO-critical websites
     - Static site generation
     - Server-side rendering needs

## 2. Setting up a Next.js Project (15 minutes)

- Objective: Learn how to create and set up a Next.js project

- Key Steps:
  1. Creating a new Next.js project:

     ```bash
     npx create-next-app@latest my-next-app
     ```

  2. Project structure explanation:

     ```text
     my-next-app/
     ├── pages/          # Pages and routing
     ├── public/         # Static files
     ├── styles/         # CSS files
     ├── components/     # React components
     └── package.json    # Dependencies
     ```

  3. Configuration files:
     - next.config.js
     - package.json scripts
     - tsconfig.json (if using TypeScript)

- Live Demo:
    - Create a new Next.js project
    - Walk through the file structure
    - Explain key configuration options

## 3. Understanding Next.js Routing (20 minutes)

- Objective: Master Next.js file-based routing system

- Key Concepts:
  1. File-based routing:
     - pages/index.js → / (home route)
     - pages/about.js → /about
     - pages/blog/[id].js → /blog/1, /blog/2, etc.
  2. Dynamic routes:

     ```jsx
     // pages/posts/[id].js
     export default function Post({ id }) {
       return <h1>Post: {id}</h1>;
     }
     ```

  3. Nested routes:

     ```text
     pages/
     ├── index.js
     ├── about.js
     └── blog/
         ├── index.js
         └── [id].js
     ```

- Live Demo:
    - Create various route types
    - Show dynamic routing in action
    - Demonstrate nested routes

## 4. Building a Project with Next.js (15 minutes)

- Objective: Create a practical project using Next.js features

- Project Features:
  1. Navigation between pages
  2. Dynamic content loading
  3. Layout components
  4. API integration

- Code Examples:

  ```jsx
  // components/Layout.js
  export default function Layout({ children }) {
    return (
      <div>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>
        <main>{children}</main>
      </div>
    );
  }

  // pages/index.js
  export default function Home() {
    return (
      <Layout>
        <h1>Welcome to Next.js</h1>
      </Layout>
    );
  }
  ```

## 5. Next.js Best Practices (10 minutes)

- Discussion Topics:
  1. Project structure organization
  2. Component organization

- Key Points:
  1. Keep pages directory clean
  2. Use components for reusability

## 6. Recap and Q&A (5 minutes)

- Review Key Points:
  1. Next.js fundamentals
  2. Project setup
  3. Routing system
  4. Best practices

- Assignment Preview:
    - Create a multi-page Next.js application
    - Implement dynamic routing
    - Add navigation between pages

## Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js Routing](https://nextjs.org/docs/routing/introduction)
- [Next.js Project Structure](https://nextjs.org/docs/getting-started/project-structure)
- [Next.js Deployment](https://nextjs.org/docs/deployment)
