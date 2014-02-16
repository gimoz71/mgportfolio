// JavaScript Document

var backgroundSrcs = new Array("images/header/head1.png","images/header/head2.png","images/header/head3.png","images/header/head4.png","images/header/head5.png","images/header/head6.png","images/header/head7.png")

/* RANDOM BACKGROUND */

function pickimage(){
	var bgimage=backgroundSrcs[(Math.round(Math.random()*(backgroundSrcs.length-1)))]	
	document.getElementById("header").style.backgroundImage = "url('" + bgimage + "')";
}

/* FANCYBOX STUFF */

$(document).ready(function() {
	
	$("a.grouped_elements").fancybox({
		'hideOnOverlayClick'	: true	
	});

	/*$("a.grouped_elements_movie1").fancybox({
		'hideOnOverlayClick'	: true,
		'width'			: 	800,
		'height'		: 	600,
		'type'			: 	'swf',
		'swf'			: 	{
			 'wmode'		: 'transparent',
			'allowfullscreen'	: 'true'
		}
	});*/
	
	$("a.grouped_elements_movie1").fancybox({
		'hideOnOverlayClick'	: true,
		'width'			: 	800,
		'height'		: 	600,
		'content'		:	'<video id ="container" width="800" height="600" controls autoplay>' +
								'<source src="images/gallery/3d/standce_7.mp4"  type="video/mp4" />' + 
								'<source src="images/gallery/3d/standce_7.webm" type="video/webm" />' +
								'<source src="images/gallery/3d/standce_7.ogv"  type="video/ogg" />' +
								'<object width="800" height="600" type="application/x-shockwave-flash" data="images/gallery/3d/player.swf">' +
									'<param name="movie" value="images/gallery/3d/player.swf" />' +
									'<param name="flashvars" value="controlbar=over&amp;image=images/gallery/3d/standce_7.jpg&amp;file=standce_7.mp4" />' +
									'<img src="images/gallery/3d/standce_7.jpg" width="800" height="600" alt="Stand Contoenergia.biz" title="Questo browser non &egrave; in grado di riprodurre il video, Scaricalo da un link qu&igrave; sotto" />' +
								'</object>' +
							'</video>' +
							'<p><strong>Download Video:</strong>' +
								'Formato proprietario:	<a href="images/gallery/3d/standce_7.mp4">"MP4"</a> - ' +
								'Formato Open:	<a href="images/gallery/3d/standce_7.ogv">"Ogg"</a>, <a href="images/gallery/3d/standce_7.webm">"WebM"</a>' +
							'</p>'
	});
	
	/*$("a.grouped_elements_movie2").fancybox({
		'hideOnOverlayClick'	: true,
		'width'			: 	640,
		'height'		: 	480,
		'type'			: 	'swf',
		'swf'			: 	{
			 'wmode'		: 'transparent',
			'allowfullscreen'	: 'true'
		}
	});*/
	
	$("a.grouped_elements_movie2").fancybox({
		'hideOnOverlayClick'	: true,
		'width'			: 	640,
		'height'		: 	480,
		'content'		:	'<video width="640" height="480" controls autoplay>' +
								'<source src="images/gallery/3d/spot_nettare.mp4"  type="video/mp4" />' +
								'<source src="images/gallery/3d/spot_nettare.webm" type="video/webm" />' +
								'<source src="images/gallery/3d/spot_nettare.ogv"  type="video/ogg" />' +
								'<object width="640" height="480" type="application/x-shockwave-flash" data="images/gallery/3d/player.swf">' +
									'<param name="movie" value="images/gallery/3d/player.swf" />' +
									'<param name="flashvars" value="controlbar=over&amp;image=images/gallery/3d/nettare_2.jpg&amp;file=spot_nettare.mp4" />' +
									'<img src="images/gallery/3d/nettare_2.jpg" width="640" height="480" alt="Spot Nettare 15" title="Questo browser non &egrave; in grado di riprodurre il video, Scaricalo da un link qu&igrave; sotto" />' +
								'</object>' +
							'</video>' +
							'<p><strong>Download Video:</strong>' +
								'Formato proprietario:	<a href="images/gallery/3d/spot_nettare.mp4">"MP4"</a> - ' +
								'Formato Open:	<a href="images/gallery/3d/spot_nettare.ogv">"Ogg"</a>, <a href="images/gallery/3d/spot_nettare.webm">"WebM"</a>' +
							'</p>'
	});
	
	/*$("a.grouped_elements_movie4").fancybox({
		'hideOnOverlayClick'	: true,
		'width'			: 	640,
		'height'		: 	480,
		'type'			: 	'swf',
		'swf'			: 	{
			 'wmode'		: 'transparent',
			'allowfullscreen'	: 'true'
		}
	});*/
	
	$("a.grouped_elements_movie4").fancybox({
		'hideOnOverlayClick'	: true,
		'width'			: 	640,
		'height'		: 	480,
		'content'		:	'<video width="640" height="480" controls autoplay>' +
								'<source src="images/gallery/3d/spot_springbac.mp4"  type="video/mp4" />' +
								'<source src="images/gallery/3d/spot_springbac.webm" type="video/webm" />' +
								'<source src="images/gallery/3d/spot_springbac.ogv"  type="video/ogg" />' +
								'<object width="640" height="480" type="application/x-shockwave-flash" data="images/gallery/3d/player.swf">' +
									'<param name="movie" value="images/gallery/3d/player.swf" />' +
									'<param name="flashvars" value="controlbar=over&amp;image=images/gallery/3d/nettare_2.jpg&amp;file=spot_springbac.mp4" />' +
									'<img src="images/gallery/3d/springbac_2.jpg" width="640" height="480" alt="Spot springbac 30" title="Questo browser non &egrave; in grado di riprodurre il video, Scaricalo da un link qu&igrave; sotto" />' +
								'</object>' +
							'</video>' +
							'<p><strong>Download Video:</strong>' +
								'Formato proprietario:	<a href="images/gallery/3d/spot_springbac.mp4">"MP4"</a> - ' +
								'Formato Open:	<a href="images/gallery/3d/spot_springbac.ogv">"Ogg"</a>, <a href="images/gallery/3d/spot_springbac.webm">"WebM"</a>' +
							'</p>'
	});
	
	/*$("a.grouped_elements_movie3").fancybox({
		'hideOnOverlayClick'	: true,
		'width'			: 	720,
		'height'		: 	576,
		'type'			: 	'swf',
		'swf'			: 	{
			 'wmode'		: 'transparent',
			'allowfullscreen'	: 'true'
		}
	});*/
	
	$("a.grouped_elements_movie3").fancybox({
		'hideOnOverlayClick'	: true,
		'width'			: 	720,
		'height'		: 	576,
		'content'		:	'<video width="720" height="576" controls autoplay>' +
								'<source src="images/gallery/3d/generationx.mp4"  type="video/mp4" />' +
								'<source src="images/gallery/3d/generationx.webm" type="video/webm" />' +
								'<source src="images/gallery/3d/generationx.ogv"  type="video/ogg" />' +
								'<object width="720" height="576" type="application/x-shockwave-flash" data="images/gallery/3d/player.swf">' +
									'<param name="movie" value="images/gallery/3d/player.swf" />' +
									'<param name="flashvars" value="controlbar=over&amp;image=images/gallery/3d/oldstuff.jpg&amp;file=generationx.mp4" />' +
									'<img src="images/gallery/3d/generationx_1.jpg" width="720" height="576" alt="Sigla Generation X (1994)" title="Questo browser non &egrave; in grado di riprodurre il video, Scaricalo da un link qu&igrave; sotto" />' +
								'</object>' +
							'</video>' +
							'<p><strong>Download Video:</strong>' +
								'Formato proprietario:	<a href="images/gallery/3d/generationx.mp4">"MP4"</a> - ' +
								'Formato Open:	<a href="images/gallery/3d/generationx.ogv">"Ogg"</a>, <a href="images/gallery/3d/generationx.webm">"WebM"</a>' +
							'</p>'
	});
	
	/*$("a.grouped_elements_movie5").fancybox({
		'hideOnOverlayClick'	: true,
		'width'			: 	720,
		'height'		: 	576,
		'type'			: 	'swf',
		'swf'			: 	{
			 'wmode'		: 'transparent',
			'allowfullscreen'	: 'true'
		}
	});*/
	
	$("a.grouped_elements_movie5").fancybox({
		'hideOnOverlayClick'	: true,
		'width'			: 	720,
		'height'		: 	576,
		'content'		:	'<video width="720" height="576" controls autoplay>' +
								'<source src="images/gallery/3d/fieracavalli.mp4"  type="video/mp4" />' +
								'<source src="images/gallery/3d/fieracavalli.webm" type="video/webm" />' +
								'<source src="images/gallery/3d/fieracavalli.ogv"  type="video/ogg" />' +
								'<object width="720" height="576" type="application/x-shockwave-flash" data="images/gallery/3d/player.swf">' +
									'<param name="movie" value="images/gallery/3d/player.swf" />' +
									'<param name="flashvars" value="controlbar=over&amp;image=images/gallery/3d/oldstuff.jpg&amp;file=fieracavalli.mp4" />' +
									'<img src="images/gallery/3d/fieracavalli_1.jpg" width="720" height="576" alt="Sigla Fieracavali (1995)" title="Questo browser non &egrave; in grado di riprodurre il video, Scaricalo da un link qu&igrave; sotto" />' +
								'</object>' +
							'</video>' +
							'<p><strong>Download Video:</strong>' +
								'Formato proprietario:	<a href="images/gallery/3d/fieracavalli.mp4">"MP4"</a> - ' +
								'Formato Open:	<a href="images/gallery/3d/fieracavalli.ogv">"Ogg"</a>, <a href="images/gallery/3d/fieracavalli.webm">"WebM"</a>' +
							'</p>'
	});

/*$("a.grouped_elements_movie5").fancybox({
		'hideOnOverlayClick'	: true,
		'width'			: 	720,
		'height'		: 	576,
		'type'			: 	'swf',
		'swf'			: 	{
			 'wmode'		: 'transparent',
			'allowfullscreen'	: 'true'
		}
	});*/
	
	$("a.grouped_elements_movie6").fancybox({
		'hideOnOverlayClick'	: true,
		'width'			: 	640,
		'height'		: 	360,
		'content'		:	'<video width="640" height="360" controls autoplay>' +
								'<source src="images/gallery/3d/cosmer.mp4"  type="video/mp4" />' +
								'<source src="images/gallery/3d/cosmer.webm" type="video/webm" />' +
								'<source src="images/gallery/3d/cosmer.ogv"  type="video/ogg" />' +
								'<object width="720" height="576" type="application/x-shockwave-flash" data="images/gallery/3d/player.swf">' +
									'<param name="movie" value="images/gallery/3d/player.swf" />' +
									'<param name="flashvars" value="controlbar=over&amp;image=images/gallery/3d/oldstuff.jpg&amp;file=cosmer.mp4" />' +
									'<img src="images/gallery/3d/cosmer_1.jpg" width="640" height="360" alt="Cosmer" title="Questo browser non &egrave; in grado di riprodurre il video, Scaricalo da un link qu&igrave; sotto" />' +
								'</object>' +
							'</video>' +
							'<p><strong>Download Video:</strong>' +
								'Formato proprietario:	<a href="images/gallery/3d/cosmer.mp4">"MP4"</a> - ' +
								'Formato Open:	<a href="images/gallery/3d/cosmer.ogv">"Ogg"</a>, <a href="images/gallery/3d/cosmer.webm">"WebM"</a>' +
							'</p>'
	});

	// FLASH
	
	$("a.grouped_elements_flash1").fancybox({
		'hideOnOverlayClick'	: true,
		'width'			: 	700,
		'height'		: 	250,
		'type'			: 	'swf',
		'swf'			: 	{
			 'wmode'		: 'transparent',
			'allowfullscreen'	: 'false'
		}
	});
	
	pickimage();
	
	$(".info").tipTip({activate: "hover", maxWidth: "300px", edgeOffset: 10, attribute: "title"});
	
	$(".tools").tipTip({activate: "hover",maxWidth: "300px", edgeOffset: 0, attribute: "title"});
	
	
	$("img").lazyload({ 
		placeholder : "images/grey.gif",
		effect : "fadeIn",
		failurelimit : 35
	});
	
	
	// Scroller follower
	/*$(function() {
		var offset = $(".data_floater").offset();
		var topPadding = 0;
		$(window).scroll(function() {
			if ($(window).scrollTop() > offset.top) {
				$(".data_floater").stop().animate({
					marginTop: $(window).scrollTop() - offset.top + topPadding
				}, {duration: 0 });
			} else {
				$(".data_floater").stop().animate({
					marginTop: 0
				}, {duration: 0 });
			}
		});
	});*/
		
	// Top link fader
	$(function () {
		var scroll_timer;
		var displayed = false;
		var $message = $('.floater');
		var offset = $(".col_sx").offset();
		var topPadding = $(".col_sx").height();
		var $window = $(window);
		var top = $(document.body).children(0).position().top;
		$window.scroll(function () {
			window.clearTimeout(scroll_timer);
			scroll_timer = window.setTimeout(function () {
				if($window.scrollTop() <= offset.top + topPadding)
				{
					displayed = false;
					$message.fadeOut(1000);
				}
				else if(displayed == false)
				{
					displayed = true;
					$message.fadeIn(1000).show().click(function () { $message.fadeOut(1000); });
				}
			}, 100);
		});
	});
	
	if(navigator.platform == 'iPad' || navigator.platform == 'iPhone' || navigator.platform == 'iPod')
	{
		 $(".floater").css("position", "static");
		 $(".floater").css("height", "40px");
		 $(".floater").css("width", "230px");
		 $(".floater").css("webkit-border-top-left-radius", "5px");
		 $(".floater").css("webkit-border-top-right-radius", "5px");
		 $(".floater").css("webkit-border-bottom-left-radius", "0");
		 $(".floater").css("webkit-border-bottom-right-radius", "0");
		 $(".floater").css("border-radius", "5px 5px 0 0");
		 $(".floater").css("margin", "0 auto");
		 $(".floater *").css("float", "left");
	};
	
	return false;
});
