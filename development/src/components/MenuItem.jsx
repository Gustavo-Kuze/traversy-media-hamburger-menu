import React from "react";

const MenuItem = props => {
    return (
        <li style={{ ...props.menuItemStyles }}>
            {props.children ? (
                props.children
            ) : (
                <a
                    href={props.href}
                    className="menu-item-link"
                    onClick={props.onClick}
                    style={{ ...props.menuItemLinkStyles }}
                >
                    {props.text}
                </a>
            )}
        </li>
    );
};

export default MenuItem;
