import { SWAPI_PEOPLE, SWAPI_ROOT, HTTP, HTTPS, GUIDE_IMG_PERSON, GUIDE_IMG_EXT, SWAPI_PARAM_PAGE } from "@constants/api"

const getId = (url, category) => {
    const id = url
        .replace(HTTP + SWAPI_ROOT + category, '')
        .replace(HTTPS + SWAPI_ROOT + category, '')
        .replace(/\//g, '')
    return id
}

export const getPeopleId = url => getId(url, SWAPI_PEOPLE)

export const getPeopleImage = id => GUIDE_IMG_PERSON + id + GUIDE_IMG_EXT

export const getPeoplePageId = url => Number(getId(url, SWAPI_PEOPLE + SWAPI_PARAM_PAGE))
