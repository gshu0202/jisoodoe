<!DOCTYPE html>
<html lang="en">
<head>
	<meta http-equiv="X-UA-Compatible" content="text/html; charset=utf-8" />	
	<title>R&B Hair</title>
	<link rel="stylesheet" type="text/css" href="slick/slick-theme.css"/>
	<link rel="stylesheet" href="css/reset.css" />	
	<link rel="stylesheet" href="css/style.css" />	
	<!--Web fonts-->
	<link href="https://fonts.googleapis.com/css?family=Noto+Sans|Noto+Sans+KR:100,300,400,500,700,900" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Crimson+Text:400,400i,600,600i,700,700i" rel="stylesheet">

	<script type="text/javascript" src="js/jquery-2.1.1.min.js"></script>

	<!--vis_slide-->
	<script type="text/javascript" src="js/jquery.min.js"></script>
	<script type="text/javascript" src="js/SimpleCarousel.js"></script>

	<script type="text/javascript" src="js/custom.js"></script>

</head>
<body>
<div class="headerTop">
	<div class="topmenu">
		<div class="topmenu_left">
			<ul class="topmenu_gnb">
				<li><a href="#">HOME</a></li>
				<li class="side">|</li>
				<li><a href="#">ABOUT US</a></li>
				<li class="side">|</li>
				<li><a href="#">CONTACT US</a></li>
			</ul>
		</div>
		<div class="topmenu_right">
			<ul class="info">
				<li><a href="#">COLOR CHART</a></li>
				<li><a href="#">3.5 LACE FRONT</a></li>
				<li><a href="#">ONLINE CATALOG</a></li>
			</ul>
		</div>
	</div><!-- //topmenu -->
</div><!-- //headerTop -->

<div class="headerWrap">
	<div id="header">	
		<h1 class="logo"><a href="index.php"><img src="img/main/logo.png"/></a></h1>	
		<div class="field-container">
			<input type="text" placeholder="Search"/>
			<button type="submit" class="search_icon"></button>
		</div>
	</div><!--header-->
	<div class="gnb_bottom">
		<ul id="gnb">
			<li><a href="chart.php">100% NATURAL HUMAN HAIR</a></li>
			<li><a href="department.php">HUMAN BLENEDE</a></li>
			<li><a href="board.php">HEART RESISTANT</a></li>
			<li><a href="join.php">SYNTHETIC</a></li>
			<li><a href="join.php">HAIR PIECES</a></li>
		</ul>
		<div class="sild-menu" style="display:none;">
			<div class="sild-menu-inner">
				<dl>
					<dd><a href="#">PLATINUM EUROPEAN</a></dd>
					<dd><a href="#">100% NATURAL HUMAN HAIR</a></dd>
				</dl>
				<dl>
					<dd><a href="#">TRUE LUXURY</a></dd>
					<dd><a href="#">GOT WIG</a></dd>
					<dd><a href="#">21 TRESS FULL CAP</a></dd>
					<dd><a href="#">21 TRESS LACE FRONT</a></dd>
					<dd><a href="#">BRAZILIAN BLENDED</a></dd>
					
				</dl>
				<dl>
					<dd><a href="#">RJ-PARK</a></dd>
					<dd><a href="#">Euro Tress</a></dd>
					<dd><a href="#">PRESTIGIOUS</a></dd>
					<dd><a href="#">RUMAN</a></dd>
					<dd><a href="#">RUMAN & HUMAN</a></dd>
					<dd><a href="#">X-RUMAN & HUMAN</a></dd>
					<dd><a href="#">R&B LACE FRONT</a></dd>
					<dd><a href="#">R&B FULL CAP</a></dd>
				</dl>
				<dl>
					<dd><a href="#">SYNTHETIC LACE</a></dd>
					<dd><a href="#">R&B FULL CAP</a></dd>
				</dl>
				<dl>
					<dd><a href="#">DONUT BUNS</a></dd>
				</dl>
			</div><!--sild-menu-inner-->
		</div><!--sild-menu-->

	</div><!-- //gnb_bottom -->
</div><!-- //headerWrap -->






<!--gnb slide-->
<script>
$("#gnb,.sild-menu").each(function(){
	$(this).mouseenter(function(){
		$(this).toggleClass('on');
		if($(this).attr('class').indexOf('on')!=-1){
			$('.sild-menu').stop().slideDown();
		}
	}).mouseleave(function(){
		$(this).toggleClass('on');
		var don = 0;
		$("#gnb,.sild-menu").each(function(){
			if($(this).attr('class')){
				if($(this).attr('class').indexOf('off')!=-1){
					don = 1;
				}
			}
		});
		if(!don){
			$('.sild-menu').stop().slideUp();
		}
	});
});
</script>