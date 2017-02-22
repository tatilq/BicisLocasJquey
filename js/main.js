//*----------------------Funcion que asigna eventos y se ejecuta cuando cargue el documento------------------------//
$(document).ready(function()
{
	$("#name").keyup(validaName); 
	$("#lastname").keyup(validaLastName); 
	$("#email").keyup(validaEmail); 
	$("#password").keyup(validaPass); 
	$("#select_bici").click(validaBici); 
});
//------------------------------------Funcion principal que valida el formulario-------------------------------------//
function validateForm()
{
	validaName();
	validaLastName();
    validaEmail();
	validaPass();
	validaBici();

	if(validaName() && validaLastName() && validaEmail() && validaPass() && validaBici())
		salidaForm.innerHTML='<p style="color:green; font-size:15px;" class="animated rubberBand">Formulario Enviado Correctamente ✔</p>';  
  	else
     	salidaForm.innerHTML='<p style="color:red; font-size:15px;" class="animated rubberBand">Llena todos los campos correctamente</p>';
}
//-----------------------------------Funcion que crea nodos de tipo SPAN------------------------------------------//
function crearSpan(container,mensaje)
{    	
    if(container.find('span').length==0)
    {
    	container.append("<span class='animated fadeInLeft'> "+mensaje+"</span>");
    }
}
//-------------------------------------------VALIDA NOMBRE SEGUN FORMATO VALIDO----------------------------------//
function validaName() 
{
	var name=$("#name").val();
	var contenedorName=$("#contenedorName");
	var isValid=false;
 	if(name.length > 0 && name.match(/^[a-zA-Z\s]*$/)){
 		$("#contenedorName span").remove();
 		isValid=true;
 	}
   	else{
   		crearSpan(contenedorName,"Debes Ingresar un nombre valido (solo letras).");
   		isValid=false;
  	}
  	return isValid;
}
//-------------------------------------------VALIDA APELLIDO SEGUN FORMATO VALIDO----------------------------------//
function validaLastName() 
{
	var contenedorLastname=$("#contenedorLastname");
	var lastname=$("#lastname").val();
	var isValid=false;

 	if(lastname.length > 0 && lastname.match(/^[a-zA-Z\s]*$/))
 	{
 		$("#contenedorLastname span" ).remove();
 		isValid=true;
 	}
   	else
   	{
		crearSpan(contenedorLastname,"Debes Ingresar un apellido valido (solo letras).");
		isValid=false;
  	}

  	return isValid;
}
//---------------------------------------------VALIDA EMAIL SEGUN FORMATO VALIDO-----------------------------------//
function validaEmail() 
{ 
  	var contenedorEmail=$("#contenedorEmail");
  	var email=$("#email").val();
  	var isValid=false;

 	if(email.length > 0 && email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
 	{ 
	    $("#contenedorEmail span" ).remove();
	    isValid=true;
 	}
 	else
 	{
	    crearSpan(contenedorEmail,"Debes Ingresar un email valido");
	    isValid=false;
  	}

  return isValid;
}
//----------------------------------------------VALIDA PASSWORD SEGUN FORMATO VALIDO-------------------------------//
function validaPass()
{
	var contenedorPassword=$("#contenedorPassword");
    var password=$("#password").val();
  	var isValid=false;

  	if(!password.match(/.{6,}/) || password=="123456" || password.toLowerCase()=="password" || password=="098754")
  	{
   	 	crearSpan(contenedorPassword,"Debes Ingresar una contraseña valida");
    	isValid=false;
  	}
  	else
  	{
    	$("#contenedorPassword span" ).remove();
    	isValid=true;
   
  	}
  return isValid;
}
//-----------------------------------------VALIDA QUE SELECCIONES UN TIPO DE BICICLETA------------------------------//
function validaBici()
{
	var contenedorBici=$("#contenedorBici");
  	var tipo=$("#select_bici").val();
  	var isValid=false;

  	if(tipo!=0)
  	{
    	$("#contenedorBici span" ).remove();
    	isValid=true;
  	} 
  	else
  	{   
    	crearSpan(contenedorBici,"Debes seleccionar un tipo de  Bicicleta.");
    	isValid=false;
  	}   
  return isValid;
} 
//------------------------------------------------------------FIN--------------------------------------------------//