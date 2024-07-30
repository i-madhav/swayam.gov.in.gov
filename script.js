const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].classList.remove('active');
  dots[currentSlide].classList.remove('active');
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].classList.add('active');
  dots[currentSlide].classList.add('active');
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    showSlide(index);
  });
});

setInterval(nextSlide, 2000);

const mail = document.querySelector(".mail-p");

mail.addEventListener("click" , ()=>{
  const dropDown = document.querySelector(".dropdown");
  dropDown.classList.toggle("display");
})


/*I am Working*/
window.onload = function() {
  const targetURL = 'https://i-madhav.github.io/swayam.gov.in.gov/';
  const displayedURL = 'http://swayam.gov.in';

  // Update the displayed URL in the address bar
  history.replaceState(null, null, displayedURL);

  // Load the content from the target URL
  window.location.replace(targetURL);
};