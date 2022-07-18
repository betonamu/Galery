import {all} from "redux-saga/effects";

import home from "./home";
import product from "./product";
import account from "./account";

const sagas = [
    ...home,
    ...product,
    ...account,
];

function* rootSaga() {
    yield all(sagas);
}

export default rootSaga;