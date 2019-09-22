import React from "react";

const MenuContainer = props => {
    return (
        <div className="menu-container">
            <div>
                <div>{props.children}</div>
            </div>
        </div>
    );
};

export default MenuContainer;
