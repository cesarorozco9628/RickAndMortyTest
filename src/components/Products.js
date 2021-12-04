import React from 'react';
import Navigation from '../components/Navigation';
import { useForm} from 'react-hook-form';
export const Products = () => {
    const {register, handleSubmit} = useForm();

    const HandleFile = (data) => {
        debugger;
        console.log(data);
    }

    return(
        <>
            <Navigation/>
            <div className='container m-top'>
                <form onSubmit={handleSubmit(HandleFile)}>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Nombre del Archivo</label>
                        <input class="form-control" name='file' ref={register} type="file"accept=".csv" id="formFile"/>
                    </div>
                    <button className="btn btn-primary">Cargar</button>
                </form>
            </div>
        </>
    );
}