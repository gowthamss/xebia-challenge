import React from "react";
import "./header.styles.scss";

import { Link } from "react-router-dom";

const Header = () => (
    <div className="header">
        <nav className="nav">
            <div className="logo">H Blogs</div>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/" className="nav-link">
                        Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/blogs" className="nav-link">
                        Blogs
                    </Link>
                </li>
            </ul>
        </nav>
    </div>
);

export default Header;
