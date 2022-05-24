import {Link} from "react-router-dom";
import React, {useState} from "react";
import MenuIcon from '@mui/icons-material/Menu';
import {routesPaths} from "../routes";

import './styles.css';

export const Navigation = () => {
    const [navigationVisible, setNavigationVisible] = useState<boolean>(true)
    const handleShowMobileNav = () => {
        setNavigationVisible(!navigationVisible)
    }

    return (
        <div className='Navigation'>
            <div>
                logo
                <MenuIcon onClick={handleShowMobileNav} className='Navigation-mobile'/>
            </div>
            {navigationVisible && <div className='Navigation-links'>
                <Link className='App-link' to={'/'}>Home</Link>
                <Link className='App-link' to={`/${routesPaths.about}`}>About</Link>
                <Link className='App-link' to={'/form'}>Form</Link>
                <Link className='App-link' to={'/policy'}>Policy</Link>
            </div>}
        </div>
    )
}
