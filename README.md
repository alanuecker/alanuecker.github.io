# Personal Portfolio

This is my personal portfolio website, built using Vite, React, TypeScript, and Sass. It showcases my projects, skills, and experiences.

## Installation

To get a local copy up and running, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/alanuecker/alanuecker.github.io.git
   cd alanuecker.github.io
   ```

2. Install the dependencies:

   ```bash
   yarn
   ```

## Usage

To run the project locally, use the following command:

```bash
yarn dev
```

Open your browser and visit `http://localhost:3000` to view the portfolio.

## Development

### Folder Structure

- `src/`: Contains the main source code for the project.
  - `public/`: Stores images, fonts, and other static assets.
  - `src/components/`: Contains reusable React components.
  - `src/pages/`: Includes the main pages of the portfolio.
  - `src/styles/`: Contains the Sass files for styling.
  - `src/main.tsx`: The root component of the application.
  - `index.html`: The entry point of the website.

### Scripts

- `yarn dev`: Start the development server.
- `yarn build`: Build the project for production.
- `yarn preview`: Serve the production build locally.
- `yarn lint:ts`: Run ESLint for the project.
- `yarn lint:css`: Run Stylelint for the project.

## Deployment

To deploy the project, follow these steps:

1. Build the project for production:

   ```bash
   yarn build
   ```

2. Deploy the contents of the `dist` directory to your preferred hosting provider.

This project will be automatically deployed to Github Pages through the action in `.github/workflows/deploy.yml`.
