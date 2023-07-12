const loader = document.getElementById('loader');
const list = document.getElementById('list');

// Show the skeleton loader
loader.style.display = 'block';

fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(data => {
    // Hide the skeleton loader
    loader.style.display = 'none';

    // Render the data
    data.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = item.title;
      list.appendChild(listItem);
    });
  })
  .catch(error => {
    // Handle errors
    console.log('An error occurred:', error);
    loader.style.display = 'none';
  });
