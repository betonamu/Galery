import {xiurenGaleryApiUrl} from '.'

const baseHeader = {
    'Content-Type': 'application/json'
}

const multipartFormHeader = {
    'Content-Type': 'multipart/form-data'
}

const apiConfig = {
    collection: {
        getAllCollection: {
            path: `${xiurenGaleryApiUrl}api/collections`,
            method: 'GET',
            headers: baseHeader
        },
        createCollection:{
            path: `${xiurenGaleryApiUrl}api/collections/create-collection`,
            method: 'POST',
            headers: multipartFormHeader
        }
    },
    model: {
        getAllModel: {
            path: `${xiurenGaleryApiUrl}api/model`,
            method: 'GET',
            headers: baseHeader
        },
    }
}

export default apiConfig;
