import { useEffect, useState } from "react";
import ItemsList from "../componentes_con_estilos/ItemsListas";
import db from "../db.json";
import PageWrapper from "../componentes_con_estilos/PageEnvuelta";
import { useParams } from "react-router-dom";

function CollectionView() {
  const [items, setItems] = useState([]);
  const { title } = useParams();

  useEffect(() => {
    window.document.title = title;
    document.getElementById("navMobile").removeAttribute("style");
    document.body.removeAttribute("style");
    document.getElementById("cart").removeAttribute("style");
    document.getElementById("menu").removeAttribute("style");
    let collection = db.filter((item) => item.collection === title);
    setItems(collection);
  }, [title]);

  return (
    <PageWrapper>
      <ItemsList title={title} items={items} />
    </PageWrapper>
  );
}

export default CollectionView;
