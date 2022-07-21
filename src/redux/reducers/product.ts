import {HYDRATE} from "next-redux-wrapper";
import {handleActions} from "redux-actions";

import {productActionTypes} from "@redux/actions";
import {ProductState} from "@common/Models/Redux";
import {createSuccessActionType} from "../helper";

const {GET_COLLECTION_BY_ID, GET_ALL_MODEL} = productActionTypes;

const initialState: ProductState = {
    collection: {},
    models: []
};

const product = handleActions(
    {
        [HYDRATE]: (state, action: any) => {
            return {...state, ...action.payload.product}
        },
        [createSuccessActionType(GET_COLLECTION_BY_ID)]: (state, action: any) => {
            return {
                ...state,
                collection: action.payload.resultObj
            };
        },
        [createSuccessActionType(GET_ALL_MODEL)]: (state, action: any) => {
            return {
                ...state,
                models: action.payload.resultObj
            };
        },
    },
    initialState
);

export default product;
