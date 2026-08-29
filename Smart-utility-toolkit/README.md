# Smart Utility Toolkit — Lab Assignment 1 Sem-3

**Course:** Web Dev III (Node.js & Express Backend)
**Unit:** Unit–1
**Marks:** 2.5

## 📌 About

A collection of 5 mini backend utilities built using **only Node.js core modules**
(`process`, `http`, `fs`, `crypto`) — no external npm packages or frameworks like Express.

## 📂 File Structure

```
smart-utility-toolkit/
├── app.js              → Demonstrates custom module reuse (isEven + logger)
├── calculator.js        → CLI calculator using process.argv
├── server.js             → Basic HTTP server with multiple routes
├── fileManager.js        → File CRUD operations using fs module
├── dice.js               → Random dice roll generator using crypto module
└── modules/
    ├── isEven.js         → Custom module: checks if a number is even/odd
    └── logger.js         → Custom module: logs messages with a timestamp
```

## ▶️ How to Run Each File

### 1. Module Reuse Demo
```bash
node app.js
```
Tests several numbers with `isEven` and logs results using the custom `logger` module.

### 2. CLI Calculator
```bash
node calculator.js add 10 5
node calculator.js sub 10 5
node calculator.js multiply 10 5
node calculator.js divide 10 5
```
Supports `add`, `sub`, `multiply`, `divide`. Handles invalid input/operations gracefully.

### 3. HTTP Server
```bash
node server.js
```
Then open in browser:
| Route | Response |
|---|---|
| `http://localhost:3000/` | Welcome to Node Server |
| `http://localhost:3000/about` | About Page |
| `http://localhost:3000/contact` | Contact Page |
| any other route | 404 Error |

Press `Ctrl+C` to stop the server.

### 4. File Manager (CRUD)
```bash
node fileManager.js
```
Creates `test.txt` → reads it → updates (appends) it → reads again → deletes it.

### 5. Dice Roll Generator
```bash
node dice.js
```
Rolls a secure random 1–6 dice once, then simulates 5 more rolls in a loop.

## 🖥️ Sample Output

**app.js**
```
[timestamp] Starting isEven module test...
[timestamp] Number 2 is Even
[timestamp] Number 7 is Odd
...
```

**calculator.js**
```
$ node calculator.js add 10 5
Result: 15
```

**fileManager.js**
```
Creating File...
File Created
Reading File
Hello Node.js
File Updated
Hello Node.js
Learning FS Module
File Deleted
```

**dice.js**
```
--- Single Dice Roll ---
Dice Rolled: 4

--- Simulating 5 Dice Rolls ---
Roll 1: Dice Rolled: 2
Roll 2: Dice Rolled: 6
...
```

**server.js**
```
Server is running at http://localhost:3000/
Available routes: /, /about, /contact
```

## 🧠 What This Demonstrates

- `process.argv` for CLI input handling
- Custom modules via `module.exports` / `require()`
- HTTP server & routing using core `http` module
- File CRUD operations using core `fs` module
- Secure random number generation using core `crypto` module