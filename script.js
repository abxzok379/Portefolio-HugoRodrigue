function openMenu() {
    var menu = document.querySelector('#menu');
    menu.classList.remove('close');
    menu.classList.toggle('show');
  }
  
  function closeMenu() {
    var menu = document.querySelector('#menu');
    menu.classList.remove('show');
    menu.classList.toggle('close');
  }
  
  function nextPage() {
    var menu = document.querySelector('#menu');
    var page = document.querySelector('#page2');
    menu.classList.remove('show');
    menu.classList.toggle('close');
    page.classList.toggle('show');
  }