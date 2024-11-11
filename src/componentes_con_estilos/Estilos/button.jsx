import styled from "styled-components";

const Wrapper = styled.div`
  button {
    margin: 0 auto;
    width: 100%;
    box-sizing: border-box;
    cursor: pointer;
    border: inherit;
    margin: 0;
    padding: 0;
    font-size: inherit;
    background: transparent;
    .buttonWrapper {
      transition: 0.2s;
      position: relative;
      display: flex;
      flex-direction: row;
      overflow: hidden;
      margin: 0 auto;
      border-radius: 25px;
      border: 1px solid ${(props) => props.theme.green};
      background: ${(props) => props.theme.green};
      > div {
        border-radius: 25px;
        width: 100%;
        transition: all 0.3s;
        color: white;
        text-transform: uppercase;
        display: flex;
        padding: 1rem;
        box-sizing: border-box;
        img {
          display: block;
          margin: auto;
          height: 25px;
        }
        span {
          margin: auto;
          font-size: 1.4rem;
          font-weight: 900;
        }
      }
      > div:first-child {
        background: ${(props) => props.theme.greenTop};
        opacity: 0;
        position: absolute;
        left: -100%;
        top: 0;
        bottom: 0;
      }
    }
  }
  .disableButton {
    z-index: -1;
    opacity: 0.6;
    pointer-events: none;
    background: ${(props) => props.theme.disable} !important;
    border-color: ${(props) => props.theme.disable} !important;
  }
  @media (hover: hover) {
    .buttonWrapper:hover {
      border: 1px solid white;
      box-shadow: 0 0 10px 4px ${(props) => props.theme.greenTop} !important;
      > div:first-child {
        left: 0;
        opacity: 1;
      }
      > div:last-child {
        transform: translateX(100%);
      }
    }
  }
`;

export default Wrapper;
