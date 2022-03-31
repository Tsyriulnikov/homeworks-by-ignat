import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Pages'
import s from './Header.module.css'

function Header() {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const toggleMenu = () => setIsMenuOpen((isOpen) => !isOpen);

    return (
        <div className={s.container}>


                <button className={s.nav__icon} onClick={toggleMenu}>Toggle Menu</button>

                {isMenuOpen &&

                    <div>
                        <NavLink className={s.nav} to={'/'}>Pre_junior</NavLink>
                        <NavLink className={s.nav} to={PATH.JUNIOR}>Junior</NavLink>
                        <NavLink className={s.nav} to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
                    </div>
                }
            </div>
    )
}

export default Header
