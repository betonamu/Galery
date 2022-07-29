import {HYDRATE} from "next-redux-wrapper";
import {handleActions} from "redux-actions";

import {homeActionTypes} from "@redux/actions";
import {HomeState} from "@common/Models/Redux";
import {createSuccessActionType} from '../helper'

const {GET_ALL_COLLECTION} = homeActionTypes;


const initialState: HomeState = {
    collections: [],
};

const home = handleActions(
    {
        [HYDRATE]: (state, action: any) => {
            return {...state, ...action.payload.home};
        },
        [createSuccessActionType(GET_ALL_COLLECTION)]: (state, action: any) => {
            return {
                ...state,
                collections: action.payload.resultObj || []
            };
        },
    },
    initialState
);

export default home;