import {call, CallEffect, put, takeLatest} from "redux-saga/effects";

import apiConfig from "@constants/apiConfig";
import {accountActions, accountActionTypes} from "src/redux/actions";
import {handleApiResponse, sendRequest} from "@utils/api";
import {removeItem, setObjectData, setStringData} from "@utils/localStorage";
import {storageKeys} from "@constants";
import {RequestApi} from "@common/Models/ApiModels";

const {LOGOUT, SIGN_IN} = accountActionTypes;

function* signInSaga({payload: {params, onCompleted, onError}}: RequestApi): any {
    try {
        const result = yield call(sendRequest, apiConfig.authenticate.signIn, params);
        console.log(result)
        if (result?.success) {
            console.log(result?.success)
            setObjectData(storageKeys.USER_TOKEN, result?.responseData.resultObj);
            const getProfileResult = yield call(sendRequest, apiConfig.authenticate.getUserByToken);
            if (getProfileResult.success) {
                yield put(accountActions.setProfile({data: getProfileResult.responseData?.resultObj}));
            }
            handleApiResponse(result, onCompleted, onError);
        } else {
            onError?.(result?.responseData.resultObj);
        }
    } catch (error) {
        onError?.(error);
    }
}

function* logoutSaga({payload: {onCompleted}}: RequestApi): Generator {
    removeItem(storageKeys.USER_TOKEN);
    removeItem(storageKeys.USER_DATA);
    yield put(accountActions.setProfile({data: {}}))
    onCompleted?.();
}

export default [
    takeLatest(SIGN_IN, signInSaga),
    takeLatest(LOGOUT, logoutSaga)
];