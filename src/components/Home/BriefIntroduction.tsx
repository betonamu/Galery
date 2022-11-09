import React from "react";

import ReactIcon from "../../assets/icons/react-js-icon.svg";
import NextIcon from "../../assets/icons/nextjs.svg";
import JavascriptIcon from "../../assets/icons/javascript.svg"

import styles from "./BriefIntroduction.module.scss";
import {useRouter} from "next/router";

const BriefIntroduction = () => {
    const {push} = useRouter();
    const onDownloadCV = () => {
        push('https://drive.google.com/file/d/1IQ1frmF0OhTlXF4pkpHQZjY2iInXO1AA/view?usp=share_link').then();
    }

    return (
        <div className={styles.briefIntroduction}>
            <div className={styles.mainInformation}>
                <img src='/images/my-avatar.jpeg' alt=''/>
                <div>
                    <h1>NGUYEN CONG QUOC</h1>
                    <h3>FRONTEND DEVELOPER</h3>
                </div>
            </div>
            <div className={styles.technology}>
                <h3>TECHNOLOGY</h3>

                <div className={styles.technologyContent}>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <ReactIcon/>
                            <div>
                                <h2> React JS</h2>
                                <h4>Have 2 years experience with React JS</h4>
                                <p>React hooks, Redux saga</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <JavascriptIcon/>
                            <div>
                                <h2>Javascript</h2>
                                <h4>Have 2.5 years experience with Javascript </h4>
                                <p>ECMAScript 2015 (ES6)</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <NextIcon/>
                            <div>
                                <h2> Next JS</h2>
                                <h4>Have 2 years experience with Next JS</h4>
                                <p>Server side render, dynamic route</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.technology}>
                <h3>UI LIBRARY USED</h3>

                <div className={styles.technologyContent}>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <div>
                                <h2>Ant Design</h2>
                                <h4>Have 2 years experience with React JS</h4>
                                <p>React hooks, Redux saga</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <div>
                                <h2>Material UI</h2>
                                <h4>Have 2.5 years experience with Javascript </h4>
                                <p>ECMAScript 2015 (ES6)</p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <div>
                                <h2> Next JS</h2>
                                <h4>Have 2 years experience with Next JS</h4>
                                <p>Server side render, dynamic route</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.downloadMyCv}>
                <h3 className='text-center'>YOU WANNA KNOW MORE MY INFORMATION. DOWNLOAD MY CV BELOW</h3>

                <div className='d-flex justify-content-center'>
                    <a href={'https://drive.google.com/file/d/1IQ1frmF0OhTlXF4pkpHQZjY2iInXO1AA/view?usp=share_link'}
                       target='_blank'>
                        <button className={styles.downloadBtn}>
                            <span/><span/><span/><span/>
                            DOWNLOAD
                        </button>
                    </a>

                </div>
            </div>
        </div>
    );
}

export default BriefIntroduction;