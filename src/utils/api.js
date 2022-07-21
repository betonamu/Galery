import qs from 'qs'
import {storageKeys} from '@constants';
import apiConfig from '@constants/apiConfig';
import {getStringData, removeItem} from './localStorage';

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiJ4aXVyZW4uYWRtaW5AZ21haWwuY29tIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvZ2l2ZW5uYW1lIjoiTmd1eWVuIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy9yb2xlIjoiU3lzdGVtLlJ1bnRpbWUuQ29tcGlsZXJTZXJ2aWNlcy5Bc3luY1Rhc2tNZXRob2RCdWlsZGVyYDErQXN5bmNTdGF0ZU1hY2hpbmVCb3hgMVtTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5JTGlzdGAxW1N5c3RlbS5TdHJpbmddLE1pY3Jvc29mdC5Bc3BOZXRDb3JlLklkZW50aXR5LlVzZXJNYW5hZ2VyYDErPEdldFJvbGVzQXN5bmM-ZF9fMTEzW015V2ViQVBJLkVudGl0aXlGcmFtZXdvcmsuRW50aXRpZXMuQXBwVXNlcl1dIiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6ImFkbWluIiwiZXhwIjoxNjM1MzU2NzQwLCJpc3MiOiJodHRwczovL3hpdXJlbi1nYWxlcnktYXBpLmNvbSIsImF1ZCI6Imh0dHBzOi8veGl1cmVuLWdhbGVyeS1hcGkuY29tIn0.pp9qveCD7BTopZjnDcQOfH4euai99Brs5J_75tTJsA4";

const sendRequest = async (options, params = {}) => {
    let fullPath = options.path;
    let fetchRequest;
    let infoRequest;

    const userToken = getStringData(storageKeys.USER_TOKEN);

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
            // Redirect to error page
            // window.location.replace(errorPath);
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
