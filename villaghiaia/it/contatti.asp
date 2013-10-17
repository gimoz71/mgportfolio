<%
dim mittente
dim oggetto
dim email
dim messaggio


mittente=request("mittente")
oggetto=request("oggetto")
email=request("email")
messaggio=request("messaggio")

mode=request("mode")
if mode="" then mode=1

num=Instr(email, "@")
if num=0 then
	mode=2
	result = "Email inserita non valida"
end if
num=Instr(email, ".")
if num=0 then
	mode=2
	result = "Email inserita non valida"
end if
num=Instr(email, "")
if num=0 then
	mode=2
	result = "Il campo email è vuoto"+email+".."+messaggio+".."+mittente
end if
if mode=1 then

	Set miaMail=CreateObject("CDONTS.NewMail")
	miaMail.From=email
	miaMail.To="info@villaghiaia.it"
	miaMail.Subject="Contatto da www.villaghiaia.it"
	miaMail.BodyFormat=1
	miaMail.MailFormat=0
	miaMail.Importance=0
	nome= Request("nome")
	email= Request("email")
	messaggio= Request("messaggio")
	body=""
	body="Mittente: " & mittente & VbCrLf & "email: " & email & VbCrLf
	body=body & VbCrLf & messaggio
	miaMail.Body=body
	miaMail.Send
	Set miaMail=Nothing

	result = "OK"
end if

out_contatti = "&result="&result
Response.Write out_contatti

%>
