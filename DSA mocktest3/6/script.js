const openModalBtn = document.getElementById('openModalBtn');
const modalContainer = document.getElementById('modalContainer');
const closeBtn = document.getElementById('closeBtn');

openModalBtn.addEventListener('click', function() {
  modalContainer.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

closeBtn.addEventListener('click', function() {
  modalContainer.style.display = 'none';
  document.body.style.overflow = 'auto';
});

modalContainer.addEventListener('click', function(event) {
  if (event.target === modalContainer) {
    modalContainer.style.display = 'none';
    document.body.style.overflow = 'auto';
  }
});
