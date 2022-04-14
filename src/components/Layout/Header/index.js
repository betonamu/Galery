import React, {useState} from "react";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";

import useAuth from "@hooks/useAuth";
import {accountActions} from "@redux/actions";

import {paths} from "@constants";

import styles from "./Header.module.scss";
import classNames from "classnames";


const Header = () => {
    const dispatch = useDispatch();
    const {push} = useRouter();
    const {user, isAuthenticated} = useAuth();

    const [isOpen, setIsOpen] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    const onLogout = () => {
        dispatch(accountActions.logout({
            onCompleted: () => {
                push({path: paths.home}).then();
            }
        }))
    }

    const switchTheme = (e) => {
        let nextTheme = '';
        if (e.target?.checked) {
            nextTheme = 'dark';
            setIsDarkMode(true);
        } else {
            nextTheme = 'light';
            setIsDarkMode(false);
        }
        document.documentElement.setAttribute('data-theme', nextTheme);
        return nextTheme;
    }

    return (
        <div className={styles.header}>
            <div className="container my-2">
                <div className="d-flex justify-content-between align-items-center">
                    <div/>
                    <label className="switch">
                        <input type="checkbox" onChange={(e) => switchTheme(e)}/>
                        <span className="slider round"/>
                    </label>
                </div>
            </div>
            <nav className={classNames("navbar navbar-expand-lg position-relative", {
                "navbar-light bg-light": !isDarkMode,
                "navbar-dark bg-dark": isDarkMode
            })}>
                <div className="container">
                    <Link href={paths.home}><a className="navbar-brand">GALLERY WEBSITE</a></Link>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href={paths.home}>HOME</a>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown cursor-pointer">
                                    <a className="nav-link dropdown-toggle">
                                        Studio Category
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <div className="dropdown cursor-pointer">
                                    <a className="nav-link dropdown-toggle">
                                        Collection Management
                                    </a>
                                    <ul className="dropdown-menu">
                                        <Link href={paths.createCollection}>
                                            <li><a className="dropdown-item" href="#">Create Collection</a></li>
                                        </Link>
                                        <Link href={paths.collectionList}>
                                            <li><a className="dropdown-item" href="#">List Collections</a></li>
                                        </Link>
                                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {!isAuthenticated ?
                            <Link href={paths.signIn}>
                                <a className="nav-link" href="#">Sign In</a>
                            </Link>
                            :
                            <li className="nav-link">
                                <div className="dropdown cursor-pointer">
                                    <a className="nav-link dropdown-toggle">
                                        {`${user.firstName} ${user.lastName}`}
                                    </a>
                                    <ul className="dropdown-menu">
                                        <li><a className="dropdown-item" href="#">Action</a></li>
                                        <li><a className="dropdown-item" href="#">Another action</a></li>
                                        <li><a className="dropdown-item" onClick={onLogout}>Logout</a></li>
                                    </ul>
                                </div>
                            </li>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Header;
