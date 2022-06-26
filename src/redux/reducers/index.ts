import { combineReducers } from "redux";

import home from "./home";
import product from "./product";
import loading from "./loading";
import account from "./account";

const rootReducer = combineReducers({
    loading,
    home,
    product,
    account,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;