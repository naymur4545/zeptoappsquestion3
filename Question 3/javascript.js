document.getElementById('user-menu-button').addEventListener('click', function() {
  const menu = document.getElementById('user-menu');
  menu.classList.toggle('hidden');
});

// Optional: Close the menu if clicked outside
window.addEventListener('click', function(event) {
  const menuButton = document.getElementById('user-menu-button');
  const menu = document.getElementById('user-menu');
  if (!menuButton.contains(event.target) && !menu.contains(event.target)) {
    menu.classList.add('hidden');
  }
});
