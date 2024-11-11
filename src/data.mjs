import axios from "axios"

const axiosAPI = 'https://pokeapi.co/api/v2/pokemon'

export async function getData() {
    try {   
    const response = await axios.get(axiosAPI)
    console.log(response.data)
        
    } catch (err) {
        console.error(err)
    }
    
}