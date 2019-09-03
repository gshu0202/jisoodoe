$(document).ready(function(){
	
	var ver = navigator.userAgent;

	 console.log(ver);
	 
	if (/msie/i.test(ver)){
		console.log("구버전 IE");
	}
	else if (/trident/i.test(ver)){
		console.log("최신 IE");
	}

	else if (/firefox/i.test(ver)){
		console.log("파이어폭스");
	}

	else if (/chrome/i.test(ver)){
		console.log("크롬");
	}

	else if (/safari/i.test(ver)){
		console.log("사파리");
	}

	else if (/opera|opr/i.test(ver)){
		console.log("오페라");
	}


	if (/mobile/i.test(ver)){
		$(".intro").show();
		setTimeout(function(){
			location.href="http://jisoo0202.kr/test/index_mobile.html";/*접속한 브라우저가 모바일이면 여기에 걸려서 모바일 페이지로 들어가게됨*/ 
		},3000);
		
	}
});










