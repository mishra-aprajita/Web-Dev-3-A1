# Smart Utility Toolkit — Lab Assignment 1

**Course:** Web Dev III (Node.js & Express Backend)

A set of 5 mini backend utilities built using **only Node.js core modules**
(`process`, `http`, `fs`, `crypto`) — no external packages or Express.

## Files

| File | What it does |
|---|---|
| `app.js` | Demonstrates reusing custom modules (`isEven` + `logger`) |
| `calculator.js` | CLI calculator using `process.argv` |
| `server.js` | HTTP server with multiple routes |
| `fileManager.js` | File CRUD operations using `fs` |
| `dice.js` | Random dice roll generator using `crypto` |
| `modules/isEven.js` | Checks if a number is even/odd |
| `modules/logger.js` | Logs messages with a timestamp |

## How to Run

```bash
node app.js
node calculator.js add 10 5
node server.js          # then visit /, /about, /contact in browser
node fileManager.js
node dice.js
```

## Server Routes

| Route | Response |
|---|---|
| `/` | Welcome to Node Server |
| `/about` | About Page |
| `/contact` | Contact Page |
| any other | 404 Error |

## What This Demonstrates

- `process.argv` for CLI input
- Custom modules via `module.exports` / `require()`
- HTTP server & routing with core `http` module
- File CRUD with core `fs` module
- Secure random generation with core `crypto` module