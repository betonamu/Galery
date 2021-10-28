import {createAction} from "redux-actions";

export const actionTypes = {
    GET_COLLECTION_BY_ID: 'product/GET_COLLECTION_BY_ID'
}

export const actions = {
    getCollectionById: createAction(actionTypes.GET_COLLECTION_BY_ID),
}