import React, { useEffect, useState } from 'react';
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";
import "./toggle.css";

const Toggle = () => {

    const [theme, setTheme] = useState(localStorage.getItem("theme"));

    const themetoggle = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
    }, [theme]);
    
    return (
        <div className='nav-ac' onClick={themetoggle}>
            <WiMoonAltWaningCrescent4 />
        </div>
    );
}

export default Toggle;
