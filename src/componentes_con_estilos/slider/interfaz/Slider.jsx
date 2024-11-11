

// import {getPortadas} from '../infra/servicio-slider.js'


// npm i react-multi-carousel
import React from 'react'

import { useState, useEffect } from 'react'

// importacion de libreria
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
// importacion css
import './estilo-slider.css'

import Card from '../../Card';
import db from '../../../db.json'

import { useParams } from "react-router-dom";

// propiedades del slider
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3, //elementos a mostrar
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
      slidesToSlide: 3 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1 // optional, default to 1.
    }
  };
  

function Slider() {
// estado que contiene las portadas
// const [portadas,setPortadas]=useState([]);

//   useEffect(()=>{
//     getPortadas().then((datos)=>
//     setPortadas(datos) 
//     )
//   },[])
  
//   console.log(portadas)
// aparatdo donde podremos el servicio
const [items, setItems] = useState([]);
    const { author } = useParams();
  
    useEffect(() => {
      window.document.title = author;
      document.getElementById("navMobile").removeAttribute("style");
      document.body.removeAttribute("style");
      document.getElementById("menu").removeAttribute("style");
      document.getElementById("cart").removeAttribute("style");
     
      setItems(db);
    }, []);

console.log(items);

  return (
//     <div>
//          <div className="parent">
//       <Carousel
//         responsive={responsive}
//         autoPlay={true}
//         swipeable={true}
//         draggable={true}
//         showDots={true}
//         infinite={true}
//         partialVisible={false}
//         dotListClass="custom-dot-list-style"
//       >
//         {portadas.map((elemento) => {
//           return (
//             <div className="slider" key={elemento.id_img}>
//               <img src={elemento.imagen} alt="movie" />
//             </div>
//           );
//         })}
//       </Carousel>
//     </div>

//     </div>
//   )
// }
<div>
         <div className="parent">
      <Carousel
        responsive={responsive}
        autoPlay={true}
        swipeable={true}
        draggable={true}
        showDots={true}
        infinite={true}
        partialVisible={false}
        dotListClass="custom-dot-list-style"
      >
        
        {items.map((elemento) => {
      return (
         <div className="slider" key={elemento.product_id}>
             <Card info={elemento} key={elemento.name}/>  
             </div>
      );
    })}
       
      </Carousel>
    </div>

    </div>
 )
}

export default Slider