const fs = require('fs');
const path = require('path');

// Create a file
fs.writeFile('demo.txt', 'This is an example file.', 'utf8', (err) => {
  if (err) {
    console.error('Error creating file:', err);
    return;
  }
  console.log('File created successfully!');
});

// Read a file
fs.readFile('demo.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File content:', data);
});

// Append to a file
fs.appendFile('demo.txt', '\nThis is additional content.', 'utf8', (err) => {
  if (err) {
    console.error('Error appending to file:', err);
    return;
  }
  console.log('File appended successfully!');
});

// Delete a file
fs.unlink('demo.txt', (err) => {
  if (err) {
    console.error('Error deleting file:', err);
    return;
  }
  console.log('File deleted successfully!');
});

// Rename a file
fs.rename('oldname.txt', 'newname.txt', (err) => {
  if (err) {
    console.error('Error renaming file:', err);
    return;
  }
  console.log('File renamed successfully!');
});

// List files/directories in a directory
const directoryPath = './';
fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  console.log('Files and directories in the current directory:');
  files.forEach((file) => {
    console.log(file);
  });
});
