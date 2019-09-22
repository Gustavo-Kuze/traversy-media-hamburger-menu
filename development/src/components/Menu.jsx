import "./style/main.css";
import "./style/menu.css";
import React from "react";
import MenuWrap from "./MenuWrap";
import Hamburger from "./Hamburger";
import MenuContainer from "./MenuContainer";

const Menu = () => {
    return (
        <MenuWrap>
            <Hamburger />
            <MenuContainer>
                <ul>
                    <li>
                        <a href="#">Home</a>
                    </li>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Services</a>
                    </li>
                </ul>
            </MenuContainer>
        </MenuWrap>
    );
};

export default Menu;
