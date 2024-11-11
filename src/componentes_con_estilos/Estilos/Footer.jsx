import styled from "styled-components";
const Foot = styled.footer`
  background: ${(props) => props.theme.disable};
  .footerWrapper {
    border-top: 1px solid ${(props) => props.theme.black};
    padding: 1.6rem;
    display: grid;
    grid-template-columns: 100%;
    .footerBox {
      margin-bottom: 1.6rem;
      .boxTitle {
        overflow: hidden;
        margin-top: 1.2rem;
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
      .icon {
        display: flex;
        width: 30px;
        aspect-ratio: 1;
        height: 30px;
        margin-right: 1.2rem;
        img {
          display: block;
          margin: auto;
          height: 20px;
        }
      }
      ul {
        li {
          display: flex;
          padding-bottom: 0.6rem;
          a,
          span {
            word-break: break-word;
          }
          .link {
            color: inherit;
            text-decoration: inherit;
            text-transform: capitalize;
          }
        }
      }
      .contact {
        li {
          display: flex;
          flex-direction: row;
          padding-top: 1.2rem;
          padding-bottom: 1.2rem;
          .infoWrapper {
            a,
            span {
              display: block;
              color: ${(props) => props.theme.black};
              text-decoration: none;
            }
            span:first-child {
              font-weight: 900;
            }
            span:last-child,
            a {
              color: ${(props) => props.theme.blackHover};
            }
          }
        }
      }
      .formWrapper {
        label {
          display: block;
          margin-bottom: 1.2rem;
        }
        input {
          margin-bottom: 1.2rem;
          display: inline-block;
          box-sizing: border-box;
          width: 100%;
          font-size: inherit;
          padding: 0.6rem;
          vertical-align: middle;
          background-color: transparent;
          outline: none;
          border-radius: 25px;
          border: 1px solid ${(props) => props.theme.blackHover};
        }
        input:focus {
          border: 1px solid ${(props) => props.theme.black};
        }
        button {
          cursor: pointer;
          transition: 0.2s;
          background: ${(props) => props.theme.blackHover};
          border: none;
          box-sizing: border-box;
          color: white;
          border-radius: 25px;
          font-size: inherit;
          padding: 0.8rem 1.6rem;
        }
      }
      .externalLinks {
        list-style-type: circle;
        list-style-position: inside;
        li {
          display: list-item;
          color: ${(props) => props.theme.blackHover};
        }
      }
      .socialMedia {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        a {
          display: content;
          .icon {
            margin-right: 0 !important;
          }
        }
      }
    }
    .footerBox:last-child {
      margin-bottom: 0;
    }
  }
  @media (hover: hover) {
    .formWrapper button:hover {
      background: ${(props) => props.theme.black} !important;
    }
    .externalLinks {
      li:hover {
        transform: scale(1.05) translateX(5px);
        color: ${(props) => props.theme.black} !important;
      }
    }
  }
  @media (min-width: 920px) {
    .footerWrapper {
      grid-template-columns: repeat(4, 25%);
      .footerBox {
        margin-right: 1.6rem;
        margin-bottom: 0;
      }
      .footerBox:last-child {
        margin-right: 0;
      }
    }
  }
`;

export default Foot;
