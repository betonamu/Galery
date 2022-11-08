import React from "react";
import Link from "next/link";
import {paths} from "@constants";
import DropdownMenu from "@components/Common/DropdownMenu";
import useAuth from "@hooks/useAuth";

const HamburgerMenu = ({dropdownItems, insideRef}: any) => {
    const {user, isAuthenticated} = useAuth();

    return (
        <div className="collapse navbar-collapse show" ref={insideRef} id="navbarNavDropdown">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About me</a>
                </li>
                {!isAuthenticated ?
                    <Link href={paths.signIn}>
                        <a className="nav-link px-0" href="#">Sign In</a>
                    </Link>
                    :
                    <DropdownMenu
                        dropdownName={`${user.firstName} ${user.lastName}`}
                        dropdownItems={dropdownItems.account}/>
                }
            </ul>
        </div>
    )
}

export default HamburgerMenu;