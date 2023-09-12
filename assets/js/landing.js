const prevButton = document.getElementById("prevBtn");
const nextButton = document.getElementById("nextBtn");
const carouselContainer = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".carousel-slide");
// const 
let currentIndex = 0;

function showSlide(index) {
  carouselContainer.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

// Untuk membuat otomatis
setInterval(nextSlide, 3000); // Ganti gambar setiap 3 detik
