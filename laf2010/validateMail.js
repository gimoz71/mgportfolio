 $(document).ready(function(){
	$("#sendmail").click(function(){
		alert('prova se vai');						  
		var valid = '';
		var isr = ' is required.';
		var nome = $("#nome").val();
		var cognome = $("#cognome").val();
		var email = $("#email").val();
		var messaggio = $("#messaggio").val();
		
		if (nome.length<1) {
			valid += '<br />Nome'+isr;
		}
		if (cognome.length<1) {
			valid += '<br />Cognome'+isr;
		}
		if (!email.match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			valid += '<br />A valid Email'+isr;
		}
		
		if (messaggio.length<1) {
			valid += '<br />Text'+isr;
		}
		if (valid!='') {
			$("#response").fadeIn("slow");
			$("#response").html("Error:"+valid);
		}
		else {
			var datastr ='nome=' + nome + '&cognome=' + cognome + '&mail=' + email + '&messaggio=' + messaggio;
			$("#response").css("display", "block");
			$("#response").html("Sending message .... ");
			$("#response").fadeIn("slow");
			setTimeout("send('"+datastr+"')",2000);
		}
		return false;
	});
});
function send(datastr){
	$.ajax({	
		type: "post",
		url: "invio_email.php",
		data: datastr,
		cache: false,
		success: function(html){
		$("#response").fadeIn("slow");
		$("#response").html(html);
		setTimeout('$("#response").fadeOut("slow")',2000);
	}
	});
}
