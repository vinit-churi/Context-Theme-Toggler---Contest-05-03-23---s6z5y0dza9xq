import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const ThemeToggleButton = () => {
    const themeContext = useContext(ThemeContext);
    const handleThemeChange = () => {
        console.log("button clicked");
        if (themeContext.theme === "light") {
            themeContext.updateContext("theme", "dark");
        } else {
            themeContext.updateContext("theme", "light");
        }
    };
    return (
        <button
            onClick={handleThemeChange}
            className={
                themeContext.theme === "light"
                    ? "btn-light btn"
                    : "btn-dark btn"
            }
            id="themed-button"
        >
            Themed Button
        </button>
    );
};
export { ThemeToggleButton };
