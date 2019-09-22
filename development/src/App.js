import React from "react";
import Menu from "./components/Menu";
import MenuItem from "./components/MenuItem";

function App() {
    return (
        <div className="App">
            <Menu>
                <MenuItem text="Google" href="https://google.com" />
                <MenuItem text="Bing" href="https://bing.com" />
                <MenuItem text="Yahoo" href="https://yahoo.com" />
                <MenuItem
                    text="Click me"
                    href="#"
                    onClick={() => alert("You're Awesome!")}
                />
            </Menu>
        </div>
    );
}

export default App;
