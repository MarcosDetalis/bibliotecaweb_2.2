 

 
import PageWrapper from "../componentes_con_estilos/PageEnvuelta";
import { QRCode } from 'react-qrcode-logo';
import './../componentes_con_estilos/Estilos/style.css'
import React, { useEffect, useState } from 'react';
 
export default function PedidosVista() {

  //se añade de la version original para los formatos
  const downloadCode1 = () => {
    const canvas = document.getElementById("react-qrcode-logo");
    if(canvas) {
      const pngUrl = canvas
        .toDataURL("image/png")
        .replace("image/png", "image/octet-stream");
      let downloadLink = document.createElement("a");
      downloadLink.href = pngUrl
      downloadLink.download = `your_name.png`;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  }

  // Estado para almacenar los usuarios
  const [listado, setListados] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [result, setResult] = useState([]);
    const downloadCode = () => {
        const canvas = document.getElementById("react-qrcode-logo");
        if(canvas) {
          const pngUrl = canvas
            .toDataURL("image/png")
            .replace("image/png", "image/octet-stream");
          let downloadLink = document.createElement("a");
          downloadLink.href = pngUrl
          downloadLink.download = `your_name.png`;
          document.body.appendChild(downloadLink);
          downloadLink.click();
          document.body.removeChild(downloadLink);
        }
        
      }
    
      useEffect(() => {
        let usuario =JSON.parse(localStorage.getItem('user'));
    console.log('jj',usuario.name);
        const fetchlistados = async () => {
            try {
                const respuesta = await fetch(`http://localhost:4005/pedido/pedido/?q=${usuario.name}`);
                if (!respuesta.ok) {
                    throw new Error('Error al obtener los datos para listas los pedidos');
                }
                const datos = await respuesta.json();
                setResult(datos);
                console.log(datos);
            }  catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            } 
        };
  
        fetchlistados();
    }, []); // Dependencias vacías para que se ejecute solo al montar
  
    

    console.log('res',result);
  return (

    <PageWrapper>
  {/* titulo inicio */}
  <div className='listTitle'>
<h1>Listado de Pedidos</h1>
      </div>
{/* titulo fin */}



    {/* qr diseño inicio */}
<div class="contenedor">
  <div class="hijo"> 
  <QRCode
    size={256}
    style={{ height: "auto", maxWidth: "10%", width: "10%"}}
    value="23423432"
    viewBox={`0 0 256 256`}
     />
     
     </div>
</div> {/* qr diseño fin */}






<div>  {/* inicio del map  */}  


        {result.map(number => (
          <li key={number}>
   {/* cambiar de nuevo      */}
  <li className="li_lis">{number.nombre}</li>
  <li className="li_lis">{number.titulo}</li>
	<li className="li_lis">{number.cantidad}</li>
  <li className="li_lis">{number.observacion}</li>
  <li className="li_lis">{number.estado}</li>
	

          </li>
          
        ))}
    
</div>  {/* fin del map */}


<button className="btnd" onClick={() => downloadCode()}>Descargar  QR</button>
 
</PageWrapper>
     
 


    
  ) // cierra el return
} //cierra el PedidosVista




// import PageWrapper from "../componentes_con_estilos/PageEnvuelta";
// import { QRCode } from 'react-qrcode-logo';
// import './../componentes_con_estilos/Estilos/style.css'
 
// export default function PedidosVista() {

//     const downloadCode = () => {
//         const canvas = document.getElementById("react-qrcode-logo");
//         if(canvas) {
//           const pngUrl = canvas
//             .toDataURL("image/png")
//             .replace("image/png", "image/octet-stream");
//           let downloadLink = document.createElement("a");
//           downloadLink.href = pngUrl
//           downloadLink.download = `your_name.png`;
//           document.body.appendChild(downloadLink);
//           downloadLink.click();
//           document.body.removeChild(downloadLink);
//         }
//       }

      
    
//   return (

//     <PageWrapper>

// <div className='listTitle'>
// <h1>Listado de Pedidos</h1>
//       </div>


      
//   <div class="contenedor">
//   <div class="hijo"> 
//   <QRCode
//     size={256}
//     style={{ height: "auto", maxWidth: "10%", width: "10%"}}
//     value="23423432"
//     viewBox={`0 0 256 256`}
//      />
     
//      </div>
// </div>

    
    
//     <ol className="ol_lis">
// 	<li className="li_lis">Matematicas - Tercer Siclo</li>
// 	<li className="li_lis">Analisi de Sistemas - kendell & kendal</li>
// 	<li className="li_lis">Lengua Catellana</li>
//   <li className="li_lis">Quiren 758 mil de aumento</li>
//   <li className="li_lis">Trabajen </li>
//   <li className="li_lis">Switch on the power button.</li>

// </ol>

 

     
//   <button className="btnd" onClick={() => downloadCode()}>Descargar  QR</button>


//   </PageWrapper>
//   )
// }
