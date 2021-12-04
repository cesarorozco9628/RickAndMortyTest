import React from 'react';
import Navigation from './Navigation';

export const Reports = () => {

    return(
        <>
            <Navigation/>
            <div className='container m-top'>
                <div className='center-view'>
                    <button className="btn btn-primary">Listado de CLientes</button>
                    <button className="btn btn-primary">Ventas por Clientes</button>
                </div>
            </div>
        </>
    );
}