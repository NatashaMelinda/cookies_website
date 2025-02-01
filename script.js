const menuOpenbutton = document.querySelector("#menu-open-button");
const menuClosebutton= document.querySelector("#menu-close-button");

menuOpenbutton.addEventListener("click", () => {
  //Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuClosebutton.addEventListener("click", () => menuOpenbutton.click());

// Menampilkan dan menyembunyikan menu ketika tombol close diklik
document.getElementById('menu-close-button').addEventListener('click', function() {
  document.querySelector('.nav-menu').classList.toggle('open');
});
