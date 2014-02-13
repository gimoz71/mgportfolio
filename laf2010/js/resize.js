
		var picWidth = 1600;
		var picHeight = 1200;
		

$(window).resize(function(){
	// gestione resize della finestra
	resizeImageSCut();
});
		
// resize e galleria immagini
var imgCenter = "#image_center";
var imgLeft = "#image_left";
var imgRight = "#image_right";
var imgUp = "#image_up";
var imgDown = "#image_down";

function resizeImageSCut() {
	// ridimensionamento dell'immagine di background per caricarla sullo schermo
	
	// ratio proporcional de la ventana del navegador rapporto proporzionale della finestra del browser
	var navWidth = $(window).width();
	var navHeight = $(window).height();
	var navRatio = navWidth / navHeight;

	// rapporto proporzionale dell'immagine
	if ($('#main_image').width() > 1) picWidth = $('#main_image').width();
	if ($('#main_image').height() > 1) picHeight = $('#main_image').height();
	picRatio = picWidth / picHeight;
	
	// scala risultante
	if (navRatio > picRatio) {
		// scalare l'mmagine per adattarla al browser
		var newHeight = (navWidth / picWidth) * picHeight;
		var newWidth = navWidth;
	} else {
		// escalamos la imagen para ajustarse a la altura del navegador
		var newHeight = navHeight;
		var newWidth = (navHeight / picHeight) * picWidth;
	}
	
	// centramos la imagen
	newTop = 0 - ((newHeight - navHeight) / 2);
	newLeft =  0 - ((newWidth - navWidth) / 2);

	// colocamos todas calcolo finale
	$('#image_holder').css({height: navHeight, width: navWidth});
	$('#image_holder').css({visibility:"visible", display:"block"});
	
	$('.main_image').css({height: newHeight, width: newWidth});
	
	// centro e margini
	$(imgCenter).css({top: newTop, left: newLeft});
	$(imgLeft).css({top: newTop, left: newLeft-newWidth});
	$(imgRight).css({top: newTop, left: newLeft+newWidth});
	$(imgUp).css({top: newTop-newHeight, left: newLeft});
	$(imgDown).css({top: newTop+newHeight, left: newLeft});
	
}