import {takeLatest} from 'redux-saga/effects';

import apiConfig from '../../constants/apiConfig';
import {productActionTypes} from "../actions";
import {processCallbackAction, processLoadingAction} from '../helper';

const {GET_COLLECTION_BY_ID, GET_ALL_MODEL, CREATE_COLLECTION} = productActionTypes;

const getCollectionById = (payload) => {
    return processLoadingAction(apiConfig.collection.getAllCollection, payload);
}

const getAllModel = (payload) => {
    return processLoadingAction(apiConfig.model.getAllModel, payload);
}

const createCollection = ({payload}) => {
    return processCallbackAction(apiConfig.collection.createCollection, payload);
}

export default [
    takeLatest(GET_COLLECTION_BY_ID, getCollectionById),
    takeLatest(GET_ALL_MODEL, getAllModel),
    takeLatest(CREATE_COLLECTION, createCollection),
]