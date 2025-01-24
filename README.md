# Node.js and Express.js Notes

## Node.js

### What is Node.js?
- Node.js is an open-source, cross-platform runtime environment for executing JavaScript code outside of a browser.
- Built on Chrome's V8 JavaScript engine.
- Primarily used for building server-side and network applications.

### Features of Node.js
- **Non-blocking I/O model**: Handles multiple requests asynchronously.
- **Event-driven architecture**: Uses events to handle operations.
- **Scalability**: Handles a large number of simultaneous connections.
- **Single-threaded**: Although single-threaded, it uses libuv for async operations.
- **Package management**: Uses npm (Node Package Manager) to manage libraries and dependencies.

### Core Modules in Node.js
1. **fs**: File system module for reading and writing files.
2. **http**: Module to create HTTP servers and handle requests.
3. **path**: Utilities to work with file and directory paths.
4. **os**: Provides operating system-related utilities.
5. **events**: Implements the event-driven architecture.
6. **url**: Parses and formats URL strings.

### Creating a Server in Node.js
```javascript
const http = require('http');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello, World!\n');
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
```

### NPM and package.json
- **npm**: Node Package Manager used to install, update, and manage libraries and packages.
- **package.json**: A metadata file for your Node project that includes project details, dependencies, scripts, etc.

### Asynchronous I/O in Node.js
- Node.js uses a single-threaded event loop.
- Asynchronous operations (e.g., file reads, HTTP requests) are delegated to worker threads in libuv.

```javascript
const fs = require('fs');

fs.readFile('example.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});
```

---

## Express.js

### What is Express.js?
- Express.js is a lightweight, flexible Node.js framework for building web applications and APIs.
- Simplifies server creation and routing.
- Provides robust middleware for handling requests and responses.

### Features of Express.js
- **Routing**: Easily define routes for your application.
- **Middleware**: Functions executed during the request-response cycle.
- **Template Engines**: Supports integration with templating engines like EJS, Pug, etc.
- **Error Handling**: Built-in error-handling mechanisms.
- **Static File Serving**: Serve static assets like HTML, CSS, and images.

### Installing Express
```bash
npm install express
```

### Creating a Server with Express.js
```javascript
const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
```

### Middleware in Express.js
- Middleware functions are executed sequentially during the lifecycle of a request.

#### Types of Middleware:
1. **Built-in Middleware**
   - `express.json()`: Parses JSON payloads.
   - `express.urlencoded()`: Parses URL-encoded payloads.
   - `express.static()`: Serves static files.

2. **Third-party Middleware**
   - Example: `morgan` for logging requests.

3. **Custom Middleware**
   ```javascript
   app.use((req, res, next) => {
       console.log(`${req.method} request for ${req.url}`);
       next();
   });
   ```

### Route Handling in Express.js
```javascript
app.get('/users', (req, res) => {
    res.send('Get all users');
});

app.post('/users', (req, res) => {
    res.send('Create a user');
});

app.put('/users/:id', (req, res) => {
    res.send(`Update user with ID ${req.params.id}`);
});

app.delete('/users/:id', (req, res) => {
    res.send(`Delete user with ID ${req.params.id}`);
});
```

### Error Handling Middleware
```javascript
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});
```

### Query Parameters and Request Body
```javascript
app.get('/search', (req, res) => {
    const query = req.query;
    res.send(`Search query: ${JSON.stringify(query)}`);
});

app.post('/submit', express.json(), (req, res) => {
    const body = req.body;
    res.send(`Request body: ${JSON.stringify(body)}`);
});
```

---

### Key Differences Between Node.js and Express.js
| Feature            | Node.js                          | Express.js                         |
|--------------------|----------------------------------|-------------------------------------|
| **Definition**     | JavaScript runtime environment. | Web framework built on Node.js.    |
| **Purpose**        | Build server-side applications. | Simplify web and API development.  |
| **Routing**        | Manual implementation.          | Built-in routing capabilities.     |
| **Middleware**     | Requires custom implementation. | Supports built-in and custom middleware. |
| **Ease of Use**    | More complex setup.             | Simplifies server creation.        |

---

### References
- [Node.js Documentation](https://nodejs.org/en/docs/)
- [Express.js Documentation](https://expressjs.com/)
