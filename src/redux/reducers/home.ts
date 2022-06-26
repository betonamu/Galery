import {HYDRATE} from "next-redux-wrapper";
import {handleActions} from "redux-actions";

import {homeActionTypes} from "src/redux/actions";
import {createSuccessActionType} from '../helper'

const {GET_ALL_COLLECTION} = homeActionTypes;

const initialState = {
    collections: [],
};

const home = handleActions(
    {
        [HYDRATE]: (state: any, action: any) => {
            return {...state, ...action.payload.home}
        },
        [createSuccessActionType(GET_ALL_COLLECTION)]: (state: any, action: any) => {
            return {
                ...state,
                collections: action.payload.resultObj || []
            };
        },
    },
    initialState
);

export default home;