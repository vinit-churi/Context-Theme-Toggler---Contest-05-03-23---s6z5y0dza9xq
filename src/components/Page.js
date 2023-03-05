import React, { useContext } from "react";
import { LocalThemedBox } from "./LocalThemedBox";
import { ThemeContext } from "./ThemeProvider";

const Page = () => {
    const context = useContext(ThemeContext);
    return (
        <div
            className={
                context.globalThemeIsLight
                    ? "bg-light container"
                    : "bg-dark container"
            }
            id="themed-page"
        >
            <p
                className={
                    context.globalThemeIsLight ? "txt-light" : "txt-dark"
                }
                id="themed-text-container"
            >
                lorem ipsum dolor iterit n stuff
            </p>
            <button
                className={
                    context.globalThemeIsLight
                        ? "btn btn-light"
                        : "btn btn-dark"
                }
                id="themed-button"
            >
                Themed Button
            </button>
            <LocalThemedBox />
        </div>
    );
};

export { Page };
