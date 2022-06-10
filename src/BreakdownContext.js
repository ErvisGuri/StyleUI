import React, { createContext, useContext, useState } from 'react';

const BreakdownContext = createContext();

export function BreakdownProvider({ children }) {
    const [input, setInput] = useState('')
    const [breakdowns, setBreakdown] = useState([]);


    return (
        <BreakdownContext.Provider value={[input, setInput, breakdowns, setBreakdown]} >
            {children}
        </BreakdownContext.Provider >
    );
}

export default BreakdownContext;