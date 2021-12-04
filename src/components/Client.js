import React , {useState} from 'react';
import Navigation from './Navigation';
import {useForm} from 'react-hook-form';


export const Client = () => {
    const  [option, setOption] = useState('');
    const {register, handleSubmit} = useForm();

    const HandleClient = (data) => {
        console.log('tes', option, data);
        debugger;
    }

    return(
        <>
            <Navigation/>
            <form onSubmit={handleSubmit(HandleClient)} className='m-top'>
                <div className='m-top grid-client'>
                    <div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Cedula</label>
                            <div class="col-sm-10">
                                <input type="text" name='cedula' ref={ register} class="form-control" / >
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Nombre Completo</label>
                            <div class="col-sm-10">
                                <input type="text" name='name' ref={register} class="form-control" / >
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Dirección</label>
                            <div class="col-sm-10">
                                <input type="text" name='address' ref={register}  class="form-control" / >
                            </div>
                        </div>
                    </div>
                    <div style={{paddingLeft:'1rem'}}>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Telefono</label>
                            <div class="col-sm-10">
                                <input type="text" name='telephone' ref={register}  class="form-control" / >
                            </div>
                        </div>
                        <div class="mb-3 row">
                            <label for="inputPassword" class="col-sm-2 col-form-label">Correo Electronico</label>
                            <div class="col-sm-10">
                                <input type="text" name='email' ref={register}  class="form-control" / >
                            </div>
                        </div>
                    </div>
                </div>
                <div className='grid-buttons'>
                    <button onClick={() => setOption('GET')} className="btn btn-primary">Consultar</button>
                    <button onClick={() => setOption('POST')} className="btn btn-primary">Crear</button>
                    <button onClick={() => setOption('PUT')} className="btn btn-primary">Actualizar</button>
                    <button onClick={() => setOption('DELETE    ')} className="btn btn-primary">Borrar</button>
                </div>
            </form>
        </>
    );
}