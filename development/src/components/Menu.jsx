import "./style/main.css";
import "./style/menu.css";
import React from "react";
import MenuWrap from "./MenuWrap";
import Hamburger from "./Hamburger";
import MenuContainer from "./MenuContainer";
import MenuItem from "./MenuItem";

const Menu = props => {
    return (
        <MenuWrap>
            <Hamburger
                checkboxStyles={props.checkboxStyles}
                hamburgerLinesStyles={props.hamburgerLinesStyles}
            />
            <MenuContainer
                overlayStyles={props.overlayStyles}
                menuContainerStyles={props.menuContainerStyles}
            >
                <MenuItem
                    href="#"
                    menuItemStyles={props.menuItemStyles}
                    menuItemLinkStyles={props.menuItemLinkStyles}
                >
                    Home
                </MenuItem>
            </MenuContainer>
        </MenuWrap>
    );
};

export default Menu;
