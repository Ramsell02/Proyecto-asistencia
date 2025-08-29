
import { getUsers, postUsers } from "../services/funtionsUsers.js";


const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const contrasena = document.getElementById("contrasena");
const confirmarContra = document.getElementById("confirmarContra");
const boton = document.getElementById("registrar");
const profresor = document.getElementById("profesor");
const estudiante = document.getElementById("estudiante");


boton.addEventListener("click", async () => {

    const infoUsuarios = await getUsers() //para trae al usuario

    const verificacion = infoUsuarios.find(user => email.value === user.email)

    console.log(verificacion);

    if (verificacion === undefined) {

        const usuario = {
            nombre: nombre.value,
            email: email.value,
            contrasena: contrasena.value,
            confirmarContra: confirmarContra.value,
        }
        const usuarioNuevo = await postUsers(usuario)
        Swal.fire({
            title: "Usuario creado!",
            text: "Usuario creado con exito!",
            icon: "success",
            confirmButtonText: "Ir a login",
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirección al login
                window.location.href = "login.html";
            }
        });
    } else {

        Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "el correo electronico ya fue usado",

        });
    }

})



///.checked