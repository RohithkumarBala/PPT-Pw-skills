const menuIcon = document.querySelector('.menu-icon');
const menuItems = document.querySelector('.menu-items');

menuIcon.addEventListener('click', function() {
  menuItems.classList.toggle('show');
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    menuItems.style.display = 'flex';
  } else {
    menuItems.style.display = 'none';
  }
});
