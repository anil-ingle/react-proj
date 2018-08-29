
import * as styled from 'styled-components';
import { Button } from 'antd';

export const HeaderContainer = styled.default.div`
    width: 100%;
    height: 70px;
    display: flex;
    flex: 1 1 0%;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5em;
    color: purple;
    background: linear-gradient(154deg,#008fe2,#00b29c);
    background-color: transparent !important;
`;
export const Home = styled.default.div`
    align-items: center;
`;

export const MyWallet = styled.default.div`
    align-items: center;
`;
export const History = styled.default.div`
    -items: center;
`;
export const LoginContainer = styled.default.div`
    width: 100%;
    height: 100%;
    padding-bottom: 25px;
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    background: linear-gradient(154deg,#6cafa6,#474848);
    background-color: transparent !important;
`;
export const FormPage = styled.default.div`
    width: 400px;
`;
export const DisplayFormButton = styled.default.div`
    width: 100px;
`;
export const DivheaderNavRight = styled.default.div`
    margin: 15px 20px 0 0,
    display: flex,
    flexDirection: row
`;
export const MenuButton = styled.default.button`
.Button
    background-color: #62c0dc;
    border: 0px;
`;
export const NameLogOutDiv = styled.default.div`
    display: flex;
    padding-top: 5px;
    
`;
export const NameHeaderP = styled.default.p`
    font-size: 18px;
    line-height:1;
    padding-right:40px;
    padding-top: 10px;

`;
export const NameHeader = styled.default.div`
        color: #FFF;
        padding-right: 0px;
`;
export const BlockDiv = styled.default.div`
   
`;
export const HeaderLineTitle = styled.default.h2`
    color: white;
    font-size: 25px;
    margin: 5px;
    font-family: monospace;
`;
export const Registration = styled.default.button`
    background: transparent;
    border: 0px;
    color: white;
    cursor: pointer;
`;
export const ForgetPasswordButton = styled.default.button`
    background: transparent;
    border: 0px;
    color: white;
    float: right;
    cursor: pointer;
`;

export const FButton = styled.default.button`
        background-color: transparent;
        border: 0px;
        font-size: 1.1rem;
        color: white;
`;