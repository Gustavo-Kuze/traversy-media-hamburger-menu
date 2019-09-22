import React from "react";

const MenuItem = ({
    menuItemLinkStyles,
    menuItemStyles,
    onClick,
    text,
    children,
    href
}) => {
    return (
        <li style={{ ...menuItemStyles }}>
            {children ? (
                children
            ) : (
                <a
                    href={href}
                    className="menu-item-link"
                    onClick={() => typeof onClick === "function" && onClick()}
                    style={{ ...menuItemLinkStyles }}
                >
                    {text}
                </a>
            )}
        </li>
    );
};

export default MenuItem;
