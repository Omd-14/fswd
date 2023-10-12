const url = require('url');
const querystring = require('querystring');

function extractQueryParams(urlString) {
  const parsedUrl = url.parse(urlString);
  const queryParams = querystring.parse(parsedUrl.query);

  console.log('Query Parameters:');
  for (const key in queryParams) {
    console.log(`${key}: ${queryParams[key]}`);
  }
}

// Example usage:
const inputURL = 'https://example.com/path?name=OmDesai&age=20';
extractQueryParams(inputURL);
