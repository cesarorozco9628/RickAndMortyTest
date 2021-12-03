import React from 'react';
import Navigation from './Navigation';

export const Sells = () => {
    return(
        <>
            <Navigation/>
            <div className='m-top grid-x'>
                <div>
                    <form class="row g-3">
                        <div class="col-auto d-flex">
                            <label  className="">Password</label>
                            <input type="text" class="form-control" />
                        </div>
                        <div class="col-auto">
                            <button type="submit" class="btn btn-primary mb-3">Consultar</button>
                        </div>
                    </form>
                </div>
                <div className='d-flex'>
                    <div class="col-6 d-flex">
                        <label  className="">Cliente</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="col-6 d-flex">
                        <label  className="">Consec.</label>
                        <input type="text" class="form-control" />
                    </div>
                </div>
            </div>
            <div className='grid-xx'>
                <div>
                    <p>Cod.Product</p>
                    <div class="d-flex pe-2">
                        <input type="text" class="form-control" />
                        <button className="btn btn-primary">Consultar</button>
                    </div>
                    <div class="d-flex pe-2">
                        <input type="text" class="form-control" />
                        <button className="btn btn-primary">Consultar</button>
                    </div>
                    <div class=" d-flex pe-2">
                        <input type="text" class="form-control" />
                        <button className="btn btn-primary">Consultar</button>
                    </div>
                </div>
                <div>
                    <p>Nombre Producto</p>
                    <div class="pe-2">
                        <input type="text" class="form-control" />
                    </div>
                    <div class="pe-2">
                        <input type="text" class="form-control" />
                    </div>
                    <div class="pe-2">
                        <input type="text" class="form-control" />
                    </div>
                </div>
                <div>
                    <p>Cant.</p>
                    <div class="pe-2">
                        <input type="text" class="form-control" />
                    </div>
                    <div class="pe-2">
                        <input type="text" class="form-control" />
                    </div>
                    <div class="pe-2">
                        <input type="text" class="form-control" />
                    </div>
                </div>
                <div>
                    <p>Vlr. Total</p>
                    <div class="pe-2">
                        <input type="text" class="form-control" />
                    </div>
                    <div class="pe-2">
                        <input type="text" class="form-control" />
                    </div>
                    <div class="pe-2">
                        <input type="text" class="form-control" />
                    </div>
                </div>
            </div>
            <div className='grid-yx'>
                <div className='container'>
                    <button className="btn btn-primary">Confirmar</button>
                </div>
                <div style={{paddingRight:'1rem'}}>
                    <div class="d-flex">
                        <label  className="">Total Venta</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="d-flex">
                        <label  className="">Total IVA</label>
                        <input type="text" class="form-control" />
                    </div>
                    <div class="d-flex">
                        <label  className="">Total con IVA</label>
                        <input type="text" class="form-control" />
                    </div>
                </div>
            </div>
        </>
    );
}