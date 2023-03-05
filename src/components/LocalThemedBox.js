import React, { useContext } from "react";
import { ThemeContext } from "./ThemeProvider";

const LocalThemedBox = () => {
    const themeContext = useContext(ThemeContext);
    return (
        <div
            className={themeContext.theme === "light" ? "bg-light" : "bg-dark"}
            style={{
                width: "200px",
                height: "200px",
                border: "2px solid green",
            }}
            id="local-themed-box"
        >
            {/* Write code below this line */}
        </div>
    );
};

export { LocalThemedBox };
