import React from 'react';
import Navigation from '../components/Navigation';
export const Products = () => {
    return(
        <>
            <Navigation/>
            <div className='container m-top'>
                <form>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Nombre del Archivo</label>
                        <input class="form-control" type="file" id="formFile"/>
                    </div>
                    <button className="btn btn-primary">Cargar</button>
                </form>
            </div>
        </>
    );
}