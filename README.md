# HackDashIt - Hacker Simulator

Experience the thrill of hacking with our fun hacker simulator. Enter any URL and watch as our advanced system breaches security protocols.

## Live Demo

The app is deployed on GitHub Pages: [https://weibeld.github.io/hackdashit/](https://weibeld.github.io/hackdashit/)

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Deployment to GitHub Pages

### Automatic Deployment

The app automatically deploys to GitHub Pages when changes are pushed to the `main` branch via GitHub Actions.

### Manual Deployment

You can also manually deploy using:

```bash
npm run deploy
```

This will:
1. Build the app for production
2. Deploy the `dist/public` directory to the `gh-pages` branch

## Technologies

- React
- TypeScript
- Vite
- Tailwind CSS
- Express (backend)
