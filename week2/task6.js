const fs = require('fs');

const file1Path = "file1.txt";
const file2Path = "file2.txt";

// Read the content of file1
fs.readFile(file1Path, 'utf8', (err, file1Data) => {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }

  // Read the content of file2
  fs.readFile(file2Path, 'utf8', (err, file2Data) => {
    if (err) {
      console.error('Error reading file:', err);
      return;
    }

    const file1Lines = file1Data.split('\n');
    const file2Lines = file2Data.split('\n');

    // Compare the number of lines in each file
    const file1LineCount = file1Lines.length;
    const file2LineCount = file2Lines.length;

    console.log(`Number of lines in ${file1Path}: ${file1LineCount}`);
    console.log(`Number of lines in ${file2Path}: ${file2LineCount}`);

    // Compare the size of each file
    const file1Size = file1Data.length;
    const file2Size = file2Data.length;

    if (file1Size > file2Size) {
      console.log(`${file1Path} is larger than ${file2Path}`);
    } else if (file1Size < file2Size) {
      console.log(`${file2Path} is larger than ${file1Path}`);
    } else {
      console.log(`${file1Path} and ${file2Path} have the same size`);
    }

    // Compare the lines of each file
    const differentLines = [];

    for (let i = 0; i < Math.min(file1LineCount, file2LineCount); i++) {
      if (file1Lines[i] !== file2Lines[i]) {
        differentLines.push(i + 1);
      }
    }

    if (differentLines.length > 0) {
      console.log('Different lines between the files:');
      console.log(differentLines);
    } else {
      console.log('The files have the same content');
    }
  });
});
