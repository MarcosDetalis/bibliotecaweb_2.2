import { createContext, useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";

const UserCont = createContext();
const {Consumer, Provider} = UserCont;

function UserContext({children}) {
  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState({});
  const [cart, setCart] = useState([]);
  const [productDetail, setProductDetail] = useState({});
  const [lastPage, setLastPage] = useState('');
  const navigate= useNavigate();
  const location = useLocation();

  function logIn(form) {
    setIsLogged(true);
    setUser(form);
    localStorage.setItem('user', JSON.stringify(form));
    navigate(lastPage);
  }

  function viewDetail(product) {
    setProductDetail(product);
    document.body.style.overflow='hidden';
    document.getElementById('productDetail').style.transform='translate(0, -60px)';
    document.getElementById('mask').style.cssText='opacity: .6; bottom: 0;';
    document.getElementById('cart').removeAttribute('style');
    document.getElementById('menu').removeAttribute('style');
  }

  function addItem(item) {
    let newList = cart;
    newList.push(item);
    setCart([...newList]);
  }

  function removeItem(itemIndex) {
    let newCart = cart.filter((item, index) => index !== itemIndex);
    setCart([...newCart]);
  }

  function checkout() {
    if (isLogged) {
      navigate('/checkout');
    } else {
      navigate("/user");
      setLastPage(location.state);
    }
  }

  useEffect(() => {
    let localUser = localStorage.getItem('user');
    if (localUser) {
      setIsLogged(true);
      setUser(JSON.parse(localUser));
    }
  }, []);

  return (
    <Provider value={{
      isLogged: isLogged,
      user: user,
      cart: cart,
      productDetail: productDetail,
      viewDetail: viewDetail,
      logIn: logIn,
      addItem: addItem,
      removeItem: removeItem,
      checkout: checkout
    }}>
      {children}
    </Provider>
  );
}

export default UserContext;
export {UserCont, Consumer};