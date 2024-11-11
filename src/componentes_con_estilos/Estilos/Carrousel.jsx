import styled from "styled-components";

const ItemsContainer = styled.div`
  padding: 1.6rem;
  background: ${(props) => props.theme.disable};
  .itemHeader {
    overflow: hidden;
    margin-right: auto;
    span {
      position: relative;
      display: inline-block;
      text-transform: uppercase;
      font-weight: 700;
    }
    span:after {
      content: "";
      background-color: white;
      position: absolute;
      width: 100vw;
      border-top: 1px solid ${(props) => props.theme.black};
      left: 120%;
      top: 50%;
      bottom: 50%;
    }
  }
  .carrousel {
    overflow: hidden;
    position: relative;
    height: 250px;
    .carrouselCard {
      pointer-events: none;
      width: fit-content;
      margin: auto;
      z-index: 0;
      position: absolute;
      inset: 0;
      opacity: 0;
      transform: scale(0.8);
      transition: 1s;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      img {
        object-fit: contain;
        display: block;
        margin: auto;
      }
      .cardInfo {
        display: flex;
        flex-direction: column;
        text-align: center;
        .link {
          color: inherit;
          text-decoration: none;
        }
        .collection {
          font-style: italic;
        }
        .title {
          font-size: 1.6rem;
          text-transform: uppercase;
          font-weight: 700;
        }
      }
    }
    .carrouselCard__show {
      pointer-events: auto;
      opacity: 1;
      transform: scale(1);
    }
  }
  .list {
    width: 100%;
    z-index: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 1.2rem;
    .listItem {
      cursor: pointer;
      border-radius: 25px;
      padding: 0.8rem;
      background: ${(props) => props.theme.grey};
      border: 1px solid ${(props) => props.theme.disable};
      margin: 0 0.8rem;
      transition: 0.5s;
    }
    .listItem__active {
      background: ${(props) => props.theme.greenTop};
      box-shadow: 0 0 10px 4px ${(props) => props.theme.green};
    }
  }
  @media (hover: hover) {
    .listItem:hover {
      background: ${(props) => props.theme.greenTop};
    }
  }
  @media (min-width: 920px) {
    .carrousel {
      height: 200px;
      .carrouselCard {
        flex-direction: row;
        gap: 1.2rem;
        .cardInfo {
          text-align: left;
        }
      }
    }
  }
`;
export default ItemsContainer;