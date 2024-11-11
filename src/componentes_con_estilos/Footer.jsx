import { useState } from 'react';
import { Link } from 'react-router-dom';

import Foot from './Estilos/Footer'

function Footer() {
  const [email, setEmail] = useState('');

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function suscribe(e) {
    alert('Mail suscripto ' + email);
    e.preventDefault();
  }

  return (
    <Foot>
      <div className='footerWrapper'>
        <div className='footerBox'>
          <div className='boxTitle'>
            <span>Contacto</span>
          </div>
          <ul className='contact'>
            <li>
              <div className='icon'>
                <img src={ '/icons/contact/location.svg'} alt='Dirección'></img>
              </div>
              <div className='infoWrapper'>
                <span>Dirección:</span>

                <span>Juan E. O'Leary, Caacupé</span>

              </div>
            </li>
            <li>
              <div className='icon'>
                <img src={ '/icons/contact/phone.svg'} alt='Teléfono'></img>
              </div>
              <div className='infoWrapper'>
                <span>Teléfono:</span>
                <span>0511 243 819</span>
              </div>
            </li>
            <li>
              <div className='icon'>
                <img src={ '/icons/contact/email.svg'} alt='Email'></img>
              </div>
              <div className='infoWrapper'>
                <span>Email:</span>
                <a href='info@cajanegraeditora.com.ar'>caacupe@uninorte.edu.py </a>
              </div>
            </li>
          </ul>

          
        </div>
     
        <div className='footerBox'>
          <div className='boxTitle'>
            <span>Redes Sociales</span>
          </div>
          <ul className='socialMedia'>
            <li>
              <a href='/'>
                <div className='icon'>
                  <img src={ '/icons/media/twitter.svg'} alt='Twitter'></img>
                </div>
              </a>
            </li>
            <li>
              <a href='/'>
                <div className='icon'>
                  <img src={ '/icons/media/instagram.svg'} alt='Instagram'></img>
                </div>
              </a>
            </li>
            <li>
              <a href='/'>
                <div className='icon'>
                  <img src={ '/icons/media/facebook.svg'} alt='Facebook'></img>
                </div>
              </a>
            </li>
            <li>
              <a href='/'>
                <div className='icon'>
                  <img src={ '/icons/media/youtube.svg'} alt='Youtube'></img>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Foot>
  );
}

export default Footer;