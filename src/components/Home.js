import React from 'react';
import {useSelector} from 'react-redux';
import Navigation from '../components/Navigation';

const Home = () => {
    const user = useSelector(state => state.User[0].user);

    return(
        <>
            <Navigation/>
            <section>
                <div className='container text-home'>
                    <h1>Bienvenido  {user} !!</h1>
                    <p>
                        Pagina Realizado por: 
                    </p>
                    <p>
                        Esta pagina consume un API´s de una tienda geek desarrollada con las tecnoligias Java, SpringBoot en la parte del Back-End.
                        En el Front-End se utiliza el Framework React.
                    </p>
                    <div className='img-home'></div>
                </div>
            </section>
        </>
    );
}

export default Home;