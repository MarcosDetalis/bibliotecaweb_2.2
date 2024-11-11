import styled from "styled-components";
const CheckoutContainer = styled.div`
  .listTitle {
    overflow: hidden;
    padding-left: 1.6rem;
    padding-top: 1.6rem;
    margin-right: 1.6rem;
    margin-bottom: 1.2rem;
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
  .checkoutWrapper {
    padding: 1.6rem;
    display: flex;
    flex-direction: column;
    min-height: 60vh;
   
     
    
    .user {
      margin-bottom: 1.2rem;
      font-size: 2rem;
    }
    .total {
      font-weight: bold;
    }
  }



  



// .box {
//   width: 300px;
//   padding: 40px;
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%,-50%);
//   background: #191919;
//   border: none;
//   border-radius: 25px;
//   text-align: center;
// }
// h1{
//   color: white;
//   text-transform: uppercase;
//   font-weight: 500;
//   letter-spacing: 5px;
// }
 

#date,.hora{
  border: 2px solid black;
  display: block;
  margin: 20px auto;
  padding: 15px 45px;
  width: 90%;
  outline: none;
  color: red;
  border-radius: 25px;
  text-align: center;
  transition: 250ms width ease, 250ms border-color ease;
}
 
#submit{
  border: 2px solid black;
  
  display: block;
  margin: 20px auto;
  text-align: center;
  padding: 15px 40px;
  outline: none;
  background: #2ecc71;
  border-radius: 25px;
  cursor: pointer;
  text-transform: uppercase;
  font-weight: 200;
  transition: 250ms background ease;
  -webkit-transition: 250ms background ease;
  -moz-transition: 250ms background ease;
  -o-transition: 250ms background ease;
}
/************** 
   On Hover
***************/
#submit:hover{
  background: black;
}

input[type="time"]::-webkit-calendar-picker-indicator {
  filter: invert(0.5) sepia(1) saturate(5) hue-rotate(175deg);
  background-color: red;
    border-radius: 50%;
    padding: 4px;
    background:#fff url(https://cdn1.iconfinder.com/data/icons/cc_mono_icon_set/blacks/16x16/calendar_2.png)  70% 50% no-repeat ;
 
}
input[type="time"]{
  border: 2px solid black;
  display: block;
  margin: 20px auto;
  padding: 15px 45px;
   
  color: red;
  border-radius: 25px;
  text-align: center;
  transition: 250ms width ease, 250ms border-color ease;
}

input[type="date"]::-webkit-calendar-picker-indicator, input[type="time"]::-webkit-calendar-picker-indicator{
    cursor: pointer;
    border-radius: 4px;
    margin-right: 2px;
    opacity: 0.9;
    filter: invert(0.9);
    color:red;
}

`;

export default CheckoutContainer;