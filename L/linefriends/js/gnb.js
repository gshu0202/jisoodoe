(function($){
	
	function Gnb(sel, options){	
		this.options = options;
		
		this.initDOM(sel);
		this.max_height = this.gnb_max_height();
		this.bindingEvent();
		
	}
		
	Gnb.prototype.isOpen = true;
	Gnb.prototype.sub_height=[];
	Gnb.prototype.max_height=0;


	Gnb.prototype.initDOM = function(el){
		this.$gnb = $(el);	
		this.$headerWrap =$("."+this.options.headerWrap);
		
		this.$gnb_li = this.$gnb.children("li");
		this.$gnb_ul =this.$gnb.find("ul");	
		this.$gnb_a = this.$gnb.find("a");
	}


	Gnb.prototype.bindingEvent = function(){		

		var this2 = this;

		this2.$gnb_li.on("mouseenter focusin",function(){
			var $this = $(this);					
			this2.openSub($this);  		
			if(Gnb.prototype.isOpen){	
				this2.createSubPanel();	
			}		
		});		

		this2.$headerWrap.on("mouseleave",function(){	
			this2.closeSub();	
		});		
		
		this2.$gnb_li.on("mouseleave",function(){
			$(this).children("a").removeClass(this2.options.activeName);		
		});

		/*포커스관련*/
		this2.$gnb_a.on("focusout",function(){
			$(this).removeClass(this2.options.activeName);
		})
		this2.$gnb_a.last().on("focusout",function(){
			this2.closeSub();
			this2.$gnb_a.removeClass(this2.options.activeName);
		});	
		
	}


	Gnb.prototype.gnb_max_height = function(){	
		var this2= this;
		this2.$gnb_li.each(function(index){
			var ul_height = $(this).find("ul").height();
			Gnb.prototype.sub_height.push(ul_height);
			Gnb.prototype.max_height = Math.max(Gnb.prototype.max_height, Gnb.prototype.sub_height[index]);
		});		
		return Gnb.prototype.max_height;		
	}


	Gnb.prototype.createSubPanel = function(){		
		$subPanel = '<div class='+this.options.subName+'>';
		this.$headerWrap.prepend($subPanel);
		$subPanel =$("."+this.options.subName);	
		$subPanel.height(Gnb.prototype.max_height);
		$subPanel.css({
			"position" : "absolute",
			"top" : $("."+this.options.headerWrap).children("div").not("."+this.options.subName).height(),
			"left" : "0px",
			"width" : "100%",
			"display" : "none",
			"background" : this.options.subColor
		});
		$subPanel.stop(true, true).slideDown(this.options.dur,function(){
			return Gnb.prototype.isOpen = false;
		});		
	}


	Gnb.prototype.openSub = function($this){
		this.$gnb_ul.stop(true, true).slideDown(this.options.dur);
		$this.children("a").addClass(this.options.activeName);	
	}


	Gnb.prototype.closeSub = function(){
		this.$gnb_ul.stop(true, true).slideUp(this.options.dur/2);		
		$("."+this.options.subName).stop(true, true).slideUp(this.options.dur/2,function(){
			$(this).remove();
			return Gnb.prototype.isOpen = true;
		});
	}
	
	
	$.defaults = {
		dur:500,
		activeName:"on",
		headerWrap:"",
		subName:"bgSub",
		subColor : "fff"
	}

	$.fn.myGnb = function(options){ 		
		
		options = $.extend(null, $.defaults, options); 
		
		this.each(function(index){			
			var gnb = new Gnb(this, options); 
		})
		return this;
	}

})(jQuery);



