import React from "react";

const MenuContainer = props => {
    return (
        <div className="menu-container">
            <div style={{...props.overlayStyles}}>
                <div>
                    <ul>{props.children}</ul>
                </div>
            </div>
        </div>
    );
};

export default MenuContainer;
