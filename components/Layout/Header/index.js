import React, {useState} from "react";

import styles from "./Header.module.scss";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.header}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
                <div className="container">
                    <a className="navbar-brand" href="/">XIUREN GALERY</a>
                    <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" href="#">Trang chủ</a>
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
                        </ul>
                    </div>
                    <div>
                        <a className="nav-link" href="#">Đăng nhập</a>
                    </div>
                </div>
            </nav>
        </div>
    )
};

export default Header;
