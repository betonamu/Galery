import {HYDRATE} from 'next-redux-wrapper'
import {handleActions} from 'redux-actions';

import {homeActionTypes} from '../actions';
import {createSuccessActionType} from '../helper'

const {GET_ALL_COLLECTION} = homeActionTypes;

const initialState = {
    collections: [],
};

const home = handleActions(
    {
        [HYDRATE]: (state, action) => {
            return {...state, ...action.payload.home}
        },
        [createSuccessActionType(GET_ALL_COLLECTION)]: (state, action) => {
            return {
                ...state,
                collections: action.payload.resultObj
            };
        },
    },
    initialState
);

export default home;