import React from 'react';
import logo from './img/LOGO.png';

function Header(){
    return ( 
    <header id="header" className="fixed-top header-transparent">
        <div className="container-fluid">

        <div className="row justify-column-center">
            <div className="col-xl-11 d-flex align-items-center">
            <a href="./Home" class="logo"><img src={logo} class="img-fluid" /></a>
            <div className="logo mr-auto d-none d-md-block" style={{marginTop: '8px'}}><h2>WEB AND DESIGN</h2></div>
            <div className="logo mr-auto d-md-none"><h5>WEB AND DESIGN</h5></div>
            
            
            <nav className="nav-menu d-none d-lg-block">
                <ul>
                <li><a href="./">HOME</a></li>
                <li><a href="./events">EVENTS</a></li>
                <li><a href="./showcase">SHOWCASE</a></li>
                
                </ul>
            </nav>
            </div>
        </div>

        </div>
    </header>
    )
};
export default Header;