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
                    <a className="nav-link" href="#">Features</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Pricing</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                       aria-expanded="false">
                        Dropdown link
                    </a>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </li>
                <DropdownMenu dropdownName={'asdasd'} dropdownItems={dropdownItems.account}/>
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