import { getTickets, postTickets, patchTickets, deleteTickets } from "../services/funtionsTickets.js";

const botonCrear = document.getElementById("botonCrear");
const cerrar= document.getElementById("cerrar");
const panelDudas = document.getElementById("panelDudas");
const tickets = document.getElementById("tickets");
const selector = document.getElementById("selector");

const infoUsuariosL = JSON.parse(localStorage.getItem("usuarioLogin"))

botonCrear.addEventListener("click", async () => {

    const ticketCreado = {
        ticket: tickets.value,
        selector: selector.value,
        estatus: "En revision",
        estudiante: infoUsuariosL.id,
        fecha: new Date(),
        respuesta: "",

    }
    try {
        const crearticket = await postTickets(ticketCreado);

       
        await Swal.fire({
            icon: "success",
            title: "Ticket enviado",
            text: "Tu ticket se ha enviado correctamente",
            confirmButtonText: "Ok"
        });

        
        history.go(0);

    } catch (error) {
        console.error("Error al crear ticket:", error);
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "No se pudo enviar el ticket",
            confirmButtonText: "Ok"
        });
    }

});

async function datosTickets() {
    const ticketsEnviados = await getTickets();
    const filtradaUser = ticketsEnviados.filter(ticket => ticket.estudiante === infoUsuariosL.id)
    panelDudas.textContent = "";
    const listatickets = filtradaUser.map(Element => {
        let nuevoT = document.createElement("div")
        const botonEditar = document.createElement("button");
        const botonEliminar = document.createElement("button");
        const estudiante = document.createElement("p")
        const textoTicket = document.createElement("p");
        const profe = document.createElement("p");
        const estatus = document.createElement("p");
        const fecha = document.createElement("p");
        const respuesta=document.createElement("p");
        botonEditar.textContent = "Editar";
        botonEliminar.textContent = "Eliminar";
        estudiante.textContent = Element.estudiante;
        textoTicket.textContent = Element.ticket;
        profe.textContent = Element.selector;
        estatus.textContent = Element.estatus;
        fecha.textContent = Element.fecha;
        respuesta.textContent=Element.respuesta;

        panelDudas.appendChild(nuevoT);
        nuevoT.appendChild(estudiante);
        nuevoT.appendChild(textoTicket);
        nuevoT.appendChild(profe);
        nuevoT.appendChild(estatus);
        nuevoT.appendChild(fecha);
        nuevoT.appendChild(respuesta);
        nuevoT.appendChild(botonEliminar);
        nuevoT.appendChild(botonEditar);





        botonEliminar.addEventListener("click", async function () {
            Swal.fire({
                title: "¿Quieres eliminar este ticket?",
                text: "No podrás recuperarlo después",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#d33",
                cancelButtonColor: "#3085d6",
                confirmButtonText: "Sí, eliminar",
                cancelButtonText: "No, cancelar"
            }).then((result) => {
                if (result.isConfirmed) {
                    deleteTickets(Element.id);
                    panelDudas.removeChild(nuevoT)
                    Swal.fire({
                        icon: "error",
                        title: "Ticket eliminado",
                        text: "El ticket fue borrado correctamente",
                        confirmButtonText: "Ok"
                    });
                }
            });

        })







        botonEditar.addEventListener("click", async () => {
            const { value: nuevoTexto } = await Swal.fire({
                title: "Editar ticket",
                input: "text",
                inputLabel: "Modifica el contenido del ticket",
                inputValue: Element.ticket, // valor actual del ticket
                showCancelButton: true,
                confirmButtonText: "Guardar",
                cancelButtonText: "Cancelar",
                inputValidator: (value) => {
                    if (!value) {
                        return "El ticket no puede estar vacío";
                    }
                }
            });

            if (nuevoTexto) {
                try {
                   
                    await patchTickets({ ticket: nuevoTexto }, Element.id);

                    Swal.fire({
                        icon: "success",
                        title: "Ticket editado",
                        text: "El ticket fue actualizado correctamente",
                        confirmButtonText: "Ok"
                    }).then(() => {
                        history.go(0);
                    });

                } catch (error) {
                    console.error("Error al editar:", error);
                    Swal.fire({
                        icon: "error",
                        title: "Error",
                        text: "No se pudo actualizar el ticket",
                        confirmButtonText: "Ok"
                    });
                }
            }
            datosTickets()
        });








    })





}
datosTickets()



cerrar.addEventListener("click",function () {
    localStorage.clear()
    window.location.href= "login.html"
    
})



