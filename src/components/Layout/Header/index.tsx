import React, {useState} from "react";
import Link from "next/link";
import classNames from "classnames";
import {useRouter} from "next/router";
import {useDispatch} from "react-redux";

import {paths} from "@constants";
import useAuth from "@hooks/useAuth";
import useDarkMode from "@hooks/useDarkMode";
import {accountActions} from "@redux/actions";
import {Desktop, Mobile} from "@components/Common/Media";
import HamburgerMenu from "./HamburgerMenu";
import DropdownMenu from "@components/Common/DropdownMenu";

import HamburgerIcon from "@assets/icons/hamburger-cat-menu.svg";

import styles from "./Header.module.scss";

const Header = () => {
    const dispatch = useDispatch();
    const {push} = useRouter();
    const {user, isAuthenticated} = useAuth();
    const {onSwitchTheme, isDarkMode} = useDarkMode();

    const [isOpen, setIsOpen] = useState<boolean>(false);

    const onLogout = () => {
        dispatch(accountActions.logout({
            onCompleted: () => {
                push(paths.home).then();
            }
        }))
    };

    const dropdownItems = {
        studioCategories: [
            {
                name: 'Action',
                url: "",
            },
            {
                name: 'Another action',
                url: "",
            },
            {
                name: 'Something else here',
                url: "",
            },
        ],
        collections: [
            {
                name: 'Create Collection',
                url: paths.createCollection,
            },
            {
                name: 'List Collections',
                url: paths.collectionList,
            },
            {
                name: 'Something else here',
                url: "",
            },
        ],
        account: [
            {
                name: 'Action',
                url: "",
            },
            {
                name: 'Another action',
                url: "",
            },
            {
                name: 'Logout',
                url: "",
                onClick: onLogout,
            },
        ]
    };

    return (
        <div className={styles.header}>
            <div className="container my-2">
                <div className="d-flex justify-content-between align-items-center">
                    <div/>
                    <label className="switch">
                        <input type="checkbox" onChange={(e) => onSwitchTheme(e.target.checked)} checked={isDarkMode}/>
                        <span className="slider round"/>
                    </label>
                </div>
            </div>
            <nav className={classNames("navbar navbar-expand-lg position-relative", {
                "navbar-light bg-light": !isDarkMode,
                "navbar-dark bg-dark": isDarkMode,
            })}>
                <div className="container">
                    <Desktop>
                        <Link href={paths.home}><a className="navbar-brand">MY PROFILE</a></Link>
                    </Desktop>
                    <Mobile>
                        <Link href={paths.home}>
                            <a className="navbar-brand d-flex align-items-center">
                                <HamburgerIcon
                                    stroke={isDarkMode ? "white" : ''}
                                    fill={isDarkMode ? "white" : ''}
                                    className="me-2"
                                    onClick={() => setIsOpen(!isOpen)}/>
                                MY PROFILE
                            </a></Link>
                    </Mobile>
                    {isOpen && <HamburgerMenu dropdownItems={dropdownItems}/>}
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href={paths.home}>HOME</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" href={paths.home}>ABOUT ME</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {!isOpen ?
                            !isAuthenticated ?
                                <Link href={paths.signIn}>
                                    <a className="nav-link px-0" href="#">Sign In</a>
                                </Link>
                                :
                                <DropdownMenu
                                    dropdownName={`${user.firstName} ${user.lastName}`}
                                    dropdownItems={dropdownItems.account}/>
                            :
                            <></>}
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Header;
