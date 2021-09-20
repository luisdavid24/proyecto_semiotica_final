var usuario = document.getElementById("usuario");
var contra = document.getElementById("contrasena");
var boton = document.getElementById("button");
var modal = document.getElementsById("mymodal")

function validar_usuario() {

    if (usuario.value == "") {
        alert("Debe diligenciar el usuario");

    } else if (contra.value == "") {
        alert("Debe diligenciar la contraseña");

    }
    if (usuario.value == "checho" && contra.value == "1234") {
        // alert("Bienvenido a Training Security");
        window.location = "tabla.html"
    } else if (usuario.value !== "checho" || contra.value !== "1234" && sw == 0) {
        alert("Usuario y/o Contraseña incorrectas")
        window.location = "login.html"
    }
}

function Mostrar() {
    swal('!Recuperación Exitosa!', 'se ha enviado un correo a Che*******@gmail.com con su nueva contraseña', 'success');
}
