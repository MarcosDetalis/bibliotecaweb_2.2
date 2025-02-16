import styled from "styled-components";
const LogInContainer = styled.div`
  background: linear-gradient(90deg, #4b6cb7 0%, #182848 100%);
   
  color: white;
  padding: 1.6rem;
  height: 100vh;
  box-sizing: border-box;
  display: grid;
  place-items: center;

  
  .login {
  width: 360px;
  padding: 8% 0 0;
  margin: auto;
  font-family: 'Comfortaa';
}

.form {
  position: relative;
  z-index: 1;
  background: #FFFFFF;
  border-radius: 10px;
  max-width: 360px;
  margin: 0 auto 100px;
  padding: 45px;
  text-align: center;
}

.form input {
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  border-radius: 5px;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  font-family: 'Comfortaa';
}

.form input:focus {
  background: #dbdbdb;
}

.form button {
  font-family: 'Comfortaa';
  text-transform: uppercase;
  outline: 0;
  background: #4b6cb7;
  width: 100%;
  border: 0;
  border-radius: 5px;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
}

.form button:active {
  background: #395591;
}

.form span {
  font-size: 40px;
  color: #4b6cb7;
  margin-bottom: 25px;
  display: block;
}

.form p.error {
  margin: 0 0 10px 10px;
  text-align: left;
  font-size: 10px;
  color: red;
}
`;

export default LogInContainer;