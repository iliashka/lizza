import React from 'react'
import s from './Header.module.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <nav class="navbar navbar-light bg-light" style={{ width: '100%' }}>
            <div class="container-fluid" style={{ display: 'flex', justifyContent: 'space-between', paddingLeft: '60px', paddingRight: '60px' }}>
                <a class="navbar-brand"><h2>Террадек</h2></a>
                <li class="nav-item">
                    <a style={{color: 'black'}} class="nav-link active" aria-current="page" href="#"><NavLink style={{color: 'black'}} to='/Calculator'><h5>Калькулятор</h5></NavLink></a>
                </li>
            </div>
        </nav>
    )
}

export default Header