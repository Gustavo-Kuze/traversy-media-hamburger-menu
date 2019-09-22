import React from "react";

const MenuItem = props => {
    return (
        <li style={{ ...props.menuItemStyles }}>
            <a
                href={props.href}
                className="menu-item-link"
                onClick={props.onClick}
                style={{ ...props.menuItemLinkStyles }}
            >
                {props.children}
            </a>
        </li>
    );
};

export default MenuItem;
