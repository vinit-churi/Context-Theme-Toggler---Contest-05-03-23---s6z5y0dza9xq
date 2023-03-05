import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";
const ThemeToggleButton = ({ btnTxt, themeLevel }) => {
    const context = useContext(ThemeContext);
    const handleChange = (e) => {
        if (themeLevel === "global") {
            console.log("here we will change the global and local style");
            context.setState((state) => {
                return {
                    ...state,
                    globalThemeIsLight: !state.globalThemeIsLight,
                    localThemeIsLight: !state.globalThemeIsLight,
                };
            });
        } else {
            console.log("here we will change the local style");
            context.setState((state) => {
                return {
                    ...state,
                    localThemeIsLight: !state.localThemeIsLight,
                };
            });
        }
    };
    let currentClassName = "";
    if (themeLevel === "global") {
        // className will be given according to global state
        currentClassName = context.globalThemeIsLight
            ? "btn btn-light"
            : "btn btn-dark";
    } else {
        // className will be given according to localState
        currentClassName = context.localThemeIsLight
            ? "btn btn-light"
            : "btn btn-dark";
    }
    return (
        <button className={currentClassName} onClick={handleChange}>
            {btnTxt}
        </button>
    );
};
export { ThemeToggleButton };
