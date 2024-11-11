import React from "react";

import db from '../../../db.json'
import { useState,useEffect } from "react";
import ItemsList from "../../ItemsListas";
import PageWrapper from "../../PageEnvuelta";

import Slider from "../../slider/interfaz/Slider";
import './estilosearch.css'


function Search() {
  const [items, setItems] = useState([]);
 
useEffect(() => {
  window.document.title = "Caja Negra Editorial";
  document.getElementById("navMobile").removeAttribute("style");
  document.body.removeAttribute("style");
  document.getElementById("cart").removeAttribute("style");
  setItems(db);
}, []);
const [searchText, setSearchText] = useState("");
console.log(searchText)

const handleSearch = () => {

  setItems(db.filter(item => item.author.toLowerCase().includes(searchText.toLowerCase())));
};
  return (
    
    // <div className="container-button">
     
    //   <form action="" class="search-bar">   
    //     <input
    //       type="search"
    //       name="search"
    //       autocomplete="off"
    //       placeholder="   Busca un libro"
    //       required
    //     />
    //     <button class="search-btn" type="submit">
    //       <span>Search</span>
    //     </button>
    //   </form>
    // </div>
<PageWrapper>
    <div className="container-button">
     <div  className="search-bar">   
       <input
         type="search"
         name="search"
     
         placeholder="   Busca un libro"
         value={searchText}
         onChange={e => setSearchText(e.target.value)}  
       />
       <button className="search-btn"  onClick={handleSearch}>
         <span>Search</span>
       </button>
     </div>
     
   </div>
   <Slider></Slider>
   { <ItemsList items={items} /> }
      </PageWrapper>
  );
}

export default Search;
