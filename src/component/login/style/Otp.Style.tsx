import * as styled from 'styled-components';

export const ForgetPasswordContainer = styled.default.div`
    width: 100%;
    height: 100%;
    top:25%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;
export const BlockDiv = styled.default.div`
    width: fit-content;
    align-items: center;
    margin: 0px;
    padding-bottom: 10px;
    padding-right:5px;
`;
export const InputDiv = styled.default.div`
    width: 200px;
    align-items: center;
    margin: 0px;
    padding-bottom: 10px;
    padding-right:5px;
`;
export const OtpContainer = styled.default.div`
    width: 100%;
    height:inherited;
    display: flex;
    align-items: center;
    flex-direction: column;
    position:absolute;
    padding-top: 20%;
    height: inherit;
    background: linear-gradient(154deg,#887946,#442039);
    background-color: transparent !important;
`;
export const ButtonStyle = styled.default.div`
    display: flex;
    width: 200px;
    flex-direction: row;
    justify-content: flex-end;
`;
export const ButtonDiv = styled.default.div`
    border-top: 1px solid #e8e8e8;
    padding-top: 10px;
    width:100%;
    display: flex;
    justify-content: flex-end;
`;
export const BDiv = styled.default.div`
   padding-left:5px;
`;
export const SpanDiv = styled.default.div`
   height:10px;
`;
export const ErrorSpan = styled.default.span`
   color:white;
   padding-left: 10px;
`;