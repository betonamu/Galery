import { combineReducers } from "redux";

import home from "./home";
import product from "./product";
import loading from "./loading";

const rootReducer = combineReducers({
    loading,
    home,
    product,
});

export default rootReducer;