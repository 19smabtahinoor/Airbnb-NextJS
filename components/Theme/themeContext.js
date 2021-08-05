import React from 'react'

const getInitialTheme = () => {
    if (typeof window != 'undefined' && window.localStorage) {
        const storedPreference = window.localStorage.getItem("current-theme")
        if (typeof storedPreference === 'string'){
            return storedPreference
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            return 'dark'
        }
    }
    return 'light'
}


export const ThemeProvider = ({ initialTheme, children }) => {
    const [theme, setTheme] = React.useState(getInitialTheme);

    const checkTheme = (existing) => {
        const root = window.document.documentElement;
        const isDark = existing === 'dark';

        root.classList.remove(isDark ? 'light' : 'dark');
        root.classList.add(existing);

        localStorage.setItem('current-theme', existing);
    };

    if (initialTheme) {
        checkTheme(initialTheme);
    }

    React.useEffect(() => {
        checkTheme(theme);
    }, [theme]);

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
export const ThemeContext = React.createContext();

