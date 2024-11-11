import { useContext } from 'react';
import { Link } from 'react-router-dom';
 
import { UserCont } from '../context/UserContext';
import AddButton from './AddButton';
import Item from './Estilos/ItemDetalles'
 

function ItemDetail({item}) {
  const {viewDetail} = useContext(UserCont);

  function openDetail() {
    viewDetail(item);
  }

  return (
    <Item>
      <div className='itemHeader'>
        <h2><Link className='link' to={`/collections/${item.collection}`}>{item.collection}</Link></h2>
      </div>
      <article className='itemWrapper'>
        <div className='detail'>
          <img className='imgDetail' src={item.img} alt='item'></img>
          <AddButton disabled={item.product_quantity} callTo={openDetail} />
        </div>
        <div className='summary'>
          <header>
            <h2 className='title'>{item.name}</h2>
          </header>
          <div>
            <span className='author'>
              <Link className='link' to={`/authors/${item.author}`}>{item.author}</Link>
            </span>
          </div>
          <div>
            <span className='price'>${item.price}</span>
          </div>
          <p>{item.description}</p>
        </div>
      </article>
    </Item>
  );
}

export default ItemDetail;