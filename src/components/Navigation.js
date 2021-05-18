import React from 'react';
import {useHistory} from 'react-router-dom';

const Navigation = () => {
    const history = useHistory();
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
            <a className='logo' onClick={() => history.push('/')}>Rick and Morty</a>
            <div id="toggle" onClick={showMenu}>
            </div>
            <div id='navbar'>
                <ul>
                    <li onClick={() => history.push(`/`)}><a>Home</a></li>
                    <li onClick={() => history.push(`/characters`)}><a>Characters</a></li>
                    <li onClick={() => history.push(`/episodes`)}><a>Episodes</a></li>
                </ul>
            </div>
        </nav>
    );
}


export default Navigation;