import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
 import ItemsContainer from './Estilos/Carrousel'


function Carrousel({items}) {
  const [index, setIndex] = useState([]);
  const [indexCard, setIndexCard] = useState(0);
  const [touchStartPoint, setTouchStartPoint] = useState(0);
  const [moveDirection, setMoveDirection] = useState(true);
  const [autoSlide, setAutoSlide] = useState(true);

  /* Touch */
  function touchStart(e) {
    setTouchStartPoint(e.changedTouches[0].clientX);
    autoSlideStop();
  }
  function touchMove(e) {
    setMoveDirection(e.changedTouches[0].clientX < touchStartPoint);
  }
  function touchEnd() {
    let lastCard = indexCard + 1;
    setTimeout(()=> {
      if (moveDirection) {
        if (lastCard < index.length) {
          setIndexCard(indexCard +1);
        }
        if (lastCard === index.length) {
          setIndexCard(0);
        }
      } else if(!moveDirection && indexCard > 0) {
        setIndexCard(indexCard -1);
      }
    }, 250);
  }
  /* Buttons */
  function getCard(index) {
    setIndexCard(index);
  }

  function autoSlideStop() {
    setAutoSlide(false);
  }

  useEffect(()=> {
    setIndex(items);
    if (autoSlide) {
      setTimeout(()=> {
        let nextCard = indexCard + 1;
        if (nextCard < index.length) {
          setIndexCard(indexCard +1);
        }
        if (nextCard === index.length) {
          setIndexCard(0);
        }
      }, 3000);
    }
  }, [items, index.length, autoSlide, indexCard]);

  return (
    <ItemsContainer
      onTouchStart={touchStart}
      onMouseEnter={autoSlideStop}
      onTouchEnd={touchEnd}
      onTouchMove={touchMove}
    >
      <div className="itemHeader">
        <span>Otros titulos</span>
      </div>
      <div className="carrousel">
        <div className="carrouselView">
          {index.map((item, i) => (
            <div
              className={`carrouselCard  ${
                indexCard === i ? "carrouselCard__show" : null
              }`}
              key={item.author}
            >
              <img src={item.img} alt={item.name} height="150px"></img>
              <div className="cardInfo">
                <Link to={`/books/${item.name}`} className="link">
                  <span className="collection">{item.collection}</span>
                </Link>
                <Link to={`/books/${item.name}`} className="link">
                  <span className="title">{item.name}</span>
                </Link>
                <Link to={`/books/${item.name}`} className="link">
                  <span className="author">{item.author}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* <div className="list">
        {index.map((item, i) => (
          <div
            onClick={() => getCard(i)}
            className={`listItem ${
              indexCard === i ? "listItem__active" : null
            }`}
      
          ></div>
        ))} 
      </div>*/}
    </ItemsContainer>
  );
}

export default Carrousel;