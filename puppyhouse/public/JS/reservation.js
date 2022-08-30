/*
1. 전송버튼을 툴렀을때 이벤트 함수 실행
2. html에서 입력된 데이터 js를 가져와서 변수/객체 저장->확인 
	2-1 문서객체가져오기
	document.querySelector() -> 1개요소
	document.querySelectorAll -> 여러개요소
	document.getElementById() -> 1개요소
	2-2 문서객체내 내용을 호출[value속성]
	2-3 모든내용을 객체에 저장
	2-4 생성된 객체를 배열에 저장
3. 배열내 존재하는 모든 객체들을 클릭
 */
 
 let 신청자리스트 =[]
 //상담리스트
 //함수
 function 제출하기(){
	/*
	let name = document.querySelector('.name')
	let phone1 = document.querySelector('.phone_title')
	let phone2 = document.querySelector('.front_phone')
	let phone3 = document.querySelector('.back_phone')
	let email = document.querySelector('.email')	
	console.log(email_select)	
	*/
	//html 안에있는 모든 input소환
	let input = document.querySelectorAll('input')
	//핸드폰번호를 저장할 변수지정
	let phone = document.querySelectorAll('.phone_box')
	//html 안에있는 모든 select소환
	let select = document.querySelectorAll('select').value
	//html 안에있는 모든 option 소환	
	let options = document.querySelectorAll('option')
	let radio = document.querySelectorAll('.radio')
	let checkbox = document.querySelectorAll('.checkbox')
	
	console.log(select)
	console.log(radio)
	console.log(checkbox)
	
	//객체에 담기
	
	let 신청자={
		이름:input[0].value,
		//앞번호와 뒷번호는 소환이 되는데 왜 010은 소환이 안되는 이유 좀
		전화번호:select[0]+input[1].value+input[2].value,		
		이메일:input[3].value,
		반려견이름:input[4].value,
		반려견나이:input[5].value,
		견종:input[6].value,
		중성화여부:radio.value,
		
			/*
		
	
		문제행동:,
		첨부파일:,
		입양출처:,
		주거환경:,
		*/
		
	}
	
	console.log(신청자)
	
}

제출하기()
