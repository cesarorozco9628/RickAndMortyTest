import React from 'react';
import Navigation from './Navigation';

export const Client = () => {
    return(
        <>
            <Navigation/>
            <form className='m-top'>
                <div className='m-top grid-client'>
                    <div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Cedula</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" / >
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Nombre Completo</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" / >
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Dirección</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" / >
                            </div>
                        </div>
                    </div>
                    <div style={{paddingLeft:'1rem'}}>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Telefono</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" / >
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Correo Electronico</label>
                            <div class="col-sm-10">
                                <input type="text" class="form-control" / >
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid-buttons'>
                    <button className="btn btn-primary">Consultar</button>
                    <button className="btn btn-primary">Crear</button>
                    <button className="btn btn-primary">Actualizar</button>
                    <button className="btn btn-primary">Borrar</button>
                </div>
            </form>
        </>
    );
}