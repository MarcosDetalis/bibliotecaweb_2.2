import styled from "styled-components";

const Mobile = styled.nav`
  z-index: 10;
  position: fixed;
  bottom: 0;
  height: 60px;
  top: auto;
  width: 100%;
  background: ${(props) => props.theme.black};
  .navWrapper {
    .navList {
      width: 100%;
      display: flex;
      justify-content: space-evenly;
      list-style: none;
      margin: 1rem 0;
      li {
        margin: 0;
        padding: 0.8rem;
        font-size: 1.3rem;
        .link {
          text-decoration: none;
          color: inherit;
          display: block;
        }
        img {
          display: inline-block;
          vertical-align: middle;
        }
        .cart {
          position: relative;
          .itemsInCart {
            color: #fff;
            position: absolute;
            right: -1.6rem;
            top: -0.6rem;
            font-size: 1.4rem;
            aspect-ratio: 1;
            background: ${(props) => props.theme.red};
            width: 1.8rem;
            padding: 0.3rem;
            border-radius: 25px;
            text-align: center;
          }
        }
      }
    }
  }
`;


export default Mobile;