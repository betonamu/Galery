import { all } from 'redux-saga/effects';

import home from "./home";
import product from "./product";

const sagas = [
    ...home,
    ...product,
];

function* rootSaga() {
    yield all(sagas);
}

export default rootSaga;