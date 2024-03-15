import { createContext } from 'react'
import { useState } from 'react';

export const darkContext = createContext();

function DarkContextProvider({ children }) {

    const [mode, setMode] = useState(JSON.parse(localStorage.getItem('mode')) !== null ? JSON.parse(localStorage.getItem('mode')) : false)

    const values = {
        mode,
        setMode
    }

    return (
        <darkContext.Provider value={values}>
            {children}
        </darkContext.Provider>
    )
}

export default DarkContextProvider;