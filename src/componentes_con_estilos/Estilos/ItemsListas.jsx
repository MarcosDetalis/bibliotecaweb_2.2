import styled from "styled-components";
const List = styled.section`
  .listTitle {
    margin: 1.6rem;
    overflow: hidden;
    h1 {
      position: relative;
      display: inline-block;
      -webkit-text-stroke: 1px ${(props) => props.theme.black};
      color: transparent;
      font-size: 3.2rem;
      font-weight: 900;
    }
    h1:after {
      content: "";
      position: absolute;
      width: 100vw;
      border-top: 1px solid ${(props) => props.theme.black};
      left: 120%;
      top: 50%;
      bottom: 50%;
    }
  }
  .listWrapper {
    box-sizing: border-box;
    display: grid;
    padding: 0.8rem;
    grid-template-columns: repeat(2, 50%);
    > div:nth-child(2n) article {
      transition-delay: 0.2s !important;
    }
  }
  @media (min-width: 920px) {
    .listTitle {
      text-align: left;
    }
    .listWrapper {
      grid-template-columns: repeat(5, calc(100% / 5));
      > div:nth-child(4n + 1) article {
        transition-delay: 0 !important;
      }
      > div:nth-child(4n + 2) article {
        transition-delay: 0.1s !important;
      }
      > div:nth-child(4n + 3) article {
        transition-delay: 0.2s !important;
      }
      > div:nth-child(4n + 4) article {
        transition-delay: 0.3s !important;
      }
    }
  }
`;
export default List;