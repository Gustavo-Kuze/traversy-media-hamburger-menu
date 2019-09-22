import "./style/main.css";
import "./style/menu.css";
import React from "react";
import MenuWrap from "./MenuWrap";
import Hamburger from "./Hamburger";
import MenuContainer from "./MenuContainer";

const Menu = ({
    checkboxStyles,
    hamburgerLinesStyles,
    hamburgerStyles,
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
                hamburgerStyles={hamburgerStyles}
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
