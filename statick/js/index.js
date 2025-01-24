const tumbler = document.getElementById("theme1");

tumbler.addEventListener('click', function (){
    document.documentElement.setAttribute("theme", tumbler.checked ? 'dark': '');
})

const tumbler2 = document.getElementById("theme2");

tumbler2.addEventListener('click', function (){
    document.documentElement.setAttribute("theme", tumbler2.checked ? 'dark': '');
})



var isopen = false;

function open_menu(){
    isopen = !isopen;
    if (isopen){
        document.getElementById("dropdown").style.display = "block";
    }else{
        document.getElementById("dropdown").style.display = "none";
    }
}

let currentSlide = 0;

function showSlide(index) {
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  if (index >= totalSlides) {
    currentSlide = 0;
  } else if (index < 0) {
    currentSlide = totalSlides - 1;
  } else {
    currentSlide = index;
  }

  console.log(currentSlide);

  slides[currentSlide].style.zIndex = "2";

  if(currentSlide == 0){
    slides[currentSlide].style.transform = "scale(1.3)";
    slides[slides.length - 1].style.transform = "scale(1.0)";
    slides[currentSlide + 1].style.transform = "scale(1.0)";

    slides[currentSlide].style.zIndex = "2";
    slides[slides.length - 1].style.zIndex = "1";
    slides[currentSlide + 1].style.zIndex = "1";

  }else if(currentSlide == slides.length - 1){
    slides[currentSlide].style.transform = "scale(1.3)";
    slides[currentSlide - 1].style.transform = "scale(1.0)";
    slides[0].style.transform = "scale(1.0)";

    slides[currentSlide].style.zIndex = "2";
    slides[currentSlide - 1].style.zIndex = "1";
    slides[0].style.zIndex = "1";

  }else{
    slides[currentSlide].style.transform = "scale(1.3)";
    slides[currentSlide - 1].style.transform = "scale(1.0)";
    slides[currentSlide + 1].style.transform = "scale(1.0)";

    slides[currentSlide].style.zIndex = "2";
    slides[currentSlide - 1].style.zIndex = "1";
    slides[currentSlide + 1].style.zIndex = "1";
  }

  const offset = -currentSlide * 100;
  document.querySelector(".slides").style.transform = `translateX(${offset}%)`;
}

function moveSlide(step) {
  showSlide(currentSlide + step);
}

showSlide(currentSlide);