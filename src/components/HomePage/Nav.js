import React from 'react'
import './navbar.css'
import { Avatar } from '@material-ui/core'
import logo from './Group 161.png'
const Nav = () => {
    return (
        <div>
            <nav className="na">
                <ul className="h" style={{ backgroundImage: `url('${logo}')`, backgroundRepeat: "no-repeat" }}></ul>
                <input className="nav-input" type="text" placeholder="What do you want to learn today?"></input>
                <ul className="pt"><a href="/">Home</a></ul>
                <ul className="tt"><a href="/">My Classes</a></ul>
                <ul className="avatar">
                    <Avatar src="https://www.kindpng.com/picc/m/780-7804962_cartoon-avatar-png-image-transparent-avatar-user-image.png" /></ul>
            </nav>
        </div>
    )
}

export default Nav;
