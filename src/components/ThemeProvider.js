import React, { createContext, useState } from "react";
const ThemeContext = createContext();
const ThemeProvider = (props) => {
    const [state, setState] = useState({
        globalThemeIsLight: true,
        localThemeIsLight: true,
    });
    return (
        <ThemeContext.Provider value={{ ...state, setState }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };
