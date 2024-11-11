import { useContext } from 'react';
import { UserCont } from '../context/UserContext';
import CartComponent from './Estilos/Carrito'





function Cart() {
  const {cart, removeItem, checkout} = useContext(UserCont);

  return (
    <CartComponent id='cart'>
      <div className='cartWrapper'>
        <div className='cartList'>
          {cart.length !== 0 ? 
            cart.map((item, index) => 
              <div className='cartItem' key={item.img}>
                <div className='itemImg'>
                  <img src={item.img} alt='item'></img>
                </div>
                <div className='itemInfo'>
                  <span className='collection'>{item.collection}</span>
                  <span className='title'>{item.name}</span>
                  <span className='author'>{item.author}</span>
                  {/* <span className='quantityPrice'>{`$${item.price} x ${item.quantity}`}</span> */}
                </div>
                <div className='itemDelete' onClick={() => removeItem(index)}>
                  <img src={  '/icons/delete.svg'} alt='delete'></img>
                </div>
              </div>
            )
          : <span className='emptyCart'>¡Tu carrito esta vacio!</span>}
        </div>
        {cart.length !== 0 ? 
          <div className='checkout'>
            <div className='checkoutWrapper'>
              <button onClick={checkout}>
                <span>Realizar pedido</span>
              </button>
            </div>
          </div>
        : null}
       
      </div>
    </CartComponent>
  );
}

export default Cart;