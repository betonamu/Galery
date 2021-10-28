import React from "react";

import styles from "./Container.module.scss";

const Container = ({ children }) => {
    return (
        <div className={styles.containerWrapper}>
            <div className="container">
                {children}
            </div>
        </div>
    )
}
export default Container;