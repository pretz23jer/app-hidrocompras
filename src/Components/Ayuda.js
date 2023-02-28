import React, { Component } from "react";
import Menu from '../Layouts/Menu';
import Footer from "../Layouts/Footer";
import Imggeneral from '../Resources/acerca.jpg';

class Ayuda extends Component{
    render() {
        return(
            <div>
                <Menu />
                <img src={Imggeneral} className="img-fluid" alt="Imagen General" />
                <div className="container-fluid text-center">
                    <p className="marcasEstilo">Sección Ayuda</p>
                    <div className="text-center padreLineaAzul">
                        <div className="lineaAzul"></div>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}

export default Ayuda