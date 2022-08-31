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
 제출하기()
 function 제출하기(){
	//보호자 정보
	//보호자이름
	let name = document.querySelector('.name').value
	//console.log(name)
	//보호자 전화번호
	//010~~
	let phone_title = document.querySelector('.phone_title').value	
	//앞번호
	let front_phone = document.querySelector('.front_phone').value	
	//뒷번호
	let back_phone = document.querySelector('.back_phone').value	
	//보호자이메일
	let email = document.querySelector('.email').value	
	//@
	let email_select = document.querySelector('.email_select').value	
	//반려견정보
	//이름
	let dogname= document.querySelector('.dogname').value	
	//나이
	let dogage = document.querySelector('.dogage').value	
	//견종
	let dog_breed = document.querySelector('.dog_breed').value	
	//중성화여부	
	let neutralization = document.querySelector('input[name="neutralization"]:checked').value
	//문제행동
	let action = document.querySelectorAll('input[name="action"]:checked')
	//중복 선택이 가능한checkbox에 있는 값을 가져오는 script
	let actionlist = [ ]
	for( let i = 0 ; i<action.length ; i++ ){
		actionlist.push( action[i].value ) 
	}	
	//첨부파일
	let file = document.querySelector('.file')	
	//입양출처
	let adoption = document.querySelector('input[name="adoption"]:checked').value
	 
	//주거환경
	let house = document.querySelector('input[name="house"]:checked').value
	
	
	//출력받은 값을 저장하는 리스트	
	let 상담신청완료리스트 ={
	보호자이름 : name,	//
	전화번호 : phone_title +'-'+ front_phone +'-'+ back_phone,
	이메일 : email + '@'+ email_select,
	반려견이름 : dogname,
	반려견나이 : dogage,
	견종 : dog_breed,
	중성화여부 : neutralization,//
	문제행동 : actionlist,//
	첨부파일 : file,
	입양출처 : adoption,//
	주거환경 : house		//	
	}
	console.log(상담신청완료리스트)
	
}//function





