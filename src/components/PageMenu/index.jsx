import { useState } from 'react';

import { MenuItems } from "./MenuItems";
import { MenuDetail } from "./MenuDetail";

import Logo from '../../assets/logo-branco.svg';

//import { Link } from 'react-scroll'

import './styles.scss';


export function PageMenu() {

    const [clicked, setClicked] = useState(false);

    function handleClickMenu() {
        setClicked(!clicked);
    }

    return (
        <div className="header-menu-container">

            <div className="logo-container">
                <h1 className="navbar-logo">
                    <img src={Logo}></img>
                </h1>
            </div>

            
            <nav className="NavBarItems">

                <div className="menu-icon" onClick={handleClickMenu}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>

                <div className="links-container">
                    <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                        {MenuItems.map((item, index) => {
                            return (
                                // <Link
                                //     activeClass="active"
                                //     to={item.title}
                                //     spy={true}
                                //     smooth={true}
                                //     offset={-80}
                                //     duration={500}
                                // >
                                <li key={index}>
                                    <a className={item.cName} href={item.url}>
                                        {item.title}
                                    </a>
                                </li>
                                //</Link>
                            )
                        })}

                    </ul>
                </div>

            </nav>
      
                        <MenuDetail />


        </div>
    );

}