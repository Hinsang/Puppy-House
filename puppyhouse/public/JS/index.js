
let slideIndex = 0;
showSlides();
//슬라이드 함수실행
function showSlides() {
  let i;
  //img가 들어있는 div 변수설정
  let slides = document.querySelectorAll(".slide_div");
  //dot 변수 지정
  let dots = document.querySelectorAll(".dot");
  //slide의 length가 i보다 크면
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}



