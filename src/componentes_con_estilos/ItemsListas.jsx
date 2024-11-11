 
import Card from './Card';
import List from './Estilos/ItemsListas'

function ItemsList({title,items}) {

  return (
    <List>
      {title ? 
        <div className='listTitle'>
          <h1>{title}</h1>
        </div>
      : null}
      <div className='listWrapper'>
        {items.map(item => <Card info={item} key={item.name}/>)}
      </div>
    </List>
  );
}

export default ItemsList;