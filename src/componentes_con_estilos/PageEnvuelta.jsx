 
import Nav from "./Navbar";
import Cart from "./Carrito";
import Menu from "./Menu";
import Footer from "./Footer";
import Detail from "./Detalles";
import { useContext } from "react";
import { UserCont } from "../context/UserContext";

import Wrapper from './Estilos/PageEnvuelta'

function PageWrapper({ children }) {
  const { productDetail } = useContext(UserCont);

  return (
    <Wrapper onUpdate={window.scrollTo(0, 0)}>
      <Nav />
      <Menu />
      <Cart />
      <Detail product={productDetail} />
      <div id="pageContent">
        <div id="mask"></div>
        {children}
        <Footer />
      </div>
    </Wrapper>
  );
}

export default PageWrapper;
