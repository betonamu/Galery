import qs from 'qs'
import {storageKeys} from '@constants';
import apiConfig from '@constants/apiConfig';
import {getObjectData, removeItem} from './localStorage';

const sendRequest = async (options, params = {}) => {
    let fullPath = options.path;
    let fetchRequest;
    let infoRequest;

    const userToken = getObjectData(storageKeys.USER_TOKEN).accessToken;
    console.log(userToken)

    if (userToken && fullPath !== apiConfig?.account?.getOtp?.path
        && fullPath !== apiConfig?.authenticate?.signIn?.path) {
        options.headers.Authorization = `Bearer ${userToken}`;
    }

    if (options.headers['Content-Type'] === 'multipart/form-data') {
        let headers = JSON.parse(JSON.stringify(options.headers));
        const formData = new FormData();
        const fileObjects = params.fileObjects;
        delete headers['Content-Type'];
        Object.keys(params).forEach(key => {
            if (key !== 'fileObjects')
                formData.append(key, params[key]);
        });
        if (fileObjects && Object.keys(fileObjects).length > 0) {
            Object.keys(fileObjects).forEach(key => {
                if (fileObjects[key].length > 0) {
                    fileObjects[key].forEach(file => {
                        formData.append(key, file);
                    });
                } else if (fileObjects[key].constructor !== Array) {
                    formData.append(key, fileObjects[key]);
                }
            });
        }

        infoRequest = {
            method: options.method,
            headers,
            body: formData
        };
    } else {
        if (options.method === 'GET') {
            const mergeParams = {
                ...options.params,
                ...params,
            }

            if (Object.keys(mergeParams).length) {
                fullPath = `${fullPath}?${qs.stringify(mergeParams)}`
            }

            infoRequest = {
                method: options.method,
                headers: options.headers
            };
        } else {
            infoRequest = {
                method: options.method,
                headers: options.headers,
                body: JSON.stringify(params)
            };
        }
    }

    fetchRequest = await fetch(fullPath, infoRequest)
        .catch(error => {
            console.log(error);
            return Promise.reject(error);
        });

    if (fetchRequest.status === 401 && userToken) {
        removeItem(storageKeys.USER_TOKEN);
        removeItem(storageKeys.USER_DATA);
        window.location.replace('/');

    } else if (fetchRequest.status === 403) {
        window.location.replace('/forbidden');
    } else if (fetchRequest.status === 200 || fetchRequest.status === 201) {
        const responseData = await fetchRequest.json();
        return {success: true, responseData}
    } else if (fetchRequest.status === 401 || fetchRequest.status === 400 || fetchRequest.status === 404) {
        const responseData = await fetchRequest.json();
        return {success: false, responseData}
    } else {
        return Promise.reject(new Error('Internal Server Error'));
    }
}

const handleApiResponse = (result, onCompleted, onError) => {
    const {success, responseData} = result;
    if (success)
        onCompleted(responseData);
    else
        onError(responseData);
}

export {sendRequest, handleApiResponse}
