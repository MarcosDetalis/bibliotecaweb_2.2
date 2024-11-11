import styled from "styled-components";


const Producto = styled.article`
  opacity: 0;
  transition: 0.4s;
  text-align: center;
  padding: 1rem 0.8rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  .link {
    display: contents;
    color: inherit;
    text-decoration: inherit;
  }
  .addToCart__mobile {
    width: 100%;
    img {
      height: 20px;
    }
  }
  .addToCart__desktop {
    display: none;
    visibility: hidden;
    position: absolute;
    left: 0;
    right: 0;
    bottom: 2.6rem;
    button {
      width: 70%;
    }
  }
  .imgContainer {
    position: relative;
    cursor: pointer;
    aspect-ratio: 3 / 4;
    margin-bottom: 1rem;
    overflow: hidden;
    .imageShow {
      transition: 0.8s;
      position: absolute;
      inset: 0;
      background-image: url(${p => p.$img});
      background-position: center center;
      background-repeat: no-repeat;
      overflow: hidden;
      background-size: contain;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .collection {
      font-style: italic;
      margin-bottom: 0.4rem;
    }
    .title {
      cursor: pointer;
      text-transform: uppercase;
      margin-bottom: 0.4rem;
      font-weight: 700;
    }
    .price {
      font-weight: 900;
      margin-top: 0.6rem;
      margin-bottom: 3rem;
    }
  }
  .disableImg {
    .imageShow {
      opacity: 0.6;
    }
    .disableText {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      padding: 1.4rem;
      background: transparent;
      background-image: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 0),
        rgba(255, 255, 255, 0.9)
      );
      span {
        margin: 0 0.6rem;
        font-weight: 900;
      }
    }
  }
  .disableButton {
    z-index: -1;
    opacity: 0.6;
    background: ${(props) => props.theme.disable} !important;
    border-color: ${(props) => props.theme.disable} !important;
  }
  @media (hover: hover) {
    :hover {
      .addToCart__desktop {
        visibility: visible;
      }
    }
  }
  @media (min-width: 920px) {
    .addToCart__desktop {
      display: block;
    }
    .addToCart__mobile {
      display: none !important;
    }
  }
`;

export default Producto;
