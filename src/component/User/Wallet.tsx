import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import * as React from 'react';
import * as styled from 'styled-components';
import { connect } from 'react-redux';

const Container = styled.default.div`
width: 100%;
 height: 500px; 
display: flex;
flex-direction: column;
flex: 1 1 0%;
 align-items: center; 
justify-content: center;
font-size: 1.5em;
color: purple;
background: linear-gradient(154deg, #e0e6ec, #273542);
background-color: transparent !important;
`;
const HeadingContent = styled.default.div`
    padding-top: 5px;
`;
const DivSep = styled.default.div`
    padding-top: 5px;
`;
const InputText = styled.default.input`
    color: lightslategrey;
    padding-left: 3px;
`;
const DivBlock = styled.default.div`
    padding-top: 1px;
`;
const TextContent = styled.default.div`
    color: darkgreen;
    padding-left: 5px;

`;
const HeadingLineTitle = styled.default.h2`
    padding-top: 5px;
`;
const WalletContainer = styled.default.div`
    padding-top: 5px;
`;
type StoreProps = {
};

type DispatchProps = {
};

type Props = DispatchProps & StoreProps & {};

class Wallet extends React.Component {

    render() {
        return (
            <Container style={{ display: 'flex' }}>
                <HeadingContent>
                    <HeadingLineTitle>
                        My Wallet
                    </HeadingLineTitle>
                </HeadingContent>
                <WalletContainer>
                    <DivSep>
                        <DivBlock><TextContent>Name</TextContent></DivBlock>
                        <DivBlock><InputText value="anil Ingle" /></DivBlock>
                    </DivSep>
                    <DivSep>
                        <DivBlock><TextContent>Email</TextContent></DivBlock>
                        <DivBlock><InputText value="anil@gmail.com" /></DivBlock>
                    </DivSep>
                    <DivSep>
                        <DivBlock><TextContent>Mobile Number </TextContent></DivBlock>
                        <DivBlock><InputText value="9874563210" /></DivBlock>
                    </DivSep>
                    <DivSep>
                        <DivBlock><TextContent>Balance </TextContent></DivBlock>
                        <DivBlock><InputText value="9823" />
                        </DivBlock>
                    </DivSep>
                </WalletContainer>
            </Container>
        );
    }
}
// export  User;
const mapStateToProps = (store: any) => {
    return {
    };
};

export default connect<StoreProps, DispatchProps>(
    mapStateToProps,
    {

    }
)(Wallet);