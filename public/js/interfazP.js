import { getTickets } from "../services/funtionsTickets.js";
const panelProfesores = document.getElementById("interProfe");


async function ticketsRecibidos() {
    const tickets = await getTickets()
    panelProfesores.textContent = ""
    let listatickets = tickets.map(Element => {
        let nuevoT = document.createElement("div")
        const botonResponder = document.createElement("button");
        const estudiante = document.createElement("p")
        const textoTicket = document.createElement("p");
        const profe = document.createElement("p");
        const estatus = document.createElement("p");
        const fecha = document.createElement("p");
        const respuesta = document.createElement("p");
        botonResponder.textContent = "Responder";
        estudiante.textContent = Element.estudiante;
        textoTicket.textContent = Element.ticket;
        profe.textContent = Element.selector;
        estatus.textContent = Element.estatus;
        fecha.textContent = Element.fecha;
        respuesta.textContent = Element.respuesta

        panelProfesores.appendChild(nuevoT);
        nuevoT.appendChild(estudiante);
        nuevoT.appendChild(textoTicket);
        nuevoT.appendChild(profe);
        nuevoT.appendChild(estatus);
        nuevoT.appendChild(fecha);
        nuevoT.appendChild(respuesta);
        nuevoT.appendChild(botonResponder);





        botonResponder.addEventListener("click",async function () {

            
        })




    })

}
ticketsRecibidos()