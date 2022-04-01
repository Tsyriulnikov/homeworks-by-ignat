import React, {useState} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {PATH} from './Pages'
import s from './Header.module.css'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai';


function Header() {

    // const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    // const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div className={s.container}>


            <div className={s.navbar}>
                <Link to='#' className={s.menuBars}>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
            </div>


            <nav className={sidebar ? s.navMenuActive : s.navMenu}>
                <ul className={s.navMenuItems} onClick={showSidebar}>
                    <li className={s.navbarToggle}>
                       <Link to='#' className={s.menuBars}>
                            <AiIcons.AiOutlineClose/>
                        </Link>
                    </li>
                    <NavLink className={s.nav} to={'/'}>Pre_junior</NavLink>
                    <NavLink className={s.nav} to={PATH.JUNIOR}>Junior</NavLink>
                    <NavLink className={s.nav} to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
                </ul>
            </nav>

        </div>
    )
}

export default Header
