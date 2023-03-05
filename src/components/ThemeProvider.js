import React, { useState } from "react";

const ThemeContext = React.createContext();
const ThemeProvider = (props) => {
    const [state, setState] = useState({
        theme: "light",
    });
    const updateContext = (key, value) => {
        setState({
            ...state,
            [key]: value,
        });
    };
    return (
        <ThemeContext.Provider value={{ ...state, updateContext }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export { ThemeProvider, ThemeContext };
