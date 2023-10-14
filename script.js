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

   document.addEventListener('DOMContentLoaded', function(){
    let cursor = document.querySelector('.custom-cursor');
    let cursorBefore = document.querySelector('.custom-cursor-before');

   document.addEventListener('mousemove', function(e){
       cursor.style.left = e.clientX+'px';
       cursor.style.top = e.clientY+'px';
       cursorBefore.style.left = e.clientX+'px';
       cursorBefore.style.top = e.clientY+'px';
    })
  })


