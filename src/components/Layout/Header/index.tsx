import React, {useState} from "react";
import Link from "next/link";
import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import classNames from "classnames";

import {accountActions} from "@redux/actions";
import {paths} from "@constants";
import useAuth from "@hooks/useAuth";
import useDarkMode from "@hooks/useDarkMode";
import DropdownMenu from "@components/Common/DropdownMenu";

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
    }

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
