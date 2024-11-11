
import { UserCont } from '../context/UserContext';
import { useContext, useEffect, useState } from 'react';
import CheckoutContainer from './Estilos/Confirmar';

function Checkout() {
  const {cart, user} = useContext(UserCont);
  const [finalPrice, setFinalPrice] = useState(0);

  useEffect(()=> {
    let price = 0;
    cart.map(item => price = price + item.price * item.quantity);
    setFinalPrice(price);
  }, [cart]);

 


  return (
    <CheckoutContainer>
       <div className='listTitle'>
        <h1>Datos de la Reserva</h1>
      <h2>Lista de pedidos:</h2>
      </div>
       <div className='checkoutWrapper'>

        {/* <h3 className='user'>Hola {user.name} el total de tu compra es:</h3>
        <h2 className='total'>${finalPrice}</h2> */}

        <ol className="ol_lis">
	<li className="li_lis">Matematicas - Tercer Siclo</li>
	<li className="li_lis">Analisi de Sistemas - kendell & kendal</li>
	<li className="li_lis">Lengua Catellana</li>
  <li className="li_lis">Quiren 758 mil de aumento</li>
  <li className="li_lis">Trabajen </li>
  <li className="li_lis">Switch on the power button.</li>

</ol>

  <form className="box" action="" method="POST" target="_self">
  <input placeholder="Ingrese la fecha reserva" type="text"   
  onFocus={
    (e)=> {
      e.currentTarget.type = "date";
      e.currentTarget.focus();
     }
   }
   
   id="date"/>
  
  <input type="text" placeholder="Ingrese la hora reserva" 
   onFocus={
    (e)=> {
      e.currentTarget.type = "time";
      e.currentTarget.focus();
     }
   }
   className='hora'

  /> 


  <input type="submit" id="submit" value="Confirmar"/>
</form>
      </div> 
 



    </CheckoutContainer>
  );
}

export default Checkout;