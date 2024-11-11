import styled from "styled-components";
const LogInContainer = styled.div`
  background: ${(props) => props.theme.black};
  color: white;
  padding: 1.6rem;
  height: 100vh;
  box-sizing: border-box;
  display: grid;
  place-items: center;
  .formWrapper {
    display: flex;
    flex-direction: column;
    width: 100%;
    header {
      img {
        display: block;
        object-fit: contain;
        height: 55px;
      }
    }
    form {
      display: flex;
      flex-direction: column;
      margin-top: 3.2rem;
      .labelWrapper {
        margin-bottom: 1rem;
        overflow: hidden;
        label {
          position: relative;
          display: inline-block;
          text-transform: uppercase;
        }
      }
      input {
        margin-bottom: 3.2rem;
        display: inline-block;
        box-sizing: border-box;
        width: 100%;
        color: white;
        padding: 0.6rem;
        vertical-align: middle;
        background-color: transparent;
        outline: none;
        border-radius: 25px;
        border: 1px solid white;
      }
      input:focus {
        border: 1px solid ${(props) => props.theme.green};
      }
      .input__error {
        border: 1px solid ${(props) => props.theme.red};
        ::placeholder {
          color: ${(props) => props.theme.red};
        }
      }
      button {
        cursor: pointer;
        bottom: 0;
        top: 0;
        width: 100%;
        color: ${(props) => props.theme.black};
        font-size: 1.4rem;
        transition: all 0.3s;
        width: 100%;
        background: white;
        border-radius: 25px;
        border: 1px solid white;
        padding: 1.2rem;
        margin: 0;
        text-align: center;
        text-transform: uppercase;
      }
    }
  }
  @media (hover: hover) {
    button:hover {
      border: 1px solid white !important;
      box-shadow: 0 0 10px 4px ${(props) => props.theme.greenTop} !important;
      background: ${(props) => props.theme.greenTop} !important;
      color: white !important;
    }
  }
  @media (min-width: 920px) {
    .formWrapper {
      width: 300px !important;
    }
  }
`;

export default LogInContainer;