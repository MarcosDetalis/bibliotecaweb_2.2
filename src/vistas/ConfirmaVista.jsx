import Checkout from "../componentes_con_estilos/Confirmar";
import PageWrapper from "../componentes_con_estilos/PageEnvuelta";
import { useEffect } from "react";


function CheckoutView() {
  useEffect(() => {
    window.document.title = "Checkout";
  }, []);

  return (
   // <PageWrapper>
      <Checkout />
   // </PageWrapper>
  );
}

export default CheckoutView;
