$(document).ready(function(){  		

    $("#gnb>li").on("mouseenter",function(){
        //$(this).children("ul").show();
        //$(this).children("ul").fadeIn();
        $(this).children("ul").stop().slideDown();
        $(this).children("a").addClass("on");
    });
    $("#gnb>li").on("mouseleave",function(){
        //$(this).children("ul").hide();
        //$(this).children("ul").fadeOut();
        $(this).children("ul").stop().slideUp();
        $(this).children("a").removeClass("on");
    });


    $("#gnb>li>ul>li").on("mouseenter",function(){
        $(this).children("ul").show();
    });
    $("#gnb>li>ul>li").on("mouseleave",function(){
        $(this).children("ul").hide();
    });


});














