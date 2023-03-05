import React, { createContext, useState } from "react";
export const CustomContext = createContext();

const CustomContextProvider = (props) => {
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
        <CustomContext.Provider value={{ ...state, updateContext }}>
            {props.children}
        </CustomContext.Provider>
    );
};
export default CustomContextProvider;
