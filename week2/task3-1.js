const axios = require('axios');

// Make a GET request
axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => {
    console.log('GET response:', response.data);
  })
  .catch(error => {
    console.error('GET error:', error.message);
  });

// Make a POST request
const postData = {
  title: 'New Post',
  body: 'This is the body of the post.',
  userId: 1
};

axios.post('https://jsonplaceholder.typicode.com/posts', postData)
  .then(response => {
    console.log('POST response:', response.data);
  })
  .catch(error => {
    console.error('POST error:', error.message);
  });
