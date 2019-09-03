<? include "inc/header.php";?>


<div class="visual">
	<div class="carousel-container">
		<div class="carousel-body">
			<div class="carousel-slide">
				<h1>1</h1>
			</div>
			<div class="carousel-slide">
				<h1>2</h1>
			</div>
			<div class="carousel-slide">
				<h1>3</h1>
			</div>
		</div>
		<a href="#" class="carousel-btn-prev">prev</a>
		<a href="#" class="carousel-btn-next">next</a>
	</div>
</div>

<div class="best_hair">
	<div class="best_hair_wrap">
		<div class="best_hair_box">

		</div><!--best_hair_box-->
		<div class="best_tit">
			<h2 class="inner_tit">R&B BEST HAIRS</h2>
			<span class="middle_bar"></span>
			<p class="inner_stit">Our Best Human Hair</p>
			<p class="view"><a href="#" class="sp_corp_btn">VIEW DETAILS </a></p>
		</div><!--best_tit-->

	</div><!--best_hair_wrap-->
</div><!--best_hair-->

<div class="youtube">
	<div class="youtube_wrap">
		<div id="tit">
			<h2 class="inner_tit"><span class="strong">R&B</span> Movie</h2>
			<span class="middle_bar"></span>
			<p class="inner_stit">YOU CAN SEE OUR STORY</p>
		</div><!--tit-->
		<div class="bx">
			<div class="display_mv">
				<iframe width="655" height="440" src="https://www.youtube.com/embed/SdzLl-XpJt0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
			</div>
			<div class="info"> 
				<h4><span class="strong">HOW TO</span> <span class="pink">BLEACH</span><br>YOUR HAIR</h4>
				<p class="desc">
				R&B Wig Company leading<br/>the industry with embellished wig<br/>styles and colors.<br/> <br/>Fashionability, durability, and comfortability is the true sight of what we strive for.</p>			 
				<p class="more"><a href="#" class="sp_corp_btn">more + </a></p>
			</div><!--info-->
        </div><!--bx-->
	</div><!--youtube_wrap-->
</div>

<div class="best_sellers">
	<div class="best_sellers_wrap">
		<div id="tit">
			<h2 class="inner_tit"><span class="strong">R&B BEST</span><br/>SELLERS</h2>
			<span class="middle_bar"></span>
			<p class="inner_stit">YOU CAN CHECK OUR PRODUCTS</p>
		</div><!--tit-->	
		
	</div><!--best_sellers_wrap-->
</div><!--best_sellers-->


<div class="magazine">
	<div class="magazine_wrap">
		<div class="tit">
			<h3>R&B STYLING</h3>
			<h2>R&B ONLINE<br/>MAGAZINE</h2>
			<span class="middle_bar"></span>
			<p>
				Please see through our online catalog<br/>More detailed images and contents can be found<br/>
				though our website
			</p>
		</div>
	</div><!--magazine_wrap"-->
</div><!--magazine-->

<div class="instagram">
	<div class="instagram_wrap">
		<div id="tit">
			<h2 class="inner_tit"><span class="strong">R&B </span><br/>INSTAGRAM</h2>
			<span class="middle_bar"></span>
			<p class="inner_stit">YOU CAN CHECK OUR NEWS</p>
		</div><!--tit-->	
		<div class="insta_box">
			<ul class="">
				<li class="box"></li>
				<li class="box"></li>
				<li class="box"></li>
				<li class="box"></li>
				<li class="box"></li>
				<li class="box"></li>
				<li class="box"></li>
				<li class="box"></li>
				<li class="box"></li>
				<li class="box"></li>
				<li class="box"></li>
				<li class="box"></li>
			</ul>
		</div><!--insta_box-->
	</div><!--instagram_wrap-->
</div><!--instagram-->




<!--이미지 슬라이드-->
<script>
		$('.carousel-container').SimpleCarousel({
			slide : '.carousel-slide'
		  	,btnPrev : '.carousel-btn-prev'
			,btnNext : '.carousel-btn-next'
			,navigation: true
			,pagination : true
		  	,bulletClassName : 'bullet'
			,clickableBullet : true
			,speed: 800
			,autoPlay : true
		  	,delay : 5000
			,effect : 'fade'
		  	,stopOnInterrupt : true
		});
</script>



<? include "inc/footer.php";?>