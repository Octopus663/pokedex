# High-Performance PokeAPI Explorer

A modern, scalable web application built with **React 19**, **TypeScript**, and **TanStack Query**. This project serves as a comprehensive demonstration of modular architecture, advanced state management, and utility-first styling using **Tailwind CSS v4**.

## Technical Stack

* **Framework**: [React 19](https://react.dev/) (Functional Components, Hooks)
* **Server State**: [TanStack Query (React Query) v5](https://tanstack.com/query/latest) — implementing sophisticated caching and data synchronization.
* **Global State**: [Zustand](https://zustand-demo.pmnd.rs/) — lightweight state management with middleware-based persistence.
* **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) — utilizing the latest PostCSS-integrated engine for rapid UI development.
* **Routing**: [React Router v6](https://reactrouter.com/) — dynamic route matching and navigation.
* **Data Fetching**: [Axios](https://axios-http.com/) — centralized API client with type-safe response handling.

## Architectural Pattern

The project follows a **Feature-Based (Modular) Architecture** to ensure high maintainability and horizontal scalability:

* **/src/features**: Encapsulated domain logic. Each feature (e.g., `pokemons`) contains its own API services, components, hooks, and store.
* **/src/pages**: Composition layer that assembles features into full-page views.
* **/src/app**: Global configuration, providers, and application-wide routing setup.
* **/src/components**: Reusable UI primitives and shared presentational components.

## Key Features

* **Asynchronous Data Management**: Automated loading/error states and intelligent caching using TanStack Query.
* **Persistent Global State**: Favorites system implemented via Zustand with `persist` middleware for LocalStorage synchronization.
* **Dynamic Pagination**: Optimized offset-based navigation with background data prefetching.
* **Interactive UI**: Responsive grid layouts, state-driven progress bars for stats visualization, and smooth transitions.
* **Strict Type Safety**: End-to-end TypeScript implementation for API responses, store schemas, and component props.

## Installation and Deployment

### Prerequisites
* Node.js (LTS version)
* npm or yarn

### Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
    npm install
   ```
3. Launch development server:
    ```bash
    npm run dev
    ```

### Production
Build the optimized bundle:
```bash
    npm run build
```