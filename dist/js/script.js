
// show menu
const menuBtn = document.querySelector("#menu-btn"),
  mobileMenu = document.querySelector('#menu');

menuBtn.addEventListener('click', (e) => {
  e.stopPropagation();

  mobileMenu.classList.toggle('hidden');
  // / Toggle Class "menu-active" On Botton
      menuBtn.classList.toggle('menu-active');
});

// Click Anywhere Outside Menu And Toggle Button
document.addEventListener("click", (e) => {

  if (e.target !== menuBtn && e.target !== mobileMenu) {

    // Check If Menu Is Open
    if (!mobileMenu.classList.contains('hidden')) {

      // Toggle Class "menu-active" On Botton
      menuBtn.classList.toggle('menu-active');

      // Toggle class "open" On Links
      mobileMenu.classList.toggle('hidden');

    }

  }
})

//Stop Propagation on Menu
mobileMenu.onclick = e => e.stopPropagation();

// copyright year
let yearSpan = document.querySelectorAll('.year');

let date = new Date();
yearSpan.forEach(span => {
  
  span.innerHTML = date.getFullYear();

});