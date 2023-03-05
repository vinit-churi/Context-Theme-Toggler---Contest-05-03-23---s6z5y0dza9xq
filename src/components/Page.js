import React, { useContext } from "react";
import { LocalThemedBox } from "./LocalThemedBox";
import { ThemeContext } from "./ThemeProvider";
import { ThemeToggleButton } from "./ThemeToggleButton";
const Page = () => {
    const myLocalThemeContext = useContext(ThemeContext);
    return (
        <div
            className={
                myLocalThemeContext.theme === "light"
                    ? "bg-light container"
                    : "bg-dark container"
            }
            id="themed-page"
        >
            <p
                className={
                    myLocalThemeContext.theme === "light"
                        ? "txt-light"
                        : "txt-dark"
                }
                id="themed-text-container"
            >
                lorem ipsum dolor iterit n stuff
            </p>
            <ThemeToggleButton />
            <LocalThemedBox />
        </div>
    );
};

export { Page };
