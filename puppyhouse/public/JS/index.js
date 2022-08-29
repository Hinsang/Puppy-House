
let slideIndex=0;
showslides()



function showslides(){
	//
	let slides = document.querySelectorAll('.slide_div')
	let dots = document.querySelectorAll('.dot')	
	//console.log(slides)
	//console.log(dots)
	for(i=0; i<slides.length; i++){
		//console.log(i)
		slides[i].style.display='none'
	}//forend
	slideIndex++
	if(slideIndex>slides.length){slideIndex=1}
	for(i=0; i<dots.length; i++){
		dots[i].className = dots[i].className.replace('active')		
	}
	slides[slideIndex-1].style.display = 'block'
	dots[slideIndex-1].className += "active"
	setTimeout(showslides,2000)	
}//function end



