// fileManager.js
// Performs sequential CRUD operations on test.txt using the 'fs' module

// fs.promises gives us Promise-based versions of fs methods,
// which lets us use async/await to guarantee the operations run
// in the exact sequence: Create -> Read -> Update -> Read -> Delete
const fs = require('fs').promises;

const filePath = './test.txt';

async function runFileManager() {
  try {
    // 1. CREATE the file
    console.log('Creating File...');
    await fs.writeFile(filePath, 'Hello Node.js');
    console.log('File Created');

    // 2. READ the file
    console.log('Reading File');
    let content = await fs.readFile(filePath, 'utf8');
    console.log(content);

    // 3. UPDATE (append) the file
    await fs.appendFile(filePath, '\nLearning FS Module');
    console.log('File Updated');

    // 4. READ the updated file
    content = await fs.readFile(filePath, 'utf8');
    console.log(content);

    // 5. DELETE the file
    await fs.unlink(filePath);
    console.log('File Deleted');

  } catch (err) {
    // Handle missing file / permission errors gracefully
    if (err.code === 'ENOENT') {
      console.log('Error: File not found.');
    } else {
      console.log('Error during file operation:', err.message);
    }
  }
}

runFileManager();
