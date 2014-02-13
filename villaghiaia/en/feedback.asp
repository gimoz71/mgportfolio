<%Response.Buffer=True%>
<html>
<head>
<title>Thanks</title><%
Dim t1name,t1,t1bname,t1b,t1cname,t1c,t1dname,t1d,t1ename,t1e,t1fname,t1f,t2name,t2,t3name,t3,t4name,t4,t5name,t5,t6name,t6
t1name = "NOME:  "
t1 = Request.Form("t1")
t1bname = "COGNOME:  "
t1b = Request.Form("t1b")
t1cname = "INDRIZZO:  "
t1c = Request.Form("t1c")
t1dname = "CITTA':  "
t1d = Request.Form("t1d")
t1ename = "CAP:  "
t1e = Request.Form("t1e")
t1fname = "TELEFONO:  "
t1f = Request.Form("t1f")
t2name = "E-MAIL:  "
t2 = Request.Form("t2")
t3name = "VILLA:  "
t3 = Request.Form("t3")
t4name = "DATA DI ARRIVO:  "
t4 = Request.Form("t4")
t5name = "DATA DI PARTENZA:  "
t5 = Request.Form("t5")
t6name = "NUMERO DI PERSONE:  "
t6 = Request.Form("t6")
Dim ObjMail
Set ObjMail = Server.CreateObject("CDONTS.NewMail")
'CHANGE THE EMAIL ADDRESS IN QUOTES BELOW TO THE ADDRESS YOU WANT THIS MAIL SENT
ObjMail.To = "info@villaghiaia.it; villaghiaiaholiday@yahoo.it"
ObjMail.From = t2
ObjMail.Subject = "prenotazione dal sito (inglese)"
ObjMail.Body = t1name & t1 & vbcrlf&_
t1bname & t1b & vbcrlf&_
t1cname & t1c & vbcrlf&_
t1dname & t1d & vbcrlf&_
t1ename & t1e & vbcrlf&_
t1fname & t1f & vbcrlf&_
t2name & t2 & vbcrlf&_
t3name & t3 & vbcrlf&_
t4name & t4 & vbcrlf&_
t5name & t5 & vbcrlf&_
t6name & t6 & vbcrlf&_
stname & vbcrlf&_
st
ObjMail.Send
Set ObjMail = Nothing
Response.Write"<center />Thanks. <br>This window will close in 10 seconds..."
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
<input type="button" value="CLOSE" onClick="window.close()">
</form>
</body>
</html>