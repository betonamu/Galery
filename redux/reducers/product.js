import {HYDRATE} from "next-redux-wrapper";

import {productActionTypes} from "../actions";
import {handleActions} from "redux-actions";
import {createSuccessActionType} from "../helper";

const {GET_COLLECTION_BY_ID} = productActionTypes;

const initialState = {
    collection: {},
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
    },
    initialState
);

export default product;
