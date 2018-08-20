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
// export const UnAvailableSlot = styled.default.button`
//     width: 100px;
//     height: 50px;
//      margin:5px;
//     background: red;
//     text-align: center;
//     padding-top: 10px;
//     cursor: pointer;
// `;

export const DisplayFlex = styled.default.div`
   
`;
export const ButtonSubmit = styled.default.button`
    font-weight: bold;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: green;
    width: 100%;
    justify-content: center;
    margin: 25px 0px 25px 0px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;

`;
export const SlotDiv = styled.default.div`
padding-left: 25px;
color: forestgreen;
font-size: 16px;
`;
export const SlotArea = styled.default.div`
`;