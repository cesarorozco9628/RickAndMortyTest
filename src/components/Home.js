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
                    <h1>welcome and have fun {user} !!</h1>
                    <p>
                        test demonstrating the handling of the requested technologies with the consumption of the rick and morty api in a responsive SPA
                    </p>
                    <div className='img-home'></div>
                </div>
            </section>
        </>
    );
}

export default Home;