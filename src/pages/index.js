import React, {useEffect} from "react";

import Home from "../components/Home";
import {homeActions} from "@redux/actions";
import {wrapper} from "@redux/store";

const HomePage = () => {
    return (
        <Home/>
    )
}

HomePage.getInitialProps = wrapper.getInitialPageProps(store => () => {
    store.dispatch(homeActions.getAllCollection());
});

export default HomePage;
