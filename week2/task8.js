const fs = require('fs');
const path = require('path');

// Function to create directories recursively
function createDirectoryRecursively(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
}

// Function to create files recursively
function createFileRecursively(filePath, fileContent) {
  fs.writeFileSync(filePath, fileContent);
}

// Function to create file/folder structure from JSON
function createStructureFromJSON(parentPath, data) {
  if (data.hasOwnProperty('folders')) {
    data.folders.forEach(folder => {
      const folderPath = path.join(parentPath, folder.name);
      createDirectoryRecursively(folderPath);
      createStructureFromJSON(folderPath, folder);
    });
  }

  if (data.hasOwnProperty('files')) {
    data.files.forEach(file => {
      const filePath = path.join(parentPath, file.name);
      createFileRecursively(filePath, file.content);
    });
  }
}

// Read the JSON file containing the structure
fs.readFile('structure.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  try {
    const structure = JSON.parse(data);

    // Create the file/folder structure
    createStructureFromJSON('.', structure);

    console.log('File/folder structure created successfully!');
  } catch (error) {
    console.error('Error parsing JSON:', error);
  }
});
