import {takeLatest} from "redux-saga/effects";

import apiConfig from "@constants/apiConfig";
import {homeActionTypes} from "src/redux/actions";
import {processLoadingAction} from "../helper";
import {RequestApi} from "@common/Models/ApiModels";

const {GET_ALL_COLLECTION} = homeActionTypes;

const getAllCollection = (payload: RequestApi<any>) => {
    return processLoadingAction(apiConfig.collection.getAllCollection, payload);
}

export default [
    takeLatest(GET_ALL_COLLECTION, getAllCollection),
];