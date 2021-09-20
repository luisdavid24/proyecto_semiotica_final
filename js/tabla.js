var condicion=0;
var horario;
 var modalidad;

function botonTabla(index,index2,index3,index4){
    horario=index3.innerText;
    modalidad=index4.innerText;
    var numero=document.getElementById(index.id).innerText;
    var campo=document.getElementById(index.id);
    var botonCambio=document.getElementById(index2.id);
    numero=parseInt(numero);
    if(numero<30 && condicion===0){
        numero++;
        campo.innerText=numero;
        condicion++;
        verBoton();
        
    }else{
        if(condicion==1){
            alert("Solo te puede inscribir a una clase");
        }
    }
    if(numero==30){
        botonCambio.innerText="clase llena";
        
    }

}
function verBoton(){
    var boton=document.getElementById("botonTerminarId").style.display="block";
}
function MostrarCard(){
    var card=document.getElementById("card").style.display="flex";
    var modadlidaP=document.getElementById("modadlidaP");
    modadlidaP.innerText=modalidad;
    var horarioP=document.getElementById("horarioP");
    horarioP.innerText=horario;
}