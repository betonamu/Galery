import React from 'react';

import FacebookIcon from "@assets/icons/facebook.svg";
import GithubIcon from "@assets/icons/github.svg";

import styles from "./Footer.module.scss";
import classNames from "classnames";

const Footer = () => {
    return (
        <div className={styles.footerWrapper}>
            <div className="container">
                <div className="d-flex align-items-center flex-column">
                    <p className="text-uppercase">Contact me</p>
                    <div className={classNames("d-flex justify-content-center", styles.contactIcon)}>
                        <a className="me-2" target="_blank"
                           href="https://www.facebook.com/Nguyen.Cong.Quoc16/"><FacebookIcon/></a>
                        <a className="me-2" target="_blank" href="https://github.com/betonamu"><GithubIcon/></a>
                    </div>
                </div>
                <div className={styles.copyRight}>
                    © {new Date().getFullYear()} - Gallery - Design by Nguyen Cong Quoc
                </div>
            </div>
        </div>
    )
}

export default Footer;