import React, { useContext } from "react";
import "../styles/App.css";
import { ThemeProvider, ThemeContext } from "./ThemeProvider";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { Page } from "./Page";
const App = () => {
    return (
        <div id="main">
            <ThemeProvider>
                <Page />
                <ThemeToggleButton
                    btnTxt={"this is global button"}
                    themeLevel="global"
                />
            </ThemeProvider>
        </div>
    );
};

export default App;
