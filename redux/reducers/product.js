import {HYDRATE} from "next-redux-wrapper";

import {productActionTypes} from "../actions";
import {handleActions} from "redux-actions";
import {createSuccessActionType} from "../helper";

const {GET_COLLECTION_BY_ID, GET_ALL_MODEL} = productActionTypes;

const initialState = {
    collection: {},
    models: []
};

const product = handleActions(
    {
        [HYDRATE]: (state, action) => {
            return {...state, ...action.payload.product}
        },
        [createSuccessActionType(GET_COLLECTION_BY_ID)]: (state, action) => {
            return {
                ...state,
                collection: action.payload.resultObj
            };
        },
        [createSuccessActionType(GET_ALL_MODEL)]: (state, action) => {
            return {
                ...state,
                models: action.payload.resultObj
            };
        },
    },
    initialState
);

export default product;
