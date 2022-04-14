import React from 'react';

import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className="container">
                © {new Date().getFullYear()} - Gallery - Privacy
            </div>
        </div>
    )
}

export default Footer;