const form = document.getElementById('myForm');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  if (validateForm()) {
    alert('Form submitted successfully!');
    form.reset();
  }
});

function validateForm() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const passwordInput = document.getElementById('password');
  const ageInput = document.getElementById('age');
  const genderInput = document.getElementById('gender');
  const dateInput = document.getElementById('date');
  const colorInput = document.getElementById('color');

  let isValid = true;

  if (!nameInput.value.trim()) {
    isValid = false;
    showError(nameInput, 'Name is required');
  } else {
    removeError(nameInput);
  }

  if (!emailInput.value.trim()) {
    isValid = false;
    showError(emailInput, 'Email is required');
  } else if (!validateEmail(emailInput.value.trim())) {
    isValid = false;
    showError(emailInput, 'Invalid email format');
  } else {
    removeError(emailInput);
  }

  if (!phoneInput.value.trim()) {
    isValid = false;
    showError(phoneInput, 'Phone number is required');
  } else if (!validatePhoneNumber(phoneInput.value.trim())) {
    isValid = false;
    showError(phoneInput, 'Invalid phone number format');
  } else {
    removeError(phoneInput);
  }

  if (!passwordInput.value.trim()) {
    isValid = false;
    showError(passwordInput, 'Password is required');
  } else {
    removeError(passwordInput);
  }

  if (!ageInput.value.trim()) {
    isValid = false;
    showError(ageInput, 'Age is required');
  } else if (parseInt(ageInput.value.trim()) < 18) {
    isValid = false;
    showError(ageInput, 'Age must be 18 or above');
  } else {
    removeError(ageInput);
  }

  if (!genderInput.value) {
    isValid = false;
    showError(genderInput, 'Gender is required');
  } else {
    removeError(genderInput);
  }

  if (!dateInput.value) {
    isValid = false;
    showError(dateInput, 'Date is required');
  } else {
    removeError(dateInput);
  }

  if (!colorInput.value) {
    isValid = false;
    showError(colorInput, 'Color is required');
  } else {
    removeError(colorInput);
  }

  return isValid;
}

function showError(input, errorMessage) {
  const errorElement = document.createElement('span');
  errorElement.classList.add('error');
  errorElement.textContent = errorMessage;

  const parentElement = input.parentElement;
  parentElement.appendChild(errorElement);
}

function removeError(input) {
  const parentElement = input.parentElement;
  const errorElement = parentElement.querySelector('.error');
  if (errorElement) {
    parentElement.removeChild(errorElement);
  }
}

function validateEmail(email) {
  const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  return emailRegex.test(email);
}

function validatePhoneNumber(phoneNumber) {
  const phoneRegex = /^\d{10}$/;
  return phoneRegex.test(phoneNumber);
}
