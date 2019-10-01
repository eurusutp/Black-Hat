import React, { Component } from 'react';
import SocialBar from './socialBar';


class Views extends Component {
    // variable and method used for enabling and disapearing items

    render() {
        this.socialBarEnabled = true;
        this.toggle = () => {
            this.socialBarEnabled = !this.socialBarEnabled;
            console.log(this.socialBarEnabled);
        };
        return (
            <div>
                <div className="container">
                    <div className="fluid-row text-center">
                        <h1 className="display-4 py-5 mb-5"><span role="img" aria-label="lightning">⚡</span>Vehiculos Eléctricos en Panamá<span role="img" aria-label="lightning">⚡</span></h1>
                        <img className="w-75" style={{ maxHeight: '28em' }} src={require("./images/batteries.gif")} alt="batteries-gif" />
                        <div className="py-5" />
                        <div className="py-5" />
                    </div>
                    <div className="col-xl col-lg col-md fluid-row">
                        <div className="col-lg col-xl my-5 text-center"><img className="w-75" src={require("./images/mercecharge.jpg")} alt="mercedes-ev" />
                        </div>
                        <div className="col-xl col-lg col-md col-sm-2 col-xs-2 ml-auto">
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
                    <div className="row col-md col-sm col-xs pb-4">
                        <div className="col mt-5 text-center">
                            <img style={{ maxWidth: 150 }} src={require("./images/good-thumb.jpg")} alt="good-thumb" />
                            <h3 className="text-center text-success my-3">Ventajas</h3>
                            <ul className="list-group text-left">
                                <li className="list-group-item">Aire más limpio</li>
                                <li className="list-group-item">Poco mantenimiento</li>
                                <li className="list-group-item">Conducción más cómoda y relajada</li>
                                <li className="list-group-item">Contribuye con el medio ambiente</li>
                                <li className="list-group-item">Más eficiencia, menos consumo, más ahorro</li>
                            </ul>
                        </div>
                        <div className="col mt-5 text-center">
                            <img style={{ maxHeight: 150 }} src={require("./images/bad-thumb.png")} alt="bad-thumb" />
                            <h3 className="text-center text-danger my-3">Desventajas</h3>
                            <ul className="list-group text-left">
                                <li className="list-group-item">Precio</li>
                                <li className="list-group-item">Escasa red de recarga</li>
                                <li className="list-group-item">Tiempo de recarga</li>
                                <li className="list-group-item">Menos autonomía</li>
                                <li className="list-group-item">Menos talleres especializados</li>
                            </ul>
                        </div>
                    </div>
                    <hr className="py-3" />
                    <div className="row mx-3">
                        <div className="col text-justify">
                            <div className="text-center">
                                <img className="pt-2 pb-4 text-center w-75" src={require("./images/recharge.jpg")} alt="ev-plug" />
                            </div>
                            <h3 className="mb-3 mr-3">¿Vale la pena comprar un auto eléctrico?</h3>
                            <ol>
                                <p>
                                </p><li>Podemos destacar que es ‘eco-friendly’. Es decir, es respetuoso con el entorno, ya que no emite gases CO₂ al circular ni hace tanto ruido como los
            vehículos tradicionales.</li>
                                <p />
                                <p>
                                </p><li>Usar la electricidad como ‘combustible’ hace que los desplazamientos sean más baratos. El uso del coche
                                  eléctrico es más rentable a la larga, ya que el km recorrido con electricidad es más económico que hacerlo
            con diesel o gasolina.</li>
                                <p />
                                <li>
                                    <p>Los accidentes de transito se reducirán debido a que los vehículos autónomos tienen
                                      un sistema inteligente que está programado con sensores, rayos láser y GPS, para tomar las decisiones
                                      adecuadas al momento de la conducción en las carreteras.
                                      Este sistema permite relacionar, percibir situaciones en la vía e conectarse con otros vehículos, lo que
              permite la toma de decisiones adecuadas evitando los accidentes. </p>
                                </li>
                                <li>
                                    <p>Menos ruidosos. Otra ventaja que ofrecen estos coches es una menor contaminación
              acústica, que es uno de los problemas principales de para las urbanizaciones.</p>
                                </li>
                            </ol></div>
                    </div>
                    <hr />
                    <div className="row" style={{ maxHeight: '25em' }}>
                        <div className="ml-5">
                            <h3 className="text-center">Puntos a tomar en cuenta a la hora de comprar un auto eléctrico</h3>
                        </div>
                        <div className="fluid-col-4 pt-1 mx-2 text-center">
                            <div className="py-4" />
                            <div className="py-4" />
                            <img className="w-75" style={{ maxHeight: 227 }} src={require("./images/mercecharge.jpg")} alt="mercedes-ev" />
                            <div className="py-xl-5 py-lg-5" />
                            <div className="py-xl-4 py-lg-4" />
                            <img className="w-75" style={{ maxHeight: 220 }} src={require("./images/58.jpg")} alt="ev-car-1" />
                        </div>
                        <div className="col pt-2 mx-3">
                            <hr />
                            <h4 className="text-center">Carga fácil</h4>
                            <hr />
                            <p className="text-justify">Nivel 1: se refiere al uso de cualquier toma de corriente doméstica estándar de tres
                              puntas, la misma que alimenta cualquier teléfono inteligente. Prácticamente, todos admiten este tipo de
                              carga. La mala noticia es que es odiosamente lenta. Por ejemplo, rehabilitar un Nissan Leaf con un cargador
          estándar de 120 voltios toma más de 20 horas.</p>
                            <p className="text-justify">Nivel 2: es mucho más rápido y será el que quieras usar con mayor frecuencia,
                              especialmente si instalas un cargador en el garaje. Para el mismo Leaf, una carga completa por esta vía de
          240 voltios toma entre cuatro y ocho horas.</p>
                            <h5 style={{ color: 'red' }}> Información importante </h5>
                            <p className="text-justify"> Los tiempos de carga variarán según el estado de carga de la batería, su antigüedad y
                              su kilometraje. Las baterías de iones de litio que alimentan a la gran mayoría de los autos eléctricos
                              pierden su capacidad de mantener una carga en el tiempo. En un período de 10 años, la pérdida gradual podría
          alcanzar cerca de un tercio, aunque la mayoría de los autos están respaldados por una buena garantía.</p>
                            <hr />
                            <h4 className="text-center">Mejor en casa</h4>
                            <hr />
                            <p className="text-justify mb-5">Si estás decidido a comprar un auto eléctrico, te recomendamos instalar un cargador
                              de
                              Nivel 2 en casa. Si bien es posible arreglárselas con uno de Nivel 1 (básicamente un tomacorriente de
                              pared), o incluso usando estaciones de carga públicas, no hay nada mejor que tener uno en el garaje.
                              Los cargadores de Nivel 2 funcionan con sistemas 220/240 como un electrodoméstico, de modo que la mayoría de
                              los electricistas pueden instalar uno. Incluso puedes comprar uno a través de Amazon, que además te
                              recomendará un experto. Kia y Audi se encuentran entre las compañías que se han asociado con Amazon para
          ayudar a los consumidores a obtener el cargador que más les convenga.</p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid fixed-top mt-5">
                    <div className="col-auto mr-2">
                        <SocialBar />
                    </div>
                </div>
            </div>
        )
    }
}

export default Views
