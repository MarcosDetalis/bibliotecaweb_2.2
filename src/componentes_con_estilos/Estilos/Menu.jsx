import styled from "styled-components";
const MenuWrapper = styled.div`
  position: fixed;
  z-index: 9;
  bottom: 0;
  transition: 0.5s;
  transform: translateY(100%);
  background: ${(props) => props.theme.black};
  width: 100%;
  height: calc(100% - 60px);
  overflow-y: auto;
  #menuContainer {
    overflow-y: auto;
    padding: 1.6rem;
    color: white;
    .menuHeader {
      background: ${(props) => props.theme.black};
      display: none;
      flex-direction: row;
      position: sticky;
      top: 0;
      padding: 1.2rem;
      padding-left: 0;
      #pageLogo {
        .link {
          display: content;
          img {
            display: block;
            object-fit: contain;
            width: 80%;
            height: 55px;
          }
        }
      }
      .cart {
        margin: auto;
        cursor: pointer;
        > div {
          position: relative;
          width: fit-content;
          img {
            display: block;
            height: 22px;
          }
          .itemsInCart {
            color: #fff;
            position: absolute;
            display: grid;
            place-items: center;
            right: -13px;
            top: -8px;
            background: ${(props) => props.theme.red};
            border-radius: 25px;
            aspect-ratio: 1;
            width: 20px;
            span {
              display: block;
              text-align: center;
            }
          }
        }
      }
    }
    .menuBlock {
      padding: 1.2rem;
      .menuTitle {
        cursor: pointer;
        span {
          text-transform: uppercase;
          font-size: 1.6rem;
          font-weight: 700;
        }
      }
      ul {
        height: 0;
        transition: 0.5s;
        overflow: hidden;
        margin-top: 1.2rem;
        border-bottom: 1px solid #61ce70;
        li {
          display: flex;
          cursor: pointer;
          .link {
            transition: 0.2s;
            color: inherit;
            text-decoration: inherit;
            font-size: inherit;
            padding-top: 1.2rem;
            padding-bottom: 1.2rem;
            margin-right: 1rem;
          }
        }
        li:first-child .link {
          padding-top: 0;
        }
      }
    }
  }
  #menuContainer::-webkit-scrollbar {
    width: 0.4rem;
  }
  #menuContainer::-webkit-scrollbar-track {
    background: transparent;
  }
  #menuContainer::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.green};
    border-radius: 50px;
  }
  @media (hover: hover) {
    .menuBlock {
      span:hover {
        color: ${(props) => props.theme.green} !important;
      }
      .link:hover {
        color: ${(props) => props.theme.green} !important;
      }
    }
  }
  @media (min-width: 920px) {
    display: flex;
    grid-column: menuStart / menuEnd;
    transform: translateY(0px) !important;
    bottom: 0 !important;
    width: 20% !important;
    height: 100vh;
    #menuContainer {
      width: 100%;
      padding-top: 0;
      padding-bottom: 0;
      .menuHeader {
        display: flex;
      }
      .link {
        font-size: 1.4rem !important;
      }
    }
  }
`;

export default MenuWrapper;
