const navigationMenu = document.querySelector('.navigation__menu');
const navigationMenuItems = document.querySelectorAll('.navigation__menu_item');

navigationMenu.addEventListener('click', (event) => {
  const { target } = event;
  const isNavButton = target.closest('.navigation__menu_item');
  if (isNavButton) {
    navigationMenuItems.forEach((item) => {
      item.classList.remove('active');
    })
  }
  isNavButton.classList.add('active');
})