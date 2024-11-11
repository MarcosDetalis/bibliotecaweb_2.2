import { useEffect, useState } from "react";
import ItemsList from "../componentes_con_estilos/ItemsListas";
import db from "../db.json";
import PageWrapper from "../componentes_con_estilos/PageEnvuelta";
import { useParams } from "react-router-dom";

function AuthorView() {
  const [items, setItems] = useState([]);
  const [catelibros, setCatelibros] = useState([]);
  const [title_categoria, set_title_categoria] = useState();
  const [error, setError] = useState('');

  // Obtener el parámetro 'author' desde la URL
  const { author } = useParams();

  // Actualiza el título de la página
  useEffect(() => {
    window.document.title = "eferfr3"; // Puedes personalizar este título
    document.getElementById("navMobile")?.removeAttribute("style");
    document.body?.removeAttribute("style");
    document.getElementById("menu")?.removeAttribute("style");
    document.getElementById("cart")?.removeAttribute("style");
  }, []);

  // Efecto para hacer la solicitud de los libros cuando cambia el autor
  useEffect(() => {
    const rellelibro = async () => {
      try {
        const respuesta = await fetch(`http://localhost:4005/rellenositems/rellenositems/?q=${author}`);
        if (!respuesta.ok) {
          throw new Error('Error al obtener los datos para listas los pedidos');
        }
        const datos = await respuesta.json();
        setCatelibros(datos);
        set_title_categoria(datos[0].cate_descripcion);
      } catch (err) {
        setError(err.message);
      }
    };

    // Realiza la solicitud solo si hay un autor válido
    if (author) {
      rellelibro();
    }
  }, [author]); // Dependencia de `author`, se vuelve a ejecutar cuando cambia

  console.log('libroscate', title_categoria);

  return (
    <PageWrapper>
      {error && <p>{error}</p>} {/* Mostrar error si lo hay */}
      <ItemsList title={title_categoria} items={catelibros} />
    </PageWrapper>
  );
}

export default AuthorView;
