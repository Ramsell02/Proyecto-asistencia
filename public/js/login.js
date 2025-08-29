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
        
     }else{
         Swal.fire({
            title: "usuario encontrado!",
            text: "buenvenido!"+ usuario.nombre,
            icon: "success",
            confirmButtonText: "ir a la pagina principal",
        }).then((result) => {
            if (result.isConfirmed) {
                // Redirección a la pagina principal
                window.location.href ="../pages/interfazE.html";
            }
        });
     }



    
})