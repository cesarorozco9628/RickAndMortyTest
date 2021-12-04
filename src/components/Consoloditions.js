import React from 'react';
import Navigation from './Navigation';

export const Consoloditions = () => {
    return(
        <>
            <Navigation/>
            <div className='m-top container'>
                <div className='center-view'>
                    <h4>Total de ventas por ciudad</h4> 
                </div>
                <div className='table-head'>
                    <h6>Ciudad</h6>
                    <h6>Valor Total Ventas</h6>
                </div>
            </div>
        </>
    );
}