import { getUsers } from "../services/funtionsUsers.js";

const email=document.getElementById("email");
const password=document.getElementById("password");
const boton=document.getElementById("boton");

boton.addEventListener("click",async () => {
     const usuarios= await getUsers() //llama al usuario
    
     const usuario = usuarios.find(user => email.value === user.email);
     
    console.log(usuario);
   


     if (usuario === undefined) {
         Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "El correo electronico no esta registrado",
            Text: "Revise que el correo este bien escrito",
        });
        
     }if (usuario.contrasena !== password.value) {
         Swal.fire({
            icon: "error",
            title: "ERROR",
            text: "Contraseña incorrecta",

        });
        
     }if(usuario.rol === "Estudiante") {
         Swal.fire({
            title: "usuario encontrado!",
            text: "bienvenido!"+ usuario.nombre,
            icon: "success",
            confirmButtonText: "ir a la pagina principal",
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirección a la pagina principal
                localStorage.setItem("usuarioLogin",JSON.stringify(usuario));
                window.location.href ="../pages/interfazE.html";
            }
        });
     }else{
        Swal.fire({
            title: "usuario encontrado!",
            text: "bienvenido!"+ usuario.nombre,
            icon: "success",
            confirmButtonText: "ir a la pagina principal",
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirección a la pagina principal
                localStorage.setItem("usuarioLogin",JSON.stringify(usuario));
                window.location.href ="../pages/interfazP.html";
            }
        });
     }



    
})