import React, { useState, createContext } from 'react';

export const BreakdownContext = React.createContext()

export const BreakdownProvider = (props) => {
    const [breakdown, setBreakdown] = useState([]);

    return (
        <BreakdownContext.Provider value={'Hey this works'} >
            {props.children}
        </BreakdownContext.Provider>
    );
}
