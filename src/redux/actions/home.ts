import { createAction } from 'redux-actions';

export const actionTypes = {
    GET_ALL_COLLECTION: 'home/GET_ALL_COLLECTION',
}

export const actions = {
    getAllCollection: createAction(actionTypes.GET_ALL_COLLECTION),
}