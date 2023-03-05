import React, { useContext } from "react";
import { ThemeToggleButton } from "./ThemeToggleButton";
import { ThemeContext } from "./ThemeProvider";
const LocalThemedBox = () => {
    const context = useContext(ThemeContext);

    return (
        <div
            style={{
                width: "200px",
                height: "200px",
                border: "2px solid green",
            }}
            id="local-themed-box"
            className={context.localThemeIsLight ? "bg-light" : "bg-dark"}
        >
            {/* Write code below this line */}
            <p className={context.localThemeIsLight ? "txt-light" : "txt-dark"}>
                this is local theme box
            </p>
            <ThemeToggleButton
                btnTxt={"this is local button"}
                themeLevel="local"
            />
        </div>
    );
};

export { LocalThemedBox };
