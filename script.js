let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function showSlide(index) {
  const carousel = document.querySelector('.carousel');
  const slideWidth = document.querySelector('.slide').clientWidth;
  carousel.style.transform = `translateX(${-index * slideWidth}px)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  showSlide(currentIndex);
}

// Automatic rotation (optional)
setInterval(nextSlide, 5000); // Change slide every 5 seconds (adjust as needed)
