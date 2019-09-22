import "./style/main.css";
import "./style/menu.css";
import React, { useState } from "react";
import MenuWrap from "./MenuWrap";
import Hamburger from "./Hamburger";
import MenuContainer from "./MenuContainer";
import MenuItem from "./MenuItem";

const Menu = props => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <MenuWrap>
            <Hamburger
                checkboxStyles={props.checkboxStyles}
                hamburgerLinesStyles={props.hamburgerLinesStyles}
                isOpen={isOpen}
                onClick={() => setIsOpen(!isOpen)}
            />
            <MenuContainer
                overlayStyles={props.overlayStyles}
                menuContainerStyles={props.menuContainerStyles}
            >
                <MenuItem
                    href="#"
                    menuItemStyles={props.menuItemStyles}
                    menuItemLinkStyles={props.menuItemLinkStyles}
                    text="Home"
                />
            </MenuContainer>
        </MenuWrap>
    );
};

export default Menu;
