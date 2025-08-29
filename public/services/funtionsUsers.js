async function getUsers() {

    try {
        const response = await fetch('http://localhost:3001/users',{
            method:'GET',
            headers:{
                'Content-Type': 'application/json'
            }
        })

        const users = await response.json()

        return users


    } catch (error) {

        console.error("error al obtener el usuario",error)
        throw error

    }
    
}

export{getUsers}




async function postUsers(users) {

    try {
        const response = await fetch('http://localhost:3001/users',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
                
            },
            body:JSON.stringify(users)

        })

        const usersResponse = await response.json()

        return usersResponse


    } catch (error) {

        console.error("error al agregar el usuario",error)
        throw error

    }
    
}

export{postUsers}



async function putUsers(users,id) {

    try {
        const response = await fetch('http://localhost:3001/users'+id,{
            method:'PUT',
            headers:{
                'Content-Type': 'application/json'
                
            },
            body:JSON.stringify(users)

        })

        const users = await response.json()

        return users


    } catch (error) {

        console.error("error al editar el usuario",error)
        throw error

    }
    
}

export{putUsers}



async function deleteUsers(id) {

    try {
        const response = await fetch('http://localhost:3001/users'+id,{
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json'
                
            },
           

        })

        const users = await response.json()

        return users


    } catch (error) {

        console.error("error al eliminar el usuarios",error)
        throw error

    }
    
}

export{deleteUsers}