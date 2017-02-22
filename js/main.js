//*---------------------------------------------Funcion que asigna eventos---------------------------------------//
$(document).ready(function()
{
	$("#name").keyup(validaName); 
	$("#lastname").keyup(validaLastName); 
	$("#email").keyup(validaEmail); 
	$("#password").keyup(validaPass); 
	$("#select_bici").click(validaBici); 
});
//------------------------------------funcion principal que llama a las demas funciones--------------------------//
function validateForm()
{
	var salidaForm=$("#salida_form");
	validaLastName();
    validaEmail();
    validaName();
	validaPass();
	validaBici();
	if(validaName()&&validaLastName()==true&&validaEmail()==true&&validaPass()==true&&validaBici()==true)
		salidaForm.innerHTML='<p style="color:green;">Formulario Enviado Correctamente ✔</p>';  
  	else
     	salidaForm.innerHTML='<p style="color:red;">Llena todos los campos correctamente</p>';
}
//-----------------------------------Funcion que crea nodos SPAN--------------------------------------------------//
function crearNodo(container,mensaje)
{    	
    if(container.find('span').length==0)
    	container.append("<span> "+mensaje+"</span>");
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
   		crearNodo(contenedorName,"Debes llenar el campo");
   		isValid=false;
  	}
  	return isValid;
}
//-------------------------------------------VALIDA NOMBRE SEGUN FORMATO VALIDO----------------------------------//
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
		crearNodo(contenedorLastname,"Debes llenar el campo");
		isValid=false;
  	}

  	return isValid;
}
//--------------------------------------//
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
	    crearNodo(contenedorEmail,"Debes llenar el campo");
	    isValid=false;
  	}

  return isValid;
}
//---------------------------------------------------------------------------------------//
function validaPass()
{
	var contenedorPassword=$("#contenedorPassword");
    var password=$("#password").val();
  	var isValid=false;

  	if(!password.match(/.{6,}/) || password=="123456" || password.toLowerCase()=="password" || password=="098754")
  	{
   	 	crearNodo(contenedorPassword,"Debes ingresar contraseña.");
    	isValid=false;
  	}
  	else
  	{
    	$("#contenedorPassword span" ).remove();
    	isValid=true;
   
  	}
  return isValid;
}
//------------------------------------------------------------------------------------------//
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
    	crearNodo(contenedorBici,"Debes seleccionar un tipo de  Bicicleta.");
    	isValid=false;
  	}   
  return isValid;
} 
//------------------------------------------------------------------------------------------//