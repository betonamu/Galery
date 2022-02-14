import {createAction} from "redux-actions";

export const actionTypes = {
    GET_COLLECTION_BY_ID: 'product/GET_COLLECTION_BY_ID',
    CREATE_COLLECTION: 'product/CREATE_COLLECTION',
    GET_ALL_MODEL: 'product/GET_ALL_MODEL',
}

export const actions = {
    getCollectionById: createAction(actionTypes.GET_COLLECTION_BY_ID),
    getAllModel: createAction(actionTypes.GET_ALL_MODEL),
    createCollection: createAction(actionTypes.CREATE_COLLECTION),
}