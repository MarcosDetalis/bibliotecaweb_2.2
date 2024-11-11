export async function getPortadas() {
    const url = "http://localhost:4005/portadalibros/portadas";
    const respuesta = await fetch(url);
    const datos = await respuesta.json();
    return datos;
  }