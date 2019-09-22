import React from "react";

const Hamburger = props => {
    return (
        <>
            <input
                type="checkbox"
                className="toggler"
                style={{ ...props.checkboxStyles }}
            />
            <div className="hamburger" style={{ ...props.hamburgerStyles }}>
                <div style={{ ...props.hamburgerLinesStyles }}></div>
            </div>
        </>
    );
};

export default Hamburger;
