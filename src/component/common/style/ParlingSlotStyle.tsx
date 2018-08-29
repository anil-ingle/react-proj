import * as styled from 'styled-components';

export const ParkingSlotContainer = styled.default.div`
    display: flex;
    height: 250px;
    padding: 10px;
    margin: 15px;
    border: 1px solid rgb(208, 204, 203);
    background-color: #776767;
    background-image: url("../../../images/images.png");
    flex-direction: column;
`;
export const Slot = styled.default.button<{ isReserved: boolean }>`
    width: 100px;
    height: 50px;
     margin:5px;
    background: ${props => props.isReserved ? 'red' : 'green'};
    text-align: center;
    padding-top: 10px;
    cursor: pointer;

`;

export const DisplayFlex = styled.default.div`
   
`;
