import React from 'react'
import { NavLink } from 'react-router-dom'
import s from './Header.module.css'

const Header = (props) =>{
    return (
        <header className={s.header}>
            <img src="https://2.bp.blogspot.com/-J9hheZOCTaI/WNeAKyxjo5I/AAAAAAAAJNE/lSdIsmxsMuEa8gU39LzghFb9u_IVJ4DeACLcB/s1600/ViewDocument.png" alt=""/>
            <div className={s.loginBlock}>{props.isAuth ? props.login :
            <NavLink to={'/login'}>Login</NavLink>}</div>
        </header>
    )
}
export default Header;