import React from 'react';
import {NavLink} from 'react-router-dom';

const Navigation = () => {
    const showMenu = () => {
        const toggle = document.getElementById('toggle');
        const navbar = document.getElementById('navbar');


        document.onclick = function(e){
            if(e.target.id !== 'header' && e.target.id !== 'toggle' && e.target.id !== 'navbar'){
                toggle.classList.remove('active');
                navbar.classList.remove('active');
            }
        }


        toggle.onclick = function () {
            toggle.classList.toggle('active');
            navbar.classList.toggle('active');
        }
    }


    return(
        <nav id='header'>
            <NavLink className='logo' exact to='/'>Project</NavLink>
            <div id="toggle" onClick={showMenu}>
            </div>
            <div id='navbar'>
                <ul>
                    <li><NavLink exact to='/'>Home</NavLink></li>
                    <li><NavLink exact to='/Products'>Productos</NavLink></li>
                    <li><NavLink exact to='/Client'>Clientes</NavLink></li>
                    <li><NavLink exact to='/Sells'>Ventas</NavLink></li>
                    <li><NavLink exact to='/Reports'>Reportes</NavLink></li>
                    <li><NavLink exact to='/Consolidation'>Consolidación</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}


export default Navigation;