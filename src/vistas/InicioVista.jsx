
import  { useEffect, useState } from "react";

// import ItemsList from "../componentes_con_estilos/ItemsListas";
import db from "../db.json";
// import PageWrapper from "../componentes_con_estilos/PageEnvuelta";
import Search from "../componentes_con_estilos/buscador/interfaz/Search";
//  import Slider from "../componentes_con_estilos/slider/interfaz/Slider";

function HomeView() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    window.document.title = "Caja Negra Editorial";
    document.getElementById("navMobile").removeAttribute("style");
    document.body.removeAttribute("style");
    document.getElementById("cart").removeAttribute("style");
    document.getElementById("menu").removeAttribute("style");
    setItems(db);
  }, []);

  return (
    // <PageWrapper>

    //   <Search/>
    //    <br></br>
    //  <Slider/> 
    //   <ItemsList title="Novedaded" items={items} />
    // </PageWrapper>
     
    <Search/>
    
  );
}

export default HomeView;
