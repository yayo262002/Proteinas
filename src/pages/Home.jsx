import "./Home.scss";
import React from 'react'
import foto1 from '../../src/assets/200.jpeg'
import mv1 from '../../src/assets/mv1.webp'
import mv2 from '../../src/assets/mv2.webp'
import mv3 from '../../src/assets/mv3.webp'
import mv4 from '../../src/assets/mv4.webp'
import rop1 from '../../src/assets/rop1.webp'
import rop2 from '../../src/assets/rop2.webp'
import rop3 from '../../src/assets/rop3.webp'
import rop4 from '../../src/assets/rop4.webp'
import invita from '../../src/assets/invita.webp'
import telegram from '../../src/assets/telegram.webp'
import start from '../../src/assets/starts.png'
import start0 from '../../src/assets/start.png'
import face from '../../src/assets/face.png'
import tui from '../../src/assets/tui.png'
import tik from '../../src/assets/tik.png'
import tel from '../../src/assets/tele.png'
import ins from '../../src/assets/ins.png'
import you from '../../src/assets/you.png'
import indicar from '../../src/assets/indicar.png'
import { Link } from "react-router-dom";
import ControlledCarousel from "./Carousel";

const Home = () => {
  return (
  <div className="body">
    <Link to="/listaespecial">
    <div>
    <img className='foto1' src={foto1}/>
    </div>
</Link>
<ul className='nav-home-ul'>
            
            <li>
            <Link to="/proteinas">Proteinas</Link>
            </li>
            <li>
            <Link to="/creatinas">Creatinas</Link>
            </li>
            <li>
            <Link to="/snacks">Barritas y Snacks</Link>
            </li>
            <li>
            <Link to="/vitaminas">Vitaminas</Link>
            </li>
            <li>
            <Link to="/vegan">Gama Vegana</Link>
            </li>
            <li>
            <Link to="/ropa">Ropa</Link>
            </li>
  </ul>
  <div className="div-masvendidos">
         <div className="div-masvendidos-h1">
                <h1>Los mas Vendido</h1>
        </div> 

            <div className="div-masvendidos-products">

                    <div className="card">
                        <img src={mv1}/>
                        <span className="comprarapida">Compra Rapida</span>
                        <p>Impact Whey Protein</p>
                        <div className="stars">
                        <img src={start}/>
                        <img src={start}/>
                        <img src={start}/>
                        <img src={start}/>
                        <img src={start}/>
                        </div>
                        <p className="oferta-mv"> ⚡OFERTA⚡ 30% DE DESCUENTO</p>
                        <p className="oferta-mv-abajo">En los más vendidos | Código: MYP30</p>
                        <p className="oferta-mv-precio">desde 11,99 €</p>
                    </div>

                
                    <div className="card">
                        <img src={mv2}/>
                        <span className="comprarapida">Compra Rapida</span>
                        <p>Creatina Monohidrato en Polvo</p>
                        <div className="stars">
                        <img src={start}/>
                        <img src={start}/>
                        <img src={start}/>
                        <img src={start}/>
                        <img src={start0}/>
                        </div>
                        <p className="oferta-mv-precio">desde 18,99 €</p>
                    </div>

                    <div className="card">
                        <img src={mv3}/>
                        <span className="comprarapida">Compra Rapida</span>
                        <p>Clear Whey Isolate</p>
                        <div className="stars">
                        <img src={start}/>
                        <img src={start}/>
                        <img src={start}/>
                        <img src={start}/>
                        <img src={start}/>
                        </div>
                        <p className="oferta-mv-precio">desde 29,99 €</p>
                    </div>

                    <div className="card">
                        <img src={mv4}/>
                        <span className="comprarapida">Compra Rapida</span>
                        <p>Impact Whey Isolate</p>
                        <div className="stars">
                        <img src={start}/>
                        <img src={start}/>
                        <img src={start}/>
                        <img src={start}/>
                        <img src={start0}/>
                        </div>
                        <p className="oferta-mv"> ⚡OFERTA⚡ 30% DE DESCUENTO</p>
                        <p className="oferta-mv-abajo">En los más vendidos | Código: MYP30</p>
                        <p className="oferta-mv-precio">desde 30,99 €</p>
                    </div>
        </div>
                <div>
                        <ControlledCarousel/>
                </div>
        </div>     
    <div className="div-masvendidos">
            <div className="div-masvendidos-h1">
                    <h1>Novedades - Ropa</h1>
            </div> 
            <div className="div-masvendidos-products">
                    <div className="card">
                        <img src={rop1}/>
                        <span className="comprarapida">Compra Rapida</span>
                        <p>Mallas Engage de edición limitada para mujer de MP - Gris tormenta</p>
                        <p className="oferta-mv"> ⚡OFERTA⚡ 30% DE DESCUENTO</p>
                        <p className="oferta-mv-abajo">En los más vendidos | Código: MYP30</p>
                        <p className="oferta-mv-precio">39,99 €</p>
                    </div>

                    <div className="card">
                        <img src={rop2}/>
                        <span className="comprarapida">Compra Rapida</span>
                        <p>Mallas Engage de edición limitada para mujer de MP - Gris tormenta</p>
                        <p className="oferta-mv"> ⚡OFERTA⚡ 30% DE DESCUENTO</p>
                        <p className="oferta-mv-abajo">En los más vendidos | Código: MYP30</p>
                        <p className="oferta-mv-precio">27,99 €</p>
                    </div>

                    <div className="card">
                        <img src={rop3}/>
                        <span className="comprarapida">Compra Rapida</span>
                        <p>Mallas Engage de edición limitada para mujer de MP - Gris tormenta</p>
                        <p className="oferta-mv"> ⚡OFERTA⚡ 30% DE DESCUENTO</p>
                        <p className="oferta-mv-abajo">En los más vendidos | Código: MYP30</p>
                        <p className="oferta-mv-precio">23,99 €</p>
                    </div>

                    <div className="card">
                        <img src={rop4}/>
                        <span className="comprarapida">Compra Rapida</span>
                        <p>Mallas Engage de edición limitada para mujer de MP - Gris tormenta</p>
                        <p className="oferta-mv"> ⚡OFERTA⚡ 30% DE DESCUENTO</p>
                        <p className="oferta-mv-abajo">En los más vendidos | Código: MYP30</p>
                        <p className="oferta-mv-precio">29,99 €</p>
                    </div>
            </div>
      </div>
             <Link to="/ropa">
                    <div className="button-center">
                        <button className="button-ropa">Ver Todos</button> 
                    </div>
            </Link>
      <div className="div-masvendidos">

            <div className="div-masvendidos-products">
                    <div className="card">
                        <img src={invita}/>
                        <h2>Refiere a un amigo o familiar y consigue 10$</h2>
                        <p>Gana 10€ por cada amigo referido y ellos se llevaran envío ilimitado estandar durante los proximos 3 meses</p>
                        <Link to="/ropa">
                                <div className="button-center">
                                    <button className="button-link">Comparte</button> 
                                </div>
                         </Link>
                    </div>
                    <div className="indicar">
                        <img src={indicar}/>
                    </div>
                    <div className="card">
                        <img src={telegram}/>
                        <h2>Registrate en Telegram</h2>
                        <p className="empujaboton">Hazte con las últimas ofertas directamente en tu teléfono, date de alta en nuestro canal de Telegram</p>
                        <Link to="/ropa">
                                <div className="button-center">
                                    <button className="button-link">Registrate</button> 
                                </div>
                         </Link>
                    </div>


        </div>          
    </div>

            <div className="abajo-home">
                <div className="izq-foot">
                <h3>Date de alta para recibir ofertas exclusivas</h3>
                <button className="button-link2">Registrate</button>
                </div>

                <div className="der-foot">
                <h3>Conecta con nosotros</h3>
                <div className="imagenes-redes">
                <img src={face}/>
                <img src={tui}/>
                <img src={tik}/>
                <img src={you}/>
                <img src={ins}/>
                <img src={tel}/>

                </div>
                </div>
            </div>
</div>
  )
}

export default Home