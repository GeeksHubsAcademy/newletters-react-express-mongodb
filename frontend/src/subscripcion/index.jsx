import React from 'react';
import './subscription.css';

function subscripcion (){

       return (

              <div id="bg">
                     <h1>Newsletter</h1>
                     <h6>subscribete</h6>
                     <input type="email" placeholder="pon tu email"></input>
                     <input type="submit" value="enviar"></input>
                     <input type="radio" required></input>
                     <label> Acepto los terminos Gracias!!! </label>
              </div>
       )
}

export default subscripcion;