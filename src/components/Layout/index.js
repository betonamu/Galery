import React from 'react';

import Header from "./Header";
import Footer from "./Footer";

import NavigationBottom from "./NavigationBottom";
import {Mobile} from "../Common/Media";

import styles from "./Layout.module.scss";

const Layout = ({children}) => {
    return (
        <div className={styles.mainLayout}>
            <Header/>
            <div className={styles.mainContent}>
                {children}
            </div>
            <Footer/>
            <Mobile>
                <NavigationBottom/>
            </Mobile>
        </div>
    )
}

export default Layout;