import React, { Component } from 'react'

class Views extends Component {
    render() {
        return (
            <div>
                <div>
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1" />
                    <title>Electric Cars</title>
                    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Raleway:300,400,500,600,700,800,900" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto:400,500,700,900" rel="stylesheet" />
                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
                    <link rel="stylesheet" type="text/css" href="App.css" />
                    <div className="container">
                        <div className="row justify-content-center">
                            <h1 className="mx-2 display-4 pt-5 pb-2 text-center">Vehiculos Eléctricos en Panamá</h1>
                            <img className="py-5 mb-5 mt-2 text-center" src={require("./images/batteries.gif")} alt="Yay" />
                        </div>
                        <div className="row-xl row-lg row-md row" style={{ maxHeight: 400 }}>
                            <div className="col-4 mt-5"><img className="h-50 w-auto" src={require("./images/pointerm.png")} alt="Yay" /></div>
                            <div className="col">
                                <h3 className="mb-3">Autos eléctricos circulando en Panamá</h3>
                                <p className="text-justify">Se estima que en Panamá circulan 200 vehículos, entre autos y autobuses,
                                  totalmente
                                  eléctricos, y
          unos 1,400 autos híbridos, aquellos que operan con carga eléctrica y combustible.</p>
                                <p className="text-justify">
                                    En el territorio nacional podrán instalarse estaciones de carga, que serán diferenciadas por
          categorías.</p>
                                <p className="text-justify">
                                    Durante el foro informativo organizado por la Autoridad de los Servicios Públicos (Asep) se
                                    presentó a los asistentes un documento borrador sobre el procedimiento para regular la instalación
                                    de cargadores y medición de consumo de vehículos eléctricos, que incluyó las disposiciones
          generales, las estaciones de carga y los tipos de clientes.</p>
                            </div>
                        </div>
                        <div className="row pb-5">
                            <div className="col text-center">
                                <img style={{ maxWidth: 150 }} src={require("./images/good-thumb.jpg")} alt="Yay" />
                                <h3 className="text-center text-success my-4">Ventajas</h3>
                                <ul className="list-group">
                                    <li className="list-group-item">Aire más limpio</li>
                                    <li className="list-group-item">Poco mantenimiento</li>
                                    <li className="list-group-item">Conducción más cómoda y relajada</li>
                                    <li className="list-group-item">Contribuye con el medio ambiente</li>
                                    <li className="list-group-item">Más eficiencia, menos consumo, más ahorro</li>
                                </ul>
                            </div>
                            <div className="col text-center">
                                <img style={{ maxWidth: 150 }} src={require("./images/bad-thumb.png")} alt="Yay" />
                                <h3 className="text-center text-danger my-4">Desventajas</h3>
                                <ul className="list-group">
                                    <li className="list-group-item">Aire más limpio</li>
                                    <li className="list-group-item">Poco mantenimiento</li>
                                    <li className="list-group-item">Conducción más cómoda y relajada</li>
                                    <li className="list-group-item">Contribuye con el medio ambiente</li>
                                    <li className="list-group-item">Más eficiencia, menos consumo, más ahorro</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Views
