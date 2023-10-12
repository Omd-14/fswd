const path = require('path');
const fs = require('fs');
// Function to extract directory name and base name
function extractFileInfo(filePath) {
const dirName = path.dirname(filePath);
const baseName = path.basename(filePath);
return {dirName, baseName};
}
// Function to check if the file exists
function checkFileExists(filePath) {
return new Promise((resolve) => {
fs.stat(filePath, (err, stats) => {
if (err) {
    resolve(false); // File does not exist
} else {
resolve(stats.isFile());
} });
});
}
const filePathToProcess = 'C:\Users\DELL\Desktop\sem 5\fswd\week4\task4.js';
// Extract directory name and base name
const fileInfo = extractFileInfo(filePathToProcess);
console.log('Directory Name:', fileInfo.dirName);
console.log('Base Name:', fileInfo.baseName);
// Check if the file exists
checkFileExists(filePathToProcess)
.then((fileExists) => {
if (fileExists) {
console.log('File does not exist!');
} else {
console.error('File exist.');
}
})
.catch((err) => {
console.error('Error:', err.message);
});
