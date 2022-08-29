


/*
	순서도
	
	1. 인풋에 입력한 값을 가져와
	name pw star text img
	- 가져오는 함수 코드 만들기
	- 저장해줄 변수 만들기
 
	2. 등록 버튼을 눌렀을때 alert는 뜨니까 일단 제대로 써진거 같음
	- 인풋에 입력한 값을 배열에 저장
	
	3. 리뷰등록() 함수명으로 출력
	
	4. 마지막에 등록한 후기가 맨위로 올라오게 순위정렬

*/



let reviewlist = []


function 리뷰입력(){
	
	// html에 있는 input 
	const post = {
		name : document.querySelector('.post_name').value ,
		/*pw : document.querySelector('.post_pw').value ,*/
		star : document.querySelectorAll('.star').vlaue ,
		text : document.querySelector('.post_text').value,
		img : document.querySelector('.post_img').value
	}
	
	// 인풋으로 받은 내용을 배열에 담기
	reviewlist.push( post )
	
	// 입력되면 알림
	alert('후기 등록 완료')
	console.log( reviewlist )
	
	
	/*
	// 초기화..........내용지우기.....
	document.getElementsByClassName('post_name').value = ''
	document.getElementsByClassName('star').value = ''
	document.getElementsByClassName('post_text').value = ''
	document.getElementsByClassName('post_img').value = ''
	*/
	
	리뷰등록()
}


	 
function 리뷰등록(){
	
		// 등록 버튼을 눌렀을때 출력될 틀	
	let get =
			'<div class="review_get_box">'+
				'<div class="review_text">'+
					'<div class="text_01">'+
						'<div class="new_box">'+
							'<div class="new_text">NEW</div>'+
						'</div>'+
						'<div class="get_star">'+'</div>'+
						'<div class="get_name">'+'</div>'+
						'<div class="get_name2">견주님</div>'+
					'</div>'+
					'<div class="get_text">'+
					'</div>'+
				'</div>'+
				'<div class="review_img">'+
					'<div class="get_img">'+ '</div>'+
				'</div>'+	
			'</div>'
	

		// 리뷰 리스트의 랭스 길이까지 1개씩증가
	for(let i = 0; i < reviewlist.length; i++){
		
		get += 
			'<div class="review_get_box">'+
				'<div class="review_text">'+
					'<div class="text_01">'+
						'<div class="new_box">'+
							'<div class="new_text">NEW</div>'+
						'</div>'+
						'</div>'+
						'<div class="get_star">'+ reviewlist[i].star +'</div>'+
						'<div class="get_name">'+ reviewlist[i].name +'</div>'+
						'<div class="get_name2">견주님</div>'+
					'</div>'+
					'<div class="get_text">'+
						reviewlist[i].get +
					'</div>'+
				'</div>'+
				'<div class="review_img">'+
					'<div class="get_img">'+ reviewlist[i].img +'</div>'+
				'</div>'+	
			'</div>'

	
		alert('등록..됐니..?')
	}
		document.getElementById('review_get').innerHTML = get
}
	
	
	
	
	
	
	
	
	
	
	