import React from 'react'
import { BsToggleOff } from 'react-icons/bs';
import { BsToggleOn } from 'react-icons/bs';
import { ThemeContext } from './themeContext';

const ToggleTheme = () => {

    const {theme,setTheme} = React.useContext(ThemeContext)
    return (
        <>
            {theme === 'dark' ? 
                <BsToggleOn className="text-3xl dark:text-gray-400" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} /> : <BsToggleOff className="text-3xl" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} />}
            
        </>
    )
}

export default ToggleTheme
