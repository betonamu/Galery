import React, {MouseEventHandler} from "react";
import Link from "next/link";

type DropdownMenuProps = {
    dropdownName: string;
    dropdownItems: Array<{ url: string, name: string, onClick?: MouseEventHandler }>;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({dropdownName, dropdownItems = []}) => {

    return (
        <div className="dropdown cursor-pointer">
            <a className="nav-link dropdown-toggle">
                {dropdownName}
            </a>
            <ul className="dropdown-menu">
                {dropdownItems.map((item, index) => (
                    <Link href={item?.url} key={index}>
                        <li><a className="dropdown-item" href="#" onClick={item?.onClick}>{item?.name}</a></li>
                    </Link>
                ))}
            </ul>
        </div>
    )
}

export default DropdownMenu;