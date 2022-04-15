import React, {useEffect, useLayoutEffect, useState} from "react";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";

import useAuth from "@hooks/useAuth";
import {accountActions} from "@redux/actions";

import {paths, storageKeys} from "@constants";

import styles from "./Header.module.scss";
import classNames from "classnames";
import {getStringData, setStringData} from "@utils/localStorage";
import DropdownMenu from "@components/Common/DropdownMenu";
import useDarkMode from "@hooks/useDarkMode";


const Header = () => {
    const dispatch = useDispatch();
    const {push} = useRouter();
    const {user, isAuthenticated} = useAuth();
    const {switchTheme, isDarkMode} = useDarkMode();

    const [isOpen, setIsOpen] = useState(false);

    const onLogout = () => {
        dispatch(accountActions.logout({
            onCompleted: () => {
                push({path: paths.home}).then();
            }
        }))
    }

    return (
        <div className={styles.header}>
            <div className="container my-2">
                <div className="d-flex justify-content-between align-items-center">
                    <div/>
                    <label className="switch">
                        <input type="checkbox" onChange={(e) => switchTheme(e)} checked={isDarkMode}/>
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
                                <DropdownMenu dropdownName={"Studio Category"}
                                              dropdownItems={[
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
                                              ]}/>
                            </li>
                            <li className="nav-item">
                                <DropdownMenu dropdownName={"Collection Management"}
                                              dropdownItems={[
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
                                              ]}/>
                            </li>
                        </ul>
                    </div>
                    <div>
                        {!isAuthenticated ?
                            <Link href={paths.signIn}>
                                <a className="nav-link" href="#">Sign In</a>
                            </Link>
                            :
                            <DropdownMenu dropdownName={`${user.firstName} ${user.lastName}`}
                                          dropdownItems={[
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
                                          ]}/>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Header;
