async function getTickets() {

    try {
        const response = await fetch('http://localhost:3001/tickets',{
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const tickets = await response.json()

        return tickets


    } catch (error) {

        console.error("error al obtener el tickets",error)
        throw error

    }
    
}

export{getTickets}




async function postTickets(tickets) {

    try {
        const response = await fetch('http://localhost:3001/tickets',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
                
            },
            body:JSON.stringify(tickets)

        })

        const tickets = await response.json()

        return tickets


    } catch (error) {

        console.error("error al agregar el tickets",error)
        throw error

    }
    
}

export{postTickets}



async function putTickets(tickets,id) {

    try {
        const response = await fetch('http://localhost:3001/tickets'+id,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
                
            },
            body:JSON.stringify(tickets)

        })

        const tickets = await response.json()

        return tickets


    } catch (error) {

        console.error("error al editar el tickets",error)
        throw error

    }
    
}

export{putTickets}



async function deleteTickets(id) {

    try {
        const response = await fetch('http://localhost:3001/tickets'+id,{
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json'
                
            },
           

        })

        const tickets = await response.json()

        return tickets


    } catch (error) {

        console.error("error al eliminar el tickets",error)
        throw error

    }
    
}

export{deleteTickets}