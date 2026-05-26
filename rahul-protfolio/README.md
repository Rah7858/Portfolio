# Rahul Kumar - Portfolio Website

## Project Info

A modern, responsive portfolio website built with React, TypeScript, Tailwind CSS, and Vite. Showcasing full-stack development, UI/UX design, and Python automation projects.

## Technologies used

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn-ui
- **Routing**: React Router
- **Forms**: React Hook Form
- **HTTP Client**: Fetch API
- **Email Service**: EmailJS

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or bun package manager

### Installation

1. Clone the repository
```bash
git clone <your-repository-url>
cd rahul-portfolio
```

2. Install dependencies
```bash
npm install
# or
bun install
```

3. Create a `.env` file for environment variables (if needed)
```bash
cp .env.example .env
```

4. Start the development server
```bash
npm run dev
# or
bun run dev
```

The site will be available at `http://localhost:8080`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Deployment

### Deploy to Vercel

The easiest way to deploy this project is to use [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Visit [vercel.com](https://vercel.com) and import your repository
3. Vercel will automatically detect it's a Vite project and configure the build settings
4. Click "Deploy"

Your site will be live within minutes!

### Deploy to Other Platforms

**Netlify:**
- Connect your GitHub repository to Netlify
- Set build command: `npm run build`
- Set publish directory: `dist`

**GitHub Pages:**
```bash
npm run build
# Deploy the dist/ folder to GitHub Pages
```

## Custom Domain

You can connect a custom domain to your deployed site:
- **Vercel**: Add domain in Project Settings > Domains
- **Netlify**: Add domain in Site Settings > Domain Management
- **GitHub Pages**: Update your DNS settings and add the domain in repository settings
