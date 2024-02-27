import axios from 'axios'
import { useState } from 'react'

const useFetch = (baseUrl) => {

    const [response, setresponse] = useState()

    //READ

    const getApi=()=>{
        const url = `${baseUrl}/user`
        axios.get(url)
            .then(res => setresponse(res.data))
            .catch(err => console.log(err))
    }

    //CREATE

    const createApi=(data)=>{
        const url = `${baseUrl}/user`
        axios.post(url, data)
            .then(res => setresponse([...response, res.data]))
            .catch(err => console.log(err))
    }

    //DELETE

    const deleteApi = (id) =>{
        const url = `${baseUrl}/user/${id}/`
        axios.delete(url)
            .then(res => setresponse(response.filter(user => user.id!==id)) )
            .catch(err => console.log(err))
    }

    //UPDATE

    const updateApi = (id, data) =>{
        const url = `${baseUrl}/user/${id}/`
        axios.put(url, data)
        .then(res => setresponse(response.map(user => user.id===id ? res.data : user)))
        .catch(err => console.log(err))


    }

    return[response, getApi, createApi, deleteApi, updateApi]

}

export default useFetch