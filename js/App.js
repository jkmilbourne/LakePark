"use strict";

let slideIndex, slides;

function initGallery() {
  slideIndex = 0;
  slides = document.getElementsByClassName("carsousel-image");
}
initGallery();

function plusSlides(num) {
  let current, next;

  let n = slideIndex + num;

  if (n > slideIndex) {
    if (n >= slides.length) {
      n = 0;
    }
  } else if (n < slideIndex) {
    if (n < 0) {
      n = slides.length - 1;
    }
  }

  if (n != slideIndex) {
    next = slides[n];
    current = slides[slideIndex];
    slideIndex = n;
  }

  if (slideIndex === 0) {
    slides[0].classList.remove("move100", "move-100");
    slides[0].classList.add("move0");
    slides[1].classList.remove("move100", "move-100");
    slides[1].classList.add("move0");
    slides[2].classList.remove("move-300", "move-100");
    slides[2].classList.add("move0");
    slides[3].classList.remove("move-300", "move-100");
    slides[3].classList.add("move-400");
    if (num === 1) {
      slides[1].classList.remove("inactive");
      slides[2].classList.add("inactive")
    } else {
      slides[0].classList.remove("inactive");
      slides[3].classList.add("inactive");
    }
  } else if (slideIndex === 1) {
    slides[0].classList.remove("move0", "move200");
    slides[0].classList.add("move-100");
    slides[1].classList.remove("move0", "move-200");
    slides[1].classList.add("move-100");
    slides[2].classList.remove("move0", "move-200");
    slides[2].classList.add("move-100");
    slides[3].classList.remove("move-400", "move-200");
    slides[3].classList.add("move-100");
    if (num === 1) {
      slides[2].classList.remove("inactive");
      slides[3].classList.add("inactive");
    } else {
      slides[1].classList.remove("inactive");
      slides[0].classList.add("inactive");
    }
  } else if (slideIndex === 2) {
    slides[0].classList.remove("move-100", "move100");
    slides[0].classList.add("move200");
    slides[1].classList.remove("move-100", "move100");
    slides[1].classList.add("move-200");
    slides[2].classList.remove("move-100", "move-300");
    slides[2].classList.add("move-200");
    slides[3].classList.remove("move-100", "move-300");
    slides[3].classList.add("move-200");
    if (num === 1) {
      slides[3].classList.remove("inactive");
      slides[0].classList.add("inactive");
    } else {
      slides[2].classList.remove("inactive");
      slides[1].classList.add("inactive");
    }
  } else if (slideIndex === 3) {
    slides[0].classList.remove("move200", "move0");
    slides[0].classList.add("move100");
    slides[1].classList.remove("move-200", "move0");
    slides[1].classList.add("move100");
    slides[2].classList.remove("move-200", "move0");
    slides[2].classList.add("move-300");
    slides[3].classList.remove("move-200", "move-400");
    slides[3].classList.add("move-300");
    if (num === 1) {
      slides[0].classList.remove("inactive");
      slides[1].classList.add("inactive");
    } else {
      slides[3].classList.remove("inactive");
      slides[2].classList.add("inactive");
    }
  }
  console.log(slideIndex);
}

let timer = null;

function setTimer() {
  timer = setInterval(function () {
    plusSlides(1);
  }, 5000);
}
setTimer();

function playPauseSlides() {
  if (timer == null) {
    setTimer();
  } else {
    clearInterval(timer);
    timer = null;
  }
}
