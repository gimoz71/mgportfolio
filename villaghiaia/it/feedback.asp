<%Response.Buffer=True%>
<html>
<head>
<title>Thanks</title><%
Dim t1zname,t1z,t1name,t1,t1bname,t1b,t1cname,t1c,t1dname,t1d,t1ename,t1e,tpaesename,tpaese,t1fname,t1f,t2name,t2,t3name,t3,t4name,t4,t42name,t42,t43name,t43,t5name,t5,t52name,t52,t53name,t53,t6name,t6,t7name,t7,testoname,testo
t1zname = "TITOLO:  "
t1z = Request.Form("t1z")
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
tpaesename = "NAZIONE:  "
tpaese = Request.Form("tpaese")
t1fname = "TELEFONO:  "
t1f = Request.Form("t1f")
t2name = "E-MAIL:  "
t2 = Request.Form("t2")
t3name = "VILLA:  "
t3 = Request.Form("t3")
t4name = "DATA DI ARRIVO:  "
t4 = Request.Form("t4")
t42name = "- "
t42 = Request.Form("t42")
t43name = "- "
t43 = Request.Form("t43")
t5name = "DATA DI PARTENZA:  "
t5 = Request.Form("t5")
t52name = "- "
t52 = Request.Form("t52")
t53name = "- "
t53 = Request.Form("t53")
t6name = "NUMERO DI ADULTI:  "
t6 = Request.Form("t6")
t7name = "NUMERO DI BAMBINI:  "
t7 = Request.Form("t7")
testoname = "COMUNICAZIONI:  "
testo = Request.Form("testo")
Dim ObjMail
Set ObjMail = Server.CreateObject("CDONTS.NewMail")
'CHANGE THE EMAIL ADDRESS IN QUOTES BELOW TO THE ADDRESS YOU WANT THIS MAIL SENT
ObjMail.To = "info@villaghiaia.it; villaghiaiaholiday@yahoo.it"
ObjMail.From = t2
ObjMail.Subject = "prenotazione dal sito (italiano)"
ObjMail.Body = t1zname & t1z & vbcrlf&_
t1name & t1 & vbcrlf&_
t1bname & t1b & vbcrlf&_
t1cname & t1c & vbcrlf&_
t1dname & t1d & vbcrlf&_
t1ename & t1e & vbcrlf&_
tpaesename & tpaese & vbcrlf&_
t1fname & t1f & vbcrlf&_
t2name & t2 & vbcrlf&_
t3name & t3 & vbcrlf&_
t4name & t4 & t42name & t42 & t43name & t43 & vbcrlf&_
t5name & t5 & t52name & t52 & t53name & t53 & vbcrlf&_
t6name & t6 & vbcrlf&_
t7name & t7 & vbcrlf&_
testoname & testo & vbcrlf&_
stname & vbcrlf&_
st
ObjMail.Send
Set ObjMail = Nothing
Response.Write"<center />Grazie. <br>Questa finestra si chiuder� in 10 secondi..."
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