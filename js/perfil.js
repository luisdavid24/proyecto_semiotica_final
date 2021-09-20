function pasarDato(){
    var direccion=document.getElementById('lista-datos-direccion');
    var telefono=document.getElementById('lista-datos-telefono');
    var empresa=document.getElementById('lista-datos-datos-empresa');
    var cargo=document.getElementById('lista-datos-datos-cargo');
    var sangre=document.getElementById('lista-datos-sangre');
    var genero=document.getElementById('lista-datos-genero');
    var nacimiento=document.getElementById('lista-datos-nacimiento');


    var direccionInput=document.getElementById('input_direccion').value;
    var telefonoInput=document.getElementById('input_telefono').value;
    var trabajoInput=document.getElementById('input_trabajo').value;
    var cargoInput=document.getElementById('input_cargo').value;
    var sangreInput=document.getElementById('input_sangre').value;
    var generoInput=document.getElementById('input_genero').value;
    var fechaInput=document.getElementById('input_fecha').value;
    
    if(direccionInput!=null && direccionInput.length>0){
        direccion.innerHTML=direccionInput;
    }
    if(telefonoInput!=null && telefonoInput.length>0){
        telefono.innerHTML=telefonoInput;
    }
    if(trabajoInput!=null && trabajoInput.length>0){
        empresa.innerHTML=trabajoInput;
    }
    if(cargoInput!=null && cargoInput.length>0){
        cargo.innerHTML=cargoInput;
    }
    if(sangreInput!=null && sangreInput.length>0){
        sangre.innerHTML=sangreInput;
    }
    if(generoInput!=null && generoInput.length>0){
        genero.innerHTML=generoInput;
    }
    if(fechaInput!=null && fechaInput.length>0){
        nacimiento.innerHTML=fechaInput;
    }
}