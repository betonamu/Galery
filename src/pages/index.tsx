import React, {useEffect} from "react";

import Home from "@components/Home";

const HomePage = () => {
    return (
        <Home/>
    )
}

// HomePage.getInitialProps = wrapper.getInitialPageProps(store => () => {
//     store.dispatch(homeActions.getAllCollection());
// });

export default HomePage;
