// slide.js
let slideIndex = 0;
const slides = document.getElementsByClassName("slide");
const controls = document.getElementsByClassName("control");

function showSlide(n) {
    if (n >= slides.length) slideIndex = 0;
    if (n < 0) slideIndex = slides.length - 1;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        controls[i].classList.remove("active");
    }

    slides[slideIndex].style.display = "block";
    controls[slideIndex].classList.add("active");
}

function nextSlide() {
    showSlide(slideIndex + 1);
}

function prevSlide() {
    showSlide(slideIndex - 1);
}

function initSlideshow() {
    showSlide(slideIndex);
    setInterval(nextSlide, 5000); // Ganti slide setiap 5 detik
}