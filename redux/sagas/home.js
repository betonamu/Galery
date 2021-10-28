import {takeLatest} from 'redux-saga/effects';

import apiConfig from '../../constants/apiConfig';
import {homeActionTypes} from '../actions';
import {processLoadingAction} from '../helper';

const {GET_ALL_COLLECTION} = homeActionTypes;

const getAllCollection = (payload) => {
    return processLoadingAction(apiConfig.collection.getAllCollection, payload);
}

export default [
    takeLatest(GET_ALL_COLLECTION, getAllCollection),
];