import React from 'react';
import classNames from "classnames";

import FacebookIcon from "@assets/icons/facebook.svg";
import GithubIcon from "@assets/icons/github.svg";

import styles from "./Footer.module.scss";

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
                <div className="d-flex align-items-center justify-content-center">
                    Phone:&nbsp;<a href='tel:0981843732' className='text-decoration-none'>0981843732</a>
                </div>
                <div className="d-flex align-items-center justify-content-center mb-2">
                    Email:&nbsp;<a className='text-decoration-none' href='mailto:nguyencongquoc0904@gmail.com'>Nguyencongquoc0904@gmail.com</a>
                </div>
                <div className={styles.copyRight}>
                    © {new Date().getFullYear()} - Design & Code by Nguyen Cong Quoc
                </div>
            </div>
        </div>
    )
}

export default Footer;