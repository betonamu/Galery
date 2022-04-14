import {galleryApiUrl} from './index'

const baseHeader = {
    'Content-Type': 'application/json'
}

const multipartFormHeader = {
    'Content-Type': 'multipart/form-data'
}

const apiConfig = {
    authenticate:{
        signIn: {
            path: `${galleryApiUrl}api/user/authenticate`,
            method: 'POST',
            headers: baseHeader
        },
        getUserByToken: {
            path: `${galleryApiUrl}api/user`,
            method: 'GET',
            headers: baseHeader
        },
    },
    collection: {
        getAllCollection: {
            path: `${galleryApiUrl}api/collections`,
            method: 'GET',
            headers: baseHeader
        },
        createCollection:{
            path: `${galleryApiUrl}api/collections/create-collection`,
            method: 'POST',
            headers: multipartFormHeader
        }
    },
    model: {
        getAllModel: {
            path: `${galleryApiUrl}api/model`,
            method: 'GET',
            headers: baseHeader
        },
    }
}

export default apiConfig;
