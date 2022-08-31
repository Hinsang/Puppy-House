
//css와 javascript를 이용한 fadein&out script
//index0으로 설정
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
	//img slide style->display:none; 
    slides[i].style.display = "none";  
  
  //slideindex 증가
  slideIndex++;
  
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  //slide
  
  slides[slideIndex-1].style.display = "block";  
  //dot색이 변하는 class .active 실행
  dots[slideIndex-1].className += " active";
  //5초마다 실행
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}



