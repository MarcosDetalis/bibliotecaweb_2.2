import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
 
import { UserCont } from '../context/UserContext';
import db from '../db.json';

import MenuWrapper from './Estilos/Menu'

function Menu() {
  const [collections, setCollections] = useState([]);

  const [authors, setAuthors] = useState([]);
   
  const [reserves, setReserve] = useState([]);

  const [open, setOpen] = useState(false);
  const {cart} = useContext(UserCont);
  const [subMenu1, setSubMenu1] = useState(false);
  const [subMenu2, setSubMenu2] = useState(false);
  const [subMenu3, setSubMenu3] = useState(false);

  function openCart() {
    if (!open) {
      document.getElementById('mask').style.cssText='opacity: .6; bottom: 0;';
      document.getElementById('cart').style.cssText='transform: translateX(20vw); border-right: 1px solid black; visibility: visible;';
      setOpen(!open);
    } else {
      document.getElementById('mask').removeAttribute('style');
      document.getElementById('cart').removeAttribute('style');
      setOpen(!open);
    }
  }

  function openSubMenu(id) {
    let title = document.getElementById(id).getElementsByTagName('span')[0];
    let list = document.getElementById(id).getElementsByTagName('ul')[0];
  
     if (id === 'subMenu1') {
      if (!subMenu1) {
        title.style.color='#61ce70';
        list.style.borderBottom='1px solid #61ce70';
        let listItems = list.getElementsByTagName('li');
        list.style.height=`${41 * listItems.length}px`;
        setSubMenu1(true);
      } else {
        title.removeAttribute('style');
        list.removeAttribute('style');
        setSubMenu1(false);
      }

    } 


    if (id === 'subMenu2') {
      if (!subMenu2) {
        title.style.color='#61ce70';
        list.style.borderBottom='1px solid #61ce70';
        let listItems = list.getElementsByTagName('li');
        list.style.height=`${41 * listItems.length}px`;
        setSubMenu2(true);
      } else {
        title.removeAttribute('style');
        list.removeAttribute('style');
        setSubMenu2(false);
      }
    }

    if (id === 'subMenu3') {
      if (!subMenu3) {
        title.style.color='#61ce70';
        list.style.borderBottom='1px solid #61ce70';
        let listItems = list.getElementsByTagName('li');
        list.style.height=`${41 * listItems.length}px`;
        setSubMenu3(true);
      } else {
        title.removeAttribute('style');
        list.removeAttribute('style');
        setSubMenu3(false);
      }
    }




  }

  useEffect(() => {
    let collections = db.map(item => item.collection);
    collections = Array.from(new Set(collections));
    setCollections(collections);

    let authors = db.map(item => item.author);
    authors = Array.from(new Set(authors));
    setAuthors(authors);

    let reserves = db.map(item => item.reserve);
    reserves = Array.from(new Set(reserves));
    setReserve(reserves);

  }, []);

// estado q controla lo tipéado en los inputs y sera un objeto q agarra 
const [Listacagetoria,setLiscagetoria]=useState([]);

// estado q controla lo tipéado en los inputs y sera un objeto q agarra 
const [selenombre,setUserSeleccionado]=useState([]);

// servicio categoria  lanza error ya que pedido consulta a otra db
// al comentar todo pedido funciona listar categoria
// falta unificar todo en un a db
useEffect(() => {
    
  const Listacagetoria = async () => {
      try {
          const respuesta = await fetch(`http://localhost:4005/liscategoria/catelista`);
          if (!respuesta.ok) {
              throw new Error('Error al obtener los datos para listas los pedidos');
          }

          const datos = await respuesta.json();
          setLiscagetoria(datos);
      
      }  catch (err) {
          setError(err.message);
      }
  };

  Listacagetoria();
}, []);



const liscategoria = Listacagetoria.map(Listar => Listar.cate_descripcion);

console.log('categoria',liscategoria);

/* // servicio pedidos
useEffect(() => {
  let usuario =JSON.parse(localStorage.getItem('user'));
  console.log('jj',usuario.name);
  
  const pedidoListado = async () => {
      try {
          const respuesta = await fetch(`http://localhost:4005/lispedido/p/?q=${usuario.name}`);
          if (!respuesta.ok) {
              throw new Error('Error al obtener los datos para listas los pedidos');
          }

          const datos = await respuesta.json();
          setUserSeleccionado(datos);
      
      }  catch (err) {
          setError(err.message);
      }
  };

  pedidoListado();
}, []);

const fechasPrestamo = selenombre.map(selenombre => selenombre.fecha_prestamo);
console.log('fechaprestamo',fechasPrestamo);


//validando si la fecha esta cargada
const fechavacia = [fechasPrestamo]; // Suponiendo que esta es la fuente de fechas

const fechasOriginales = fechasPrestamo;

const convertirFechas = (fechas) => {
    if (fechas.length === 0) {
        return ['No hay pedidos']; // Mensaje si no hay fechas
    }
// conversion de fecha DD/MM/YYYY y con el dia correspondiente quedando Formato "Día dd/mm/yyyy"
    return fechas.map(fecha => {
        const fechaObj = new Date(fecha);
        const diaDeLaSemana = fechaObj.toLocaleDateString('es-ES', { weekday: 'long' }); // Día de la semana
        const dia = String(fechaObj.getDate()).padStart(2, '0'); // Día
        const mes = String(fechaObj.getMonth() + 1).padStart(2, '0'); // Mes
        const año = fechaObj.getFullYear(); // Año

        return `${diaDeLaSemana} ${dia}/${mes}/${año}`; // Formato "Día dd/mm/yyyy"
    });
};

const fechasConvertidas = convertirFechas(fechasOriginales);
console.log(fechasConvertidas); // Output: ['No hay pedidos']
//fin de la conversion 0-0
 */

  return (
    <MenuWrapper id='menu'>
      <div id='menuContainer'>
        <div className='menuHeader'>
          <div id='pageLogo'>
            <Link className='link' to='/'>
              <img src='https://w4w7a3s7.stackpathcdn.com/wp-content/uploads/2018/10/logo.png' alt='logo'></img>
            </Link>
          </div>
          <div className='cart' onClick={openCart}>
            <div>
              {cart.length > 0 ? 
                <div className='itemsInCart'>
                  <span>{cart.length}</span>
                </div>
              : null}
              <img src={ '/icons/bag.svg'} alt='bag'></img>
            </div>
          </div>

          
        </div>
        <div id='subMenu1' className='menuBlock'>
          <div onClick={() => openSubMenu('subMenu1')} className='menuTitle'>
            <span>Carreras</span>
          </div>
          <ul>
            {collections.map((item, index) => 
              <li key={`collection${index}`}><Link className='link' to={`/collections/${item}`}>{item}</Link></li>
            )}
          </ul>
        </div>

        <div id='subMenu2' className='menuBlock'>
          <div onClick={() => openSubMenu('subMenu2')} className='menuTitle'>
            <span>Autores</span>
          </div>
          <ul>
            {Listacagetoria.map((item, index) => 
              <li key={`authors${index}`}><Link className='link' to={`/authors/${item.idCategorias}`}>{item.cate_descripcion}</Link></li>
            )}
          </ul>     
        </div>

        <div id='subMenu3' className='menuBlock'>
          <div  onClick={() => openSubMenu('subMenu3')} className='menuTitle'>
            <span>Pedidos</span>
          </div>
          <ul>
{/* 
            {fechasConvertidas.map((item, index) => 
              <li key={`nombre${index}`}><Link className='link' to={`/pedidos`}>{item}</Link></li>
            )}
             */}
          </ul>
          </div>



      </div>
    </MenuWrapper>
  );

} 

export default Menu;

