import { useContext, useState } from 'react';
import { UserCont } from '../context/UserContext';
import { Link } from 'react-router-dom';
 

import Mobile from './Estilos/Navbar'



function Nav() {
  const {cart} = useContext(UserCont);
  const [menu, setMenu] = useState(false);
  const [cartMenu, setCart] = useState(false);

  function openCart() {
    if (!cartMenu) {
      document.body.style.overflow='hidden';
      document.getElementById('navMobile').style.borderTop='1px solid white';
      document.getElementById('productDetail').removeAttribute('style');
      document.getElementById('mask').style.cssText='opacity: .6; bottom: 0;';
      document.getElementById('cart').style.cssText='transform: translateY(0); visibility: visible;';
      document.getElementById('menu').removeAttribute('style');
      setCart(!cartMenu);
      if (menu) {
        setMenu(false);
      }
    } else {
      document.body.removeAttribute('style');
      document.getElementById('navMobile').removeAttribute('style');
      document.getElementById('mask').removeAttribute('style');
      document.getElementById('cart').removeAttribute('style');
      document.getElementById('menu').removeAttribute('style');
      setCart(!cartMenu);
    }
  }

  function openMenu() {
    if (!menu) {
      document.body.style.overflow='hidden';
      document.getElementById('mask').style.cssText='opacity: .6; bottom: 0;';
      document.getElementById('cart').removeAttribute('style');
      document.getElementById('navMobile').style.borderTop='1px solid white';
      document.getElementById('menu').style.cssText='transform: translateY(0); bottom: 60px;';
      setMenu(!menu);
      if (cartMenu) {
        setCart(false);
      }
    } else {
      document.getElementById('mask').removeAttribute('style');
      document.getElementById('navMobile').removeAttribute('style');
      document.body.removeAttribute('style');
      document.getElementById('menu').removeAttribute('style');
      setMenu(!menu);
    }
  }

  return (
    <Mobile id="navMobile">
      <div className="navWrapper">
        <ul className="navList">
          <li onClick={openMenu}>
            <img
              src={"/icons/menu.svg"}
              alt="menu"
            ></img>
          </li>
          <li>
            <Link className="link" to={"/"}>
              <img
                src={"/icons/home.svg"}
                alt="home"
              ></img>
            </Link>
          </li>
          <li>
            <div className="cart" onClick={openCart}>
              {cart.length > 0 ? (
                <span className="itemsInCart">{cart.length}</span>
              ) : null}
              <img
                src={"/icons/bag.svg"}
                alt="bag"
              ></img>
            </div>
          </li>
        </ul>
      </div>
    </Mobile>
  );
}

export default Nav;