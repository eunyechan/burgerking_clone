const slideIndex = 0;

// HTML 로드가 끝난 후 동작
window.onload = function () {
  showSlides(slideIndex);

  // Auto Move Slide
  const sec = 3000;
  setInterval(function () {
    slideIndex++;
    showSlides(slideIndex);
  }, sec);
};

// Next/Previous controls
function moveSlides(n) {
  slideIndex = slideIndex + n;
  showSlides(slideIndex);
}

function currentSlide(n) {
  slideIndex = n;
  showSlides(slideIndex);
}

function showSlides(n) {
  const slides = document.querySelector(".main-banner-wrap-container__inline");
  const dots = document.querySelector(".dot");
  const size = slides.length;

  if (n + 1 > size) {
    slideIndex = 0;
    n = 0;
  } else if (n < 0) {
    slideIndex = size - 1;
    n = size - 1;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = o; dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }

  slides[n].style.display = "block";
  dots[n].className += "active";
}
