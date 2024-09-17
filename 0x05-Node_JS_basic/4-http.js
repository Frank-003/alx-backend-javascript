const http = require('http');

// Create the HTTP server
const app = http.createServer((req, res) => {
  // Set the response header to indicate plain text content
  res.setHeader('Content-Type', 'text/plain');
  
  // Send the response body
  res.end('Hello Holberton School!');
});

// Listen on port 1245
const PORT = 1245;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// Export the app for external use (e.g., in tests)
module.exports = app;

