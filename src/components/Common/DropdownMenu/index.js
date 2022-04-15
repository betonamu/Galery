import React from "react";
import Link from "next/link";

const DropdownMenu = ({dropdownName, dropdownItems = []}) => {

    return (
        <div className="dropdown cursor-pointer">
            <a className="nav-link dropdown-toggle">
                {dropdownName}
            </a>
            <ul className="dropdown-menu">
                {dropdownItems.map(item => (
                    <Link href={item?.url}>
                        <li><a className="dropdown-item" href="#" onClick={item?.onClick}>{item?.name}</a></li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default DropdownMenu;