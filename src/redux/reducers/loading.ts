// import { HYDRATE } from 'next-redux-wrapper';
import {Action, handleActions} from 'redux-actions';
import { loadingActionTypes } from 'src/redux/actions';

const { START_LOADING, FINISH_LOADING, SHOW_LOADING_FULLSCREEN, HIDE_LOADING_FULLSCREEN } = loadingActionTypes;

const initialState = {
    fullScreenLoading: 0
};

const loading = handleActions(
    {
        [START_LOADING]: (state, action) => {
            return {
                ...state,
                [`${action.payload}`]: true
            };
        },
        [FINISH_LOADING]: (state, action) => {
            return {
                ...state,
                [`${action.payload}`]: false
            };
        },
        [SHOW_LOADING_FULLSCREEN]: state => ({
            ...state,
            fullScreenLoading: state.fullScreenLoading + 1
        }),
        [HIDE_LOADING_FULLSCREEN]: state => ({
            ...state,
            fullScreenLoading: Math.max(0, state.fullScreenLoading - 1)
        })
    },
    initialState
);

export default loading;