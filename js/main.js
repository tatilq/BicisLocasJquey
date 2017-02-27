//*----------------------Funcion que se ejecuta apenas se cargue el documento------------------------//
$(document).ready(init);
//*----------------------Funcion que asigna eventos y se ejecuta cuando cargue el documento------------------------//
function init()
{
	$("#name").keyup(validaName); 
	$("#lastname").keyup(validaLastName); 
	$("#email").keyup(validaEmail); 
	$("#password").keyup(validaPass); 
	$("#select_bici").click(validaBici); 
}
//------------------------------------Funcion principal que valida el formulario-------------------------------------//
function validateForm()
{
  var salidaForm=$('#salidaForm');
  validaName(), validaLastName(), validaEmail(), validaPass(), validaBici();

  if(validaName() && validaLastName() && validaEmail() && validaPass() && validaBici()){
  	swal({
      title: "¡Formulario correctamente enviado!",
      imageUrl: "img/goods.png"
    });
  }
  else{
    swal({
      title: "¡Formulario Incompleto!",
      text:"LLenar todos los campos correctamente",
      imageUrl: "img/bads.png"
    });
  }
}
//-----------------------------------Funcion que crea nodos de tipo SPAN------------------------------------------//
function crearSpan(container,mensaje)
{    	
  if(container.find('span').length==0)
    container.append("<span class='animated fadeInLeft'> "+mensaje+"</span>");
}
//------------------------------------FUNCION QUE CONVIERTE LA PRIMERA LETRA EN MAYUSCULA-------------------------//
function primMayuscula(id){
    var nombreArray = id.split("");
    var primeraLetra = nombreArray[0];
    var primeraMayus = primeraLetra.toUpperCase();
    var cortePalabra = false;
     for(var i=1;i<nombreArray.length;i++)
        {
          if(cortePalabra)
          {    
            primeraMayus += nombreArray[i].toUpperCase();
            cortePalabra = false;
          }
          else
              primeraMayus+=nombreArray[i];
          if(nombreArray[i] == " ")
              cortePalabra = true;
        }
    return primeraMayus;
}  
//-------------------------------------------VALIDA NOMBRE SEGUN FORMATO VALIDO----------------------------------//
function validaName() 
{
	var contenedorName=$("#contenedorName");
	var name=$("#name");
	var isValid=false;

 	if(name.val().length > 0 && name.val().match(/^[a-zA-Z\s]*$/)){
 		name.val(primMayuscula(name.val()));
 		$("#contenedorName span").remove();
 		isValid=true;
 	}
  else
   	 crearSpan(contenedorName,"Debes Ingresar un nombre valido (solo letras).");
  	
  return isValid;
}
//-------------------------------------------VALIDA APELLIDO SEGUN FORMATO VALIDO----------------------------------//
function validaLastName() 
{
	var contenedorLastname=$("#contenedorLastname");
	var lastname=$("#lastname");
	var isValid=false;

 	if(lastname.val().length > 0 && lastname.val().match(/^[a-zA-Z\s]*$/)){
 		lastname.val(primMayuscula(lastname.val()));
 		$("#contenedorLastname span" ).remove();
 		isValid=true;
 	}
  else
		 crearSpan(contenedorLastname,"Debes Ingresar un apellido valido (solo letras).");
  	
  return isValid;
}
//---------------------------------------------VALIDA EMAIL SEGUN FORMATO VALIDO-----------------------------------//
function validaEmail() 
{ 
	var contenedorEmail=$("#contenedorEmail");
	var email=$("#email").val();
	var isValid=false;

 	if(email.length > 0 && email.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){ 
     $("#contenedorEmail span" ).remove();
     isValid=true;
 	}
 	else
	  crearSpan(contenedorEmail,"Debes Ingresar un email valido");

  return isValid;
}
//----------------------------------------------VALIDA PASSWORD SEGUN FORMATO VALIDO-------------------------------//
function validaPass()
{
	var contenedorPassword=$("#contenedorPassword");
  var password=$("#password").val();
	var isValid=false;

	if(!password.match(/.{6,}/) || password=="123456" || password.toLowerCase()=="password" || password=="098754")
 	 	crearSpan(contenedorPassword,"Debes Ingresar una contraseña valida");
	else{
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

	if(tipo!=0){
  	$("#contenedorBici span" ).remove();
  	isValid=true;
	} 
	else
  	crearSpan(contenedorBici,"Debes seleccionar un tipo de  Bicicleta.");
	
  return isValid;
} 
//------------------------------------------------------------FIN--------------------------------------------------//