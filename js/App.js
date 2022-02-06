// "use strict";

let slideIndex, slides;

function initGallery() {
  slideIndex = 0;
  slides = document.getElementsByClassName("carsousel-image");
  console.log(slides[slideIndex]);
  // slides[0].classList.add("move-left");
  // slides[1].classList.add("move-left", "inactive");
  // slides[2].classList.add("move-left");
  // slides[slideIndex + 1].className.add("move-left");
  // slides[slideIndex].style.opacity = 1;
}
initGallery();

// function plusSlides(n) {
//   moveSlide(slideIndex + n);
// }

// function moveSlide(n) {
//   let i;
//   let current, next;
//   let moveSlideAnimClass = {
//     forCurrent: "",
//     forNext: "",
//   };
//   let slideTextAnimClass;
//   if (n > slideIndex) {
//     if (n >= slides.length) {
//       n = 0;
//     }
//     moveSlideAnimClass.forCurrent = "moveLeftCurrentSlide";
//     moveSlideAnimClass.forNext = "moveLeftNextSlide";
//     slideTextAnimClass = "slideTextFromTop";
//   } else if (n < slideIndex) {
//     if (n < 0) {
//       n = slides.length - 1;
//     }
//     moveSlideAnimClass.forCurrent = "moveRightCurrentSlide";
//     moveSlideAnimClass.forNext = "moveRightPrevSlide";
//     slideTextAnimClass = "slideTextFromBottom";
//   }

//   if (n != slideIndex) {
//     next = slides[n];
//     current = slides[slideIndex];
//     for (i = 0; i < slides.length; i++) {
//       slides[i].className = "imageHolder";
//       slides[i].style.opacity = 0;
//       dots[i].classList.remove("active");
//     }
//     current.classList.add(moveSlideAnimClass.forCurrent);
//     next.classList.add(moveSlideAnimClass.forNext);
//     dots[n].classList.add("active");
//     slideIndex = n;
//   }
// }

// let timer = null;

// function setTimer() {
//   timer = setInterval(function () {
//     plusSlides(1);
//   }, 3000);
// }
// // setTimer();

// function playPauseSlides() {
//   let playPauseBtn = document.getElementById("playPause");
//   if (timer == null) {
//     setTimer();
//     playPauseBtn.style.backgroundPositionY = "0px";
//   } else {
//     clearInterval(timer);
//     timer = null;
//     playPauseBtn.style.backgroundPositionY = "-33px";
//   }
// }
