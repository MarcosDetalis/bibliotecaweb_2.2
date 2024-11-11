import { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserCont } from '../context/UserContext';

import ProductDetail from './Estilos/Detalles'

import CancelIcon from '@mui/icons-material/Cancel';
import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';


function Detail({product}) {
  const [card, setCard] = useState({});
  const {addItem} = useContext(UserCont);
  const [quantity, setQuantity] = useState(1);

  function closeDetail() {
    document.getElementById('productDetail').removeAttribute('style');
    document.getElementById('mask').removeAttribute('style');
    document.body.removeAttribute('style');
    setQuantity(1);
  }

  function addToCart() {
    let itemToCard = {
      id: card.product_id,
      name: card.name,
      collection: card.collection,
      author: card.author,
      img: card.img,
      quantity: quantity,
      price: card.price
    }
    addItem(itemToCard);
      let wrapper = document.getElementsByClassName('addToCart')[0].getElementsByClassName('buttonWrapper')[0];
      let firstDiv = wrapper.getElementsByTagName('div')[0];
      let lastDiv = wrapper.getElementsByTagName('div')[1];
      wrapper.style.boxShadow='0 0 10px 4px #3EC450';
      firstDiv.style.cssText='left: 0; opacity: 1; border-color: white;';
      lastDiv.style.cssText='transform: translateX(100%);';
      setTimeout(()=> {
        wrapper.removeAttribute('style');
        firstDiv.removeAttribute('style');
        lastDiv.removeAttribute('style');
      }, 2500);
  }
  /* Quantity */
  function quantityAdd() {
    if (quantity < card.product_quantity) {
      setQuantity(quantity + 1);
    }
  }
  function quantityRest() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  useEffect(() => {
    setCard(product);
  }, [product]);

  return (
    <ProductDetail id='productDetail'>
      <div className='detailWrapper'>
        <div className='closeTab'>
          <button onClick={closeDetail}>
          
             <CancelIcon fontSize="large"/> 
          </button>
        </div>
        <div className='detalleInfo'>
          <div className='product'>
            <div className='productImage'>
              <img src={card.img} alt='product'></img>
            </div>
            <div className='productTags'>
              <span className='collection'>{card.collection}</span>
              <span className='title'>{card.name}</span>
              <span className='author'>{card.author}</span>
              <span className='price'>${card.price}</span>
              <Link to={`/books/${card.name}`} className='link'>Ver detalle</Link>
            </div>
          </div>
          <div className='order'>
            <div className='orderHeader'>
              <span>Información de la orden</span>
            </div>
            <div className='quantity'>
              <label>Cantidad</label>
              <div className='counter'>
                <button onClick={quantityRest}>
                  <span className={`material-icons ${quantity === 1 && 'buttonDisable'}`}>  <DeleteForeverIcon fontSize="large"/> </span>
                </button>
                <input type='number' value={quantity} readOnly={true}></input>
                <button onClick={quantityAdd}>
                  <span className={`material-icons ${card.product_quantity === quantity && 'buttonDisable'}`}> <LibraryAddCheckIcon fontSize="large"/> </span>
                </button>
              </div>
            </div>
          </div>
          <div className='addToCart'>
            <button onClick={addToCart}>
              <div className='buttonWrapper'>
                <div><span>buena eleccion</span></div>
                <div><span>agregar al carrito</span></div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </ProductDetail>
  );
}

export default Detail;