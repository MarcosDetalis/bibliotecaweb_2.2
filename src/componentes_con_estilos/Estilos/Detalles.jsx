import styled from "styled-components";

const ProductDetail = styled.div`
  transition: 0.8s;
  position: fixed;
  transform: translateY(100%);
  inset: 0;
  display: flex;
  flex-direction: column;
  z-index: 11;
  .detailWrapper {
    margin-top: auto;
    button {
      cursor: pointer;
    }
    .closeTab {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
      button {
        padding: 0;
        border: inherit;
        background: transparent;
        padding: 1.2rem 1.6rem;
        span {
          display: block;
          margin: auto;
          color: white;
        }
      }
    }
    .detalleInfo {
      background: white;
      padding: 1.6rem;
      .product {
        display: flex;
        flex-direction: row;
        gap: 1.6rem;
        margin-bottom: 1.6rem;
        .productImage {
          width: 45%;
          max-width: 100px;
          img {
            display: block;
            width: 100%;
            height: 100%;
          }
        }
        .productTags {
          display: flex;
          flex-direction: column;
          gap: 0.4rem;
          .collection {
            font-style: italic;
          }
          .title {
            font-size: 2rem;
            text-transform: uppercase;
            font-weight: 700;
          }
          .price {
            margin-top: 0.6rem;
            font-weight: 900;
          }
          .link {
            margin-top: auto;
            font-size: 1.6rem;
            color: ${(props) => props.theme.black};
          }
        }
      }
      .order {
        display: flex;
        flex-direction: column;
        margin-bottom: 1.6rem;
        .orderHeader {
          overflow: hidden;
          margin-bottom: 1.2rem;
          span {
            position: relative;
            font-weight: 700;
          }
          span:after {
            content: "";
            position: absolute;
            width: 100vw;
            border-top: 1px solid ${(props) => props.theme.black};
            left: 120%;
            top: 50%;
            bottom: 50%;
          }
        }
        label {
          margin: auto 0;
          font-weight: 700;
        }
        .quantity {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          .counter {
            display: flex;
            flex-direction: row;
            align-content: center;
            button {
              border: none;
              background: inherit;
              span {
                display: block;
              }
              .buttonDisable {
                opacity: 0.6 !important;
              }
            }
            input {
              width: 60px;
              text-align: center;
              margin: 0;
              padding: 0;
              border: none;
              pointer-events: none;
            }
          }
        }
      }
      .addToCart {
        button {
          transition: all 0.3s;
          border: none;
          width: 100%;
          padding: 0;
          margin: 0;
          border-radius: 25px;
          .buttonWrapper {
            transition: 1s;
            position: relative;
            display: flex;
            flex-direction: row;
            overflow: hidden;
            margin: 0 auto;
            border-radius: 25px;
            height: 45px;
            > div {
              border-radius: 25px;
              width: 100%;
              transition: all 0.3s;
              color: white;
              text-transform: uppercase;
              display: flex;
              padding: 1rem;
              box-sizing: border-box;
              border: 1px solid ${(props) => props.theme.black};
              background: ${(props) => props.theme.black};
              span {
                margin: auto;
                font-size: 1.4rem;
                font-weight: 700;
              }
            }
            > div:first-child {
              border: 1px solid ${(props) => props.theme.greenTop};
              background: ${(props) => props.theme.greenTop};
              opacity: 0;
              position: absolute;
              left: -100%;
              top: 0;
              bottom: 0;
            }
          }
        }
      }
    }
  }
  @media (hover: hover) {
    .link:hover {
      color: ${(props) => props.theme.green} !important;
    }
    .closeTab button:hover span {
      color: ${(props) => props.theme.black} !important;
    }
  }
  @media (min-width: 920px) {
    .detailWrapper {
      margin: auto;
      width: 40%;
      .addToCart button {
        height: 44px !important;
        font-size: inherit !important;
      }
    }
  }
`;

export default ProductDetail;