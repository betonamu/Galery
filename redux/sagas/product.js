import { takeLatest } from 'redux-saga/effects';

import apiConfig from '../../constants/apiConfig';
import { productActionTypes } from "../actions";
import { processLoadingAction } from '../helper';

const {GET_COLLECTION_BY_ID} = productActionTypes;

const getCollectionById = (payload) => {
    return processLoadingAction(apiConfig.collection.getAllCollection, payload);
}

export default[
    takeLatest(GET_COLLECTION_BY_ID, getCollectionById)
]