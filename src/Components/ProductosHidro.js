import React, { Component } from "react";
import Menu from '../Layouts/Menu';
import Producto1 from "../Resources/p1.png"
import Producto2 from "../Resources/p2.png"
import Producto3 from "../Resources/p3.png"
import Producto4 from "../Resources/p4.png"
import Producto5 from "../Resources/p5.png"
import Producto6 from "../Resources/p6.png"
import Producto7 from "../Resources/p8.png"
import Producto8 from "../Resources/p12.png"

class ProductosHidro extends Component{
    render() {
        return(
            <div className="estiloPagina">
                <Menu />
                <div className="container-fluid text-center mt-3">
                    <p className="marcasEstilo">NUESTROS PRODUCTOS</p>
                    <div className="text-center padreLineaAzul">
                        <div className="lineaAzul"></div>
                    </div>
                </div>
                <div className="container sociosEstilo mb-5">
                   <div className="row">
                        <div className="col-6 col-md-4 col-lg-3">
                            <a href="#" id="enlaceProducto">
                                <div className="alturaProducto">
                                    <img src={Producto1} className="img-fluid" height="200" alt="Imagen Hidro" />
                                    <p className="text-center pw-bold">Motores</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <a href="#" id="enlaceProducto">
                                <div className="alturaProducto">
                                    <img src={Producto2} className="img-fluid" height="200" alt="Imagen Hidro" />
                                    <p className="text-center pw-bold">Bombas</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <a href="#" id="enlaceProducto">
                                <div className="alturaProducto">
                                    <img src={Producto3} className="img-fluid" height="200" alt="Imagen Hidro" />
                                    <p className="text-center pw-bold">Accesorios</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <a href="#" id="enlaceProducto">
                                <div className="alturaProducto">
                                    <img src={Producto4} className="img-fluid"  height="200" alt="Imagen Hidro"/>
                                    <p className="text-center pw-bold">Calentadores</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <a href="#" id="enlaceProducto">
                                <div className="alturaProducto">
                                    <img src={Producto5} className="img-fluid"  height="200" alt="Imagen Hidro"/>
                                    <p className="text-center pw-bold">Paneles de Arranque</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <a href="#" id="enlaceProducto">
                                <div className="alturaProducto">
                                    <img src={Producto6} className="img-fluid"  height="200" alt="Imagen Hidro"/>
                                    <p className="text-center pw-bold">Combos</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <a href="#" id="enlaceProducto">
                                <div className="alturaProducto">
                                    <img src={Producto7} className="img-fluid"  height="200" alt="Imagen Hidro"/>
                                    <p className="text-center pw-bold">Químicos</p>
                                </div>
                            </a>
                        </div>
                        <div className="col-6 col-md-4 col-lg-3">
                            <a href="#" id="enlaceProducto">
                                <div className="alturaProducto">
                                    <img src={Producto8} className="img-fluid"  height="200" alt="Imagen Hidro"/>
                                    <p className="text-center pw-bold">Lámparas</p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ProductosHidro;