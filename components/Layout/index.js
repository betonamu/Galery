import React from 'react';

import Header from "./Header";
import Footer from "./Footer";

import styles from "./Layout.module.scss";

const Layout = ({children}) => {
    return (
        <div className={styles.mainLayout}>
            <Header/>
            <div className={styles.mainContent}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout;