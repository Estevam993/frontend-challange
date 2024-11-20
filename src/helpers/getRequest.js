import axios from "axios"

const getRequest = async (url) => {
    try{
        const response = await axios.get(url)

        if(response.status === 200){
            return response.data.data.results
        }
    }catch(err){
        console.warn(err)
    }
    return false
}

export default getRequest