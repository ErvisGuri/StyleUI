import React, { createContext, useContext, useState } from 'react';

const BreakdownContext = createContext();

export function BreakdownProvider({ children }) {
    const [input, setInput] = useState('Hello')

    return (
        <BreakdownContext.Provider value={{ input, setInput }} >
            {children}
        </BreakdownContext.Provider >
    );
}

export default BreakdownContext;