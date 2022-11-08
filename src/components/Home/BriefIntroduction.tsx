import React from "react";

import ReactIcon from "../../assets/icons/react-js-icon.svg";

import styles from "./BriefIntroduction.module.scss";

const BriefIntroduction = () => {

    return (
        <div className={styles.briefIntroduction}>
            <div>
                <h1>NGUYEN CONG QUOC</h1>
                <h2>FRONTEND DEVELOPER</h2>
            </div>
            <div className={styles.technology}>
                <h3>TECHNOLOGY</h3>

                <div className={styles.technologyContent}>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <ReactIcon/>
                            <h2> React JS</h2>
                            <h4>Have 2 years experience with ReactJS</h4>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <ReactIcon/>
                            <h2> React JS</h2>
                            <h4>Have 2 years experience with ReactJS</h4>
                        </div>
                    </div>
                    <div className={styles.card}>
                        <div className={styles.cardBody}>
                            <ReactIcon/>
                            <h2> React JS</h2>
                            <h4>Have 2 years experience with ReactJS</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BriefIntroduction;