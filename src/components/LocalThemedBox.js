import React from "react";
import { ThemeToggleButton } from "./ThemeToggleButton";
const LocalThemedBox = () => {
    const handleChange = (e) => {
        console.log("this will change the local styles");
    };
    return (
        <div
            style={{
                width: "200px",
                height: "200px",
                border: "2px solid green",
            }}
            id="local-themed-box"
        >
            {/* Write code below this line */}
            <p>this is local theme box</p>
            <ThemeToggleButton
                btnTxt={"this is local button"}
                handleChange={handleChange}
            />
        </div>
    );
};

export { LocalThemedBox };
