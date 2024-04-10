import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import Favorite from '../Favorite/Favorite';

import { useTheme, THEME_DARK, THEME_LIGHT, THEME_NEUTRAL } from '@context/ThemeProvider';


import imgDroid from './img/droid.svg'
import imgLight from './img/lightsaber.svg'
import imgSpaceStation from './img/space-station.svg'
import { useEffect, useState } from 'react';

const Header = () => {
    const [icon,setIcon] = useState(imgSpaceStation)
    const isTheme = useTheme()

    useEffect(() =>{
        switch (isTheme.theme) {
            case THEME_LIGHT:
                setIcon(imgLight)
                break;
            case THEME_DARK:
                setIcon(imgSpaceStation)
                break;
            case THEME_NEUTRAL:
                setIcon(imgDroid)
                break;        
            default:
                setIcon(imgSpaceStation)
    }
    },[isTheme])
   
    return(
        <div className={styles.container}>
            <img className={styles.logo} src={icon} alt='theme logo'/>
            <ul className={styles.list__container}>
                <li>
                    <NavLink to='/'> Home </NavLink>
                </li>
                <li>
                    <NavLink to='/people/?page=1'> People </NavLink>
                </li>
                <li>
                    <NavLink to='/search/'> Search </NavLink>
                </li>
                <li>
                    <NavLink to='/not found'> Not Found </NavLink>
                </li>
                <li>
                    <NavLink to='/fale'> Fale </NavLink>
                </li>
                <Favorite/>
            </ul>        
        </div>
)}

export default Header;