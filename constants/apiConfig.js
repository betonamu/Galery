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
    }
}

export default apiConfig;
