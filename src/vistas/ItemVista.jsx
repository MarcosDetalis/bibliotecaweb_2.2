import { useEffect, useState } from "react";
import ItemDetail from "../componentes_con_estilos/ItemDetalles";
import db from "../db.json";
import PageWrapper from "../componentes_con_estilos/PageEnvuelta";
import { useParams } from "react-router-dom";
import Detail from "../componentes_con_estilos/Detalles";
import Carrousel from "../componentes_con_estilos/Carrousel";

function ItemView() {
  const [item, setItem] = useState([]);
  const [relatedItems, setRelatedItems] = useState([]);
  const { book } = useParams();

  useEffect(() => {
    window.document.title = book;
    document.getElementById("navMobile").removeAttribute("style");
    document.body.removeAttribute("style");
    document.getElementById("cart").removeAttribute("style");
    document.getElementById("menu").removeAttribute("style");
    let item = db.find((item) => item.name === book);
    setItem(item);
    let related = db.filter(
      (book) => book.collection === item.collection && book.name !== item.name
    );
    setRelatedItems(related);
  }, [book]);

  return (
    <PageWrapper>
      <ItemDetail item={item} />
      <Carrousel items={relatedItems} />
      <Detail product={item} />
    </PageWrapper>
  );
}

export default ItemView;
