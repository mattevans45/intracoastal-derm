import express, { static as expressStatic } from 'express';
import { join } from 'path';

const app = express();
const PORT = process.env.PORT || 3000;

// Redirect www to non-www
app.use((req, res, next) => {
  if (req.hostname.startsWith('www.')) {
    const newUrl = `https://${req.hostname.slice(4)}${req.originalUrl}`;
    return res.redirect(301, newUrl);
  }
  next();
});

// Set cache headers for static assets
app.use(expressStatic(join(__dirname, 'dist'), {
  maxAge: '1y',
  setHeaders: (res, path) => {
    if (path.endsWith('.html')) {
      res.setHeader('Cache-Control', 'no-cache');
    }
  }
}));

// For any other routes, serve the index.html file
app.get('*', (req, res) => {
  res.sendFile(join(__dirname, 'dist', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});