// server.js
// A basic HTTP server built using Node's core 'http' module (no Express)

const http = require('http');

const PORT = 3000;

// createServer takes a callback that runs on every incoming request
const server = http.createServer((req, res) => {
  // Log every incoming request for analysis
  console.log(`Incoming request: ${req.method} ${req.url}`);

  // Set the response header content type for all routes
  res.setHeader('Content-Type', 'text/plain');

  // Simple routing based on req.url
  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Welcome to Node Server');
  } else if (req.url === '/about') {
    res.statusCode = 200;
    res.end('About Page');
  } else if (req.url === '/contact') {
    res.statusCode = 200;
    res.end('Contact Page');
  } else {
    // Any unmatched route returns a 404
    res.statusCode = 404;
    res.end('404 Error: Page Not Found');
  }
});

// Start listening on the custom port
server.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}/`);
  console.log('Available routes: /, /about, /contact');
});
