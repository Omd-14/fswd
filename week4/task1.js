const readline = require('readline');
const url = require('url');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Enter a URL: ', (inputURL) => {
  const parsedURL = url.parse(inputURL, true);

  console.log('Protocol:', parsedURL.protocol);
  console.log('Host:', parsedURL.host);
  console.log('Path:', parsedURL.pathname);

  if (Object.keys(parsedURL.query).length > 0) {
    console.log('Query Parameters:');
    for (const key in parsedURL.query) {
      console.log(`${key}: ${parsedURL.query[key]}`);
    }
  } else {
    console.log('No Query Parameters');
  }

  rl.close();
});
const url = require('url');

function resolveURL(baseUrl, relativePath) {
  const absoluteUrl = url.resolve(baseUrl, relativePath);
  console.log('Absolute URL:', absoluteUrl);
}

resolveURL('https://example.com/base/path', '/relative/path');


