import styled from "styled-components";
const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 100%);
  #pageContent {
    position: relative;
    margin-bottom: 60px;
  }
  #navDesktop {
    display: none;
  }
  @media (min-width: 920px) {
    grid-template-columns: [menuStart] 20% [menuEnd] 80% [contentEnd];
    #navMobile {
      display: none;
    }
    #pageContent {
      margin-bottom: 0;
      grid-column: menuEnd / contentEnd;
    }
  }
`;
export default Wrapper;