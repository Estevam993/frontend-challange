import getRequest from "@/helpers/getRequest"

const hash = process.env.NEXT_PUBLIC_HASH
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY
const timestamp = process.env.NEXT_PUBLIC_TIMESTAMP


const getCharacters = async (page,limit,name) => {
    limit = limit ? `limit=${limit}&` : ''
    name = name ? `nameStartsWith=${name}&` : ''

    const url = `https://gateway.marvel.com/v1/public/characters?${name}${limit}apikey=${publicKey}&ts=${timestamp}&hash=${hash}`
    console.log(url)

    const response = await getRequest(url)
    return response
}

export default getCharacters