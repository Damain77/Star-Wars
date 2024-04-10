import { HTTP, HTTPS } from "@constants/api"

/**
 * изменяет url с http на https
 * @param {String} url - url для изменения
 * @returns {String} - url для https
 */
export const changeHTTP = (url) => {
    const res = url ? url.replace(HTTP, HTTPS) : url
    return res
}
/**
 * отпрвляет запрос fetch
 * @param {String} url - url для запроса
 * @returns {Promise} Promise  с результатом запроса
 */
export const getApiResourse = async (url)=>{
    try{
        const response = await fetch(url)
        if(!response.ok){
            console.error('Could not fetch:', response.status)
            return false
        }
        return await response.json()
    } catch(error) {
        console.error('Could not fetch:', error.message)
        return false
    }
}

export const makeConcurrentrequest = async url => {
    const res = await Promise.all(url.map(async el => {
        return getApiResourse(changeHTTP(el))
        // return fetch(el).then(res => res.json())
    }))
    return res
}