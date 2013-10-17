<%Response.Buffer=True%>
<html>
<head>
<title>Thanks</title><%
Dim t1name,t1,t2name,t2,t3name,t3,t4name,t4,t5name,t5
t1name = "NOME:  "
t1 = Request.Form("t1")
t2name = "E-MAIL:  "
t2 = Request.Form("t2")
t3name = "VILLA:  "
t3 = Request.Form("t3")
t4name = "DATA DI ARRIVO:  "
t4 = Request.Form("t4")
t5name = "DATA DI PARTENZA:  "
t5 = Request.Form("t5")
Dim ObjMail
Set ObjMail = Server.CreateObject("CDONTS.NewMail")
'CHANGE THE EMAIL ADDRESS IN QUOTES BELOW TO THE ADDRESS YOU WANT THIS MAIL SENT
ObjMail.To = "info@villaghiaia.it; villaghiaiaholiday@yahoo.it"
ObjMail.From = t2
ObjMail.Subject = "richiesta di disponibilità dal sito (italiano)"
ObjMail.Body = t1name & t1 & vbcrlf&_
t2name & t2 & vbcrlf&_
t3name & t3 & vbcrlf&_
t4name & t4 & vbcrlf&_
t5name & t5 & vbcrlf&_
stname & vbcrlf&_
st
ObjMail.Send
Set ObjMail = Nothing
Response.Write"<center />Grazie. <br>Questa finestra si chiuderà in 10 secondi..."
%>
<script language="javascript"><!--
var timer = null
function closeWin() {
self.close()
}
//-->
</script>
</head>
<body onLoad="timer=setTimeout('closeWin()',8000)"><form>
<input type="button" value="CHIUDI" onClick="window.close()">
</form>
</body>
</html>