import {takeLatest} from "redux-saga/effects";

import apiConfig from "@constants/apiConfig";
import {productActionTypes} from "src/redux/actions";
import {processCallbackAction, processLoadingAction} from "../helper";
import {RequestApi} from "@common/Models/ApiModels";

const {GET_COLLECTION_BY_ID, GET_ALL_MODEL, CREATE_COLLECTION} = productActionTypes;

const getCollectionById = (payload: RequestApi<any>) => {
    return processLoadingAction(apiConfig.collection.getAllCollection, payload);
}

const getAllModel = (payload: RequestApi<any>) => {
    return processLoadingAction(apiConfig.model.getAllModel, payload);
}

const createCollection = ({payload}: RequestApi<any>) => {
    return processCallbackAction(apiConfig.collection.createCollection, payload);
}

export default [
    takeLatest(GET_COLLECTION_BY_ID, getCollectionById),
    takeLatest(GET_ALL_MODEL, getAllModel),
    takeLatest(CREATE_COLLECTION, createCollection),
]