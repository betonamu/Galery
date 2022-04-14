import {handleActions} from 'redux-actions';

import {accountActionTypes} from '../actions';
import {createSuccessActionType} from '../helper'
import {getObjectData, setObjectData} from "../../utils/localStorage";
import {storageKeys} from "../../constants";

const {SET_PROFILE} = accountActionTypes;

const initialState = {
    userData: getObjectData(storageKeys.USER_DATA),
};

const account = handleActions(
    {
        [SET_PROFILE]: (state, action) => {
            console.log({action})
            setObjectData(storageKeys.USER_DATA, action.payload.data);
            return {
                ...state,
                userData: action.payload.data
            };
        },
    },
    initialState
);

export default account;