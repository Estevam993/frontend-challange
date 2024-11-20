import getRequest from "@/helpers/getRequest"

const hash = process.env.NEXT_PUBLIC_HASH
const publicKey = process.env.NEXT_PUBLIC_PUBLIC_KEY
const timestamp = process.env.NEXT_PUBLIC_TIMESTAMP

const getCharactersComic = async (id) => {
    const url = `https://gateway.marvel.com:443/v1/public/characters/${id}/comics?format=comic&formatType=comic&orderBy=onsaleDate&limit=10&apikey=${publicKey}&ts=${timestamp}&hash=${hash}`

    const response = await getRequest(url)

    return response
}

export default getCharactersComic