$(document).ready(function(){
	
	var name = ["sunrise", "day", "sunset", "night"];
	var len = name.length;
	var time_gap = 5000;
	var $el = $("#bg");
	var $txt_li = $("#text p");
	
	
	
	repeatCycle();
	setInterval(repeatCycle, time_gap*len);	
	
	function repeatCycle(){
		for(var i =0; i<len; i++){
			cycle(i);
		}
		
		//밤에 구름, 사람 안보이게 하기
		$(".sky").animate({"opacity":"1"},1000);
		$(".people").fadeIn(3000);
		setTimeout(function(){
			$(".people").fadeOut(3000);	
			$(".sky").animate({"opacity":"0.1"},1000);
		},time_gap*3);
	}	
	
	
	
	
	function cycle(i){		
		setTimeout(function(){	
			$el.removeClass().addClass(name[i]);	
			$txt_li.removeClass("on");
			$txt_li.eq(i).addClass("on");
		},i*time_gap);		
	}
	
	/*
	function cycle(){
		setTimeout(function(){	
			$("#bg").removeClass().addClass("sunrise");		
		},0*5000);
		
		setTimeout(function(){	
			$("#bg").removeClass().addClass("day");		
		},1*5000);
		
		setTimeout(function(){	
			$("#bg").removeClass().addClass("sunset");		
		},2*5000);
		
		setTimeout(function(){	
			$("#bg").removeClass().addClass("night");		
		},3*5000);
	}
	*/
	

	
	
	

});	









