import React from "react";

const MenuItem = props => {
    return (
        <li>
            <a href={props.href} className="menu-item-link">
                {props.children}
            </a>
        </li>
    );
};

export default MenuItem;
