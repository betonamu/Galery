import {loadingActions} from 'src/redux/actions';
import {call, put} from 'redux-saga/effects';
import {handleApiResponse, sendRequest} from '@utils/api';
import {Action, PayloadType, RequestApi} from "@common/Models/ApiModels";

const {startLoading, finishLoading} = loadingActions;

export const createSuccessActionType = (type: Action) => `${type}_SUCCESS`;
export const createFailureActionType = (type: Action) => `${type}_FAILURE`;

export function* processLoadingAction(options: any, {payload, type}: RequestApi<any>): any {
    const SUCCESS = createSuccessActionType(type);
    const FAILURE = createFailureActionType(type);
    // @ts-ignore
    yield put(startLoading(type));
    try {
        const response = yield call(sendRequest, options, payload);
        yield put({
            type: response.success ? SUCCESS : FAILURE,
            payload: response.responseData
        });
    } catch (e) {
        yield put({
            type: FAILURE,
            payload: e,
            error: true
        });
    }
    // @ts-ignore
    yield put(finishLoading(type));
}

export function* processAction(options: any, {payload, type}: RequestApi<any>): any {
    const SUCCESS = createSuccessActionType(type);
    const FAILURE = createFailureActionType(type);
    try {
        const response = yield call(sendRequest, options, payload);
        yield put({
            type: response.success ? SUCCESS : FAILURE,
            payload: response.responseData
        });
    } catch (e) {
        yield put({
            type: FAILURE,
            payload: e,
            error: true
        });
    }
}

export function* processCallbackAction(options: any, payload: PayloadType): any {
    const {params, onCompleted, onError} = payload;
    try {
        const result = yield call(sendRequest, options, params);
        handleApiResponse(result, onCompleted, onError);
    } catch (error) {
        onError?.(error);
    }
}
