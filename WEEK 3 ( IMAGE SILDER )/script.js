const slides = document.getElementById('slides');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
let index = 0;

function showSlide(i) {
  const slideWidth = slides.clientWidth;
  slides.style.transform = `translateX(${-i * slideWidth}px)`;
}

prevBtn.addEventListener('click', () => {
  index = (index === 0) ? slides.children.length - 1 : index - 1;
  showSlide(index);
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % slides.children.length;
  showSlide(index);
});

// Optional Auto Slide
setInterval(() => {
  index = (index + 1) % slides.children.length;
  showSlide(index);
}, 5000);
