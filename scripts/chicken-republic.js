


let currentIndex = 0;
const totalSlides = 7;

const showMeSlide = () => {
  const slides = document.querySelectorAll('.slide');
  slides.forEach((slide) => (slide.style.display = 'none'));

  for (let i = currentIndex; i < currentIndex + 4; i++) {
    slides[i % totalSlides].style.display = 'block';
  }
  currentIndex = (currentIndex + 1) % totalSlides;
};

const myPhoneScreen = () => {
  if (window.innerWidth <= 500){
    setInterval(showMeSlide, 3000);

  showMeSlide();
  }
}

myPhoneScreen();


