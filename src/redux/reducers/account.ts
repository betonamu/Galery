import {handleActions} from 'redux-actions';

import {accountActionTypes} from '@redux/actions';
import {AccountState} from "@common/Models/Redux";
import {getObjectData, setObjectData} from "@utils/localStorage";
import {storageKeys} from "@constants";

const {SET_PROFILE} = accountActionTypes;

const initialState: AccountState = {
    userData: getObjectData(storageKeys.USER_DATA),
};

const account = handleActions(
    {
        [SET_PROFILE]: (state: any, action: any) => {
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