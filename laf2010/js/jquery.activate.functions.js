// FUNZIONE PER SCROLLER PAGINA ORIZZONTALE

$(function() {
	var originalSizes = new Array();
	$('#vai').jScrollHorizontalPane({scrollbarHeight:6, scrollbarMargin:0});
	
	$('a.jumper').click(function(){
		var pos = $(this).attr('id');
		var c = $("#vai");
		c[0].scrollTo(".panel:eq("+pos+")");
		return false;
	});
});

// FUNZIONE PER SCROLLER PAGINA VERICALE

$(function()
{
	$('.vertical-pane').jScrollPane({scrollbarWidth: 6 });
});

// FUNZIONE NAVIGAZIONE GALLERIA IMMAGINI ARTISTI

$(document).ready(function(){	
	$("#slider1").easySlider({
		navId: 'artistNav',					 
		vertical: false, 
		continuous: true 		
	});
	$("#slider2").easySlider({
		navId: 'artistNav2',					 
		prevId: 'prevBtn2',
		nextId: 'nextBtn2',
		firstId: 'firstBtn2',
		lastId: 'lastBtn2',
		vertical: false, 
		continuous: true 		
	});
	$("#slider3").easySlider({
		navId: 'artistNav3',					 
		prevId: 'prevBtn3',
		nextId: 'nextBtn3',
		firstId: 'firstBtn3',
		lastId: 'lastBtn3',
		vertical: false, 
		continuous: true 		
	});
	$("#slider4").easySlider({
		navId: 'artistNav4',					 
		prevId: 'prevBtn4',
		nextId: 'nextBtn4',
		firstId: 'firstBtn4',
		lastId: 'lastBtn4',
		vertical: false, 
		continuous: true 		
	});
	$("#slider5").easySlider({
		navId: 'artistNav5',					 
		prevId: 'prevBtn5',
		nextId: 'nextBtn5',
		firstId: 'firstBtn5',
		lastId: 'lastBtn5',
		vertical: false, 
		continuous: true 		
	});
	$("#slider6").easySlider({
		navId: 'artistNav6',					 
		prevId: 'prevBtn6',
		nextId: 'nextBtn6',
		firstId: 'firstBtn6',
		lastId: 'lastBtn6',
		vertical: false, 
		continuous: true 		
	});
	$("#slider7").easySlider({
		navId: 'artistNav7',					 
		prevId: 'prevBtn7',
		nextId: 'nextBtn7',
		firstId: 'firstBtn7',
		lastId: 'lastBtn7',
		vertical: false, 
		continuous: true 		
	});
	$("#slider8").easySlider({
		navId: 'artistNav8',					 
		prevId: 'prevBtn8',
		nextId: 'nextBtn8',
		firstId: 'firstBtn8',
		lastId: 'lastBtn8',
		vertical: false, 
		continuous: true 		
	});
	$("#slider9").easySlider({
		navId: 'artistNav9',					 
		prevText: 'PREV.',
		nextText: 'NEXT',
		prevId: 'prevBtn9',
		nextId: 'nextBtn9',
		firstId: 'firstBtn9',
		lastId: 'lastBtn9',
		vertical: false, 
		continuous: true 		
	});
});		

// FUNZIONE NAVIGAZIONE SCHEDE ARTISTI

$(document).ready(function(){
	$("#artist > ol").tabs({fx:{opacity: "toggle"}});
});



// VALIDAZIONE DEL FORM CONTATTI
$(document).ready(function(){
	$("#contactform").validate();
});


// INVIO DEI DATI DAL FORM
$(document).ready(function(){
	$("#contactform	").submit(function(){
	
		// 'this' refers to the current submitted form
		var str = $(this).serialize();
	
	   $.ajax({
	   type: "POST",
	   url: "invio_email.php",
	   data: str,
	   success: function(msg){
			$("#note").ajaxComplete(function(event, request, settings){
				if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
					{
						result = 'Grazie per averci scritto.<br />Verrete ricontattati il prima possibile';
					}
					else
					{
						result = msg;
					}
						$(this).html(result);
					});
				}
			 });
		return false;
	});
});
