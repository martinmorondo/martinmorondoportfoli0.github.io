import React, { useState } from 'react';
import "./style.css";
import { VscGrabber, VscClose } from "react-icons/vsc";
import { Link } from 'react-router-dom';
import { LOGOTEXT, socialProfiles
 } from '../../contentOption';
import Toggle from '../themetoggle/toggle';

const header = () => {

    const [isActive, setActive] = useState('false');

    const handleToggle = () => {
        setActive(!isActive);
        document.body.classList.toggle("ovhidden");
    };

    return (
        <>
            <header className='fixed-top site-header'>
                <div className='d-flex align-items-center justify-content-between'>
                    <Link className='navbar-brand nav-ac' to="/">
                        {LOGOTEXT}
                    </Link>
                    <div className='d-flex align-items-center'>
                        <Toggle />
                        <button className='menu-button nav-ac' onClick={handleToggle}>
                            {!isActive ? <VscClose /> : <VscGrabber />}
                        </button>
                    </div>
                </div>

                <div className={`site-navigation ${!isActive ? 'menu-opend' : ""}`}>
                <div className='bg-menu h-100'>
                    <div className='menu-wrapper'>
                        <div className='menu-container p-3'>
                            <ul className='the-menu'>
                                <li className='menu-item'>
                                    <Link onClick={handleToggle} to="/" className='my-3'>Home</Link>
                                </li>

                                <li className='menu-item'>
                                    <Link onClick={handleToggle} to="/portfolio" className='my-3'>Portfolio</Link>
                                </li>

                                <li className='menu-item'>
                                    <Link onClick={handleToggle} to="/about" className='my-3'>About</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='menu-footer d-flex flex-column flex-md-row justify-content-between align-items-md-center position-absolute w-100 p-3'>
                    <div className='d-flex'>
                        <a href={socialProfiles.linkedin} target='_blank'>Linkedin</a>
                        <a href={socialProfiles.github}target='_blank'>GitHub</a>
                        <a href={socialProfiles.twitter} target='_blank'>Twitter</a>
                    </div>
                    <p className='copyright m-0'>🖥️ {LOGOTEXT}</p>
                </div>
                </div>
            </header>

            <div className='br-top'></div>
            <div className='br-bottom'></div>
            <div className='br-left'></div>
            <div className='br-right'></div>
     
        </>
    );
}

export default header;
