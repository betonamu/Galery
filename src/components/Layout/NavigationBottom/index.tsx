import React, {useState} from "react";
import classnames from "classnames";
import {useRouter} from "next/router";

import Home from "@assets/icons/home.svg";
import HomeActive from "@assets/icons/home-active.svg";
import Profile from "@assets/icons/profile.svg";

import ProfileActive from "@assets/icons/profile-active.svg";
import {paths} from "@constants";
import useAuth from "@hooks/useAuth";

import styles from "./NavigationBottom.module.scss";

export const navigationTab = {
    HOME: 'home',
    CATEGORIES: 'categories',
    ORDER: 'order',
    PROFILE: 'profile',
}

const NavigationBottom = () => {
    const {user, isAuthenticated} = useAuth();
    const {push, pathname} = useRouter();
    const [tabActive, setTabActive] = useState(navigationTab.HOME);

    const navigationItems = [
        {
            label: "Home",
            value: navigationTab.HOME,
            icon: <Home/>,
            iconActive: <HomeActive/>,
            url: paths.home,
            activeUrl: [paths.home],
            requiredLogin: false,
        },
        {
            label: "Home",
            value: navigationTab.CATEGORIES,
            icon: <Home/>,
            iconActive: <HomeActive/>,
            url: paths.home,
            requiredLogin: false,
        },
        {
            label: "Home",
            value: navigationTab.ORDER,
            icon: <Home/>,
            iconActive: <HomeActive/>,
            url: paths.home,
            requiredLogin: false,
        },
        {
            label: "Profile",
            value: navigationTab.PROFILE,
            icon: <Profile/>,
            iconActive: <ProfileActive/>,
            url: paths.profile,
            requiredLogin: true,
        }
    ]

    const navigation = (tabItem: any) => {
        if (!isAuthenticated && tabItem.requiredLogin) {
            push(paths.signIn).then();
        } else {
           push(tabItem.url).then();
        }
         setTabActive(tabItem.value);
    }

    return (
        <div className={styles.navigationBottomWrapper}>
            {navigationItems.map((item, index) => {
                const isActive = (!tabActive && item?.activeUrl?.includes(pathname))
                    || (item.value && item.value === tabActive);

                return (
                    <div key={index} className={styles.navigationItem} onClick={() => navigation(item)}>
                        <div className={styles.iconWrapper}>
                                <span className={classnames({
                                    [styles.iconActive]: isActive
                                })}>{isActive ? item.iconActive : item.icon}</span>
                        </div>
                        <p className={classnames(styles.navigationTabName, {
                            [styles.active]: isActive
                        })}>{item.label}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default NavigationBottom;