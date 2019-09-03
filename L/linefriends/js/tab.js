(function($){

	function Tab(sel, options){	
		this.options = options;
		this.initObj(sel);
		this.bindingEvent();		
	}

	Tab.prototype.isAnimated = null;

	Tab.prototype.initObj = function(el){
		this.$tab = $(el);
		this.$tab_a = this.$tab.children("ul").find("a");
		this.$tab_div = this.$tab.children("div").children("div");
	}


	Tab.prototype.bindingEvent = function(){

		var this2 = this;	

		this2.$tab_a.on("click",function(e){
			e.preventDefault();				
		
			var target = $(this).attr("href");		

			if(!Tab.prototype.isAnimated){
				Tab.prototype.isAnimated = true;
				
				this2.activatePanel(target);
				this2.activateBtn(this);		
			}

		});	
	}


	Tab.prototype.activateBtn = function(el){
		this.$tab_a.removeClass(this.options.activeName);
		$(el).addClass(this.options.activeName);		
	}

	Tab.prototype.activatePanel = function(el){
		this2 = this;
		this2.$tab_div.stop().fadeOut(this.options.dur);				
		$(el).stop().fadeIn(this2.options.dur,function(){
			Tab.prototype.isAnimated = false;	
			this2.$tab_div.removeClass(this2.options.activeName);
			$(this).addClass(this2.options.activeName);
		});
	}



	$.defaults = {
		dur:500,
		activeName:"on"
	}

	$.fn.myTab = function(options){ 		
		
		options = $.extend(null, $.defaults, options); 
		
		this.each(function(index){			
			var tab = new Tab(this, options); 
		})
		return this;
	}


})(jQuery);





	










