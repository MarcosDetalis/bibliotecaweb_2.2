import { useContext, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { InView } from 'react-intersection-observer';
import AddButton from './AddButton';
import { UserCont } from '../context/UserContext';

import Producto from './Estilos/Card'



function Card({info}) {
  const cardRef = useRef(null);
  const [card, setCard] = useState({});
  const {viewDetail} = useContext(UserCont);
//se crea por pedido de pablito

  const [cardlibro,setcardlibro] = useState([]);

  useEffect(() => {
    setcardlibro(info);
  }, [info]);


  function setBackground(inView) {
    if (inView) {
      cardRef.current.style.opacity=1;
    } else {
      cardRef.current.removeAttribute('style');
    }
  }

  function openDetail() {
    if (card.product_quantity > 0) {
      viewDetail(card);
    }
  }

  useEffect(() => {
    setCard(info);
  }, [info]);


  console.log('auto',card);
  return (
    <InView as='div' triggerOnce={true} threshold={.3} onChange={inView => setBackground(inView)}>

      <Producto ref={cardRef} color={card.color} $img={card.imagen}>
      {/* carga las imagen y se muestra agotado si el stop es 0 */}

        <div className={`imgContainer ${card.product_quantity === 0 ? 'disableImg' : null}`}>
          <Link className='link' to={`/books/${card.aut_nombre}`}>
            <div className='imageShow'></div>
          </Link>
          {card.product_quantity === 0 ?
            <div className='disableText'>
              <span>AGOTADO</span>
            </div>
          : null}
          {card.product_quantity !== 0 ?
            <AddButton Class={'addToCart__desktop'} disabled={card.product_quantity} callTo={openDetail} />
          : null}
        </div>
        
        {/* carga las imagen y se muestra agotado si el stop es 0 */}
        
        <div className='info'>
          <Link className='link' to={`/collections/${card.collection}`}>
            <span className='collection'>{card.collection}</span>
          </Link>
          <Link className='link' to={`/home/${card.name}`}>
            <span className='title'>{card.aut_nombre}</span>
          </Link>
          <Link className='link' to={`/authors/${card.author}`}>
            <span className='author'>{card.lib_nombre}</span>
          </Link> 
          {/* <span className='price'>${card.price}</span> */}
          <AddButton Class={'addToCart__mobile'} disabled={card.product_quantity} callTo={openDetail} />
        </div>
        
      </Producto>
    </InView>
  );
}

export default Card;