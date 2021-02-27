import React from 'react'
import s from './Navbar.module.css'
import {NavLink} from 'react-router-dom'
import Friends from './Friends/Friends'

const Navbar = (props) =>{
    return (
        <div className={s.navbar}>
            <ul>
                <li ><NavLink to="/profile" className = {s.navbarItem} activeClassName={s.active}>Profile</NavLink></li>
                <li ><NavLink to="/news" className = {s.navbarItem} activeClassName={s.active}>News</NavLink></li>
                <li ><NavLink to="/dialogs" className = {s.navbarItem} activeClassName={s.active}>Messages</NavLink></li>
                <li ><NavLink to="/music" className = {s.navbarItem} activeClassName={s.active}>Music</NavLink></li>
                <li ><NavLink to="/settings" className = {s.navbarItem} activeClassName={s.active}>Settings</NavLink></li>
            </ul>
            <Friends dialogData={props.dialogData}/>
        </div>
    )
}

export default Navbar;