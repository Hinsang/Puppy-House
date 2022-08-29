


window.addEventListener('scroll', ( ) => { 
  //스크롤 이벤트 시작
  
  //스크롤 가능 정도는 html 컨텐츠의 전체 높이까지
  const scrollable = document.body.scrollHeight
  
  //스크롤 한 정도를 px단위로 표시
  const scroll = window.scrollY;

  let percentageScrolled = 100;
  
  // 스크롤 가능 시
if (scrollable > 0) {
	percentageScrolled = Math.ceil((scroll / scrollable) * 100);	
}scrolledIndicatorFill.style.width = `${percentageScrolled}%`

console.log(window.scrollY); // y축 272 부터..!!
});

	document.getElementsByClassName('dot_bar').innerHTML	// html에 있는 클래스명이 dot_bar 에다 출력해줘
	
	
	
	
	
	
	
	
	
	
/*


window.addEventListener('scroll', ( ) => { 
  //스크롤을 할 때마다 로그로 현재 스크롤의 위치가 찍혀나온다.
  
  //스크롤 가능 정도
  const scrollable = document.documentElement.scrollHeight - window.innerHeight; // 문서전체높이 - window 높이;

  //스크롤 한 정도를 px단위로 표시
  const scroll = window.scrollY;

  let percentageScrolled = 100;
  
  // 스크롤 가능 시
if (scrollable > 0) {
	percentageScrolled = Math.ceil((scroll / scrollable) * 100);	
}scrolledIndicatorFill.style.width = `${percentageScrolled}%`

console.log(window.scrollY); // y축 272 부터..!!
});

	document.getElementsByClassName('dot_bar').innerHTML	// html에 있는 클래스명이 dot_bar 에다 출력해줘	
	
	
	
*/	
	