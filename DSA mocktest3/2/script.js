const textInput = document.getElementById('textInput');
const submitButton = document.getElementById('submitButton');
const list = document.getElementById('list');

submitButton.addEventListener('click', function() {
  const userInput = textInput.value;

  if (userInput) {
    const listItem = document.createElement('li');
    listItem.textContent = userInput;
    list.appendChild(listItem);

    textInput.value = '';
  }
});
