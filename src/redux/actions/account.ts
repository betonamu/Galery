import { createAction } from 'redux-actions';

export const actionTypes = {
    SIGN_IN: 'account/SIGN_IN',
    SET_PROFILE: 'account/SET_PROFILE',
    LOGOUT: 'account/LOGOUT',
}

export const actions = {
    signIn: createAction(actionTypes.SIGN_IN),
    setProfile: createAction(actionTypes.SET_PROFILE),
    logout: createAction(actionTypes.LOGOUT),
}