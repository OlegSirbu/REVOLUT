import styled, { css } from 'styled-components';

export const SliderStyled = styled.div`
  border-top: 1px solid;
  color: black;
  text-transform: uppercase;
  .carousel {
    height: 100px;
  }
  .carousel-inner {
    background: #28a745;
    padding: 0 70px;
    display: flex;
    height: 100%;
    align-items: center;
  }
  .carousel-indicators {
    margin-bottom: 0;
  }
  .carousel-indicators li {
    width: 5px;
    height: 5px;
    border-radius: 50%;
  }
  .carousel-control-next, .carousel-control-prev {
    width: 6%;
  }
`

export const CurrencyWrapper = styled.section`
   min-width: 500px;
   color: black;
  .is-invalid {
    border: 2px solid red;
  }
`;

export const Label = styled.label`
  font-size: 24px;
`;
export const SubLabel = styled.span`
  font-size: 16px;
`;

export const InputStyled = styled.div`
  position: relative;
   input {
      width: 200px;
   }
`;
export const Column = styled.div`
  display: flex;
  flex-direction: column;
   ${(p:any) => p.right && css`
     margin-left: auto;
   `};
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Flex = styled.div`
  flex:1;
`;

export const Text = styled.div`
   font-size: ${(p:any) => p.fs ? `${p.fs}px` : '16px'};
   ${(p:any) => p.bottom && css`
    align-items: flex-end;
     flex: 1;
     display: flex;
      justify-content: flex-end;
  `}
`;

export const SubTest = styled.span`
   font-size: ${(p:any) => p.fs ? `${p.fs}px` : '12px'};
  position: absolute;
  top: -48px;
`


