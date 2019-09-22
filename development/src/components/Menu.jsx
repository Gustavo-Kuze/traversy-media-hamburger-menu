import "./style/main.css";
import "./style/menu.css";
import React from "react";
import MenuWrap from "./MenuWrap";
import Hamburger from "./Hamburger";
import MenuContainer from "./MenuContainer";

const Menu = ({
    checkboxStyles,
    hamburgerLinesStyles,
    isMenuOpen,
    onHamburgerClick,
    overlayStyles,
    menuContainerStyles,
    children
}) => {
    return (
        <MenuWrap>
            <Hamburger
                checkboxStyles={checkboxStyles}
                hamburgerLinesStyles={hamburgerLinesStyles}
                isOpen={isMenuOpen}
                onClick={onHamburgerClick}
            />
            <MenuContainer
                overlayStyles={overlayStyles}
                menuContainerStyles={menuContainerStyles}
            >
                {children}
            </MenuContainer>
        </MenuWrap>
    );
};

export default Menu;
