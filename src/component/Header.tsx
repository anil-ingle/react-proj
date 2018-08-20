import { Button } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { push } from 'connected-react-router/immutable';
import * as React from 'react';
import { connect } from 'react-redux';
import {
    HeaderContainer, History, Home, MyWallet,
    DivheaderNavRight, NameLogOutDiv, BlockDiv, NameHeader, NameHeaderP
} from './App.Style';

type DispatchProps = {
    onHome: any;
    onWallet: any;
    onHistory: any;
    logout: any;
};

type StoreProps = {
    data: any,
};

type Props = DispatchProps & StoreProps & {};

type State = {
    info: any;

};

export class Header extends React.Component<Props, State> {
    state = {
        info: {} as any,

    };
    onLogout = () => {
        console.log('logout');
        sessionStorage.removeItem('info');
        this.props.logout();
    }
    componentDidMount() {
        let info = JSON.parse(sessionStorage.getItem('info') as any);
        this.setState({ info });
    }
    render() {
        let whDisplay = 'none';
        let info = JSON.parse(sessionStorage.getItem('info') as any);
        if (info && info.id > 0) {
            whDisplay = 'flex';

        }

        let style = {
            backgroundColor: 'transparent'
            , border: '0px', fontSize: '1.1rem', color: 'white'
        };
        let styleLogout = {
            backgroundColor: 'transparent'
            , border: '0px', fontSize: '1.1rem', color: 'white'
        };
        return (
            <HeaderContainer>
                <Home>
                    <Button
                        type="default"
                        onClick={() => this.props.onHome()}
                        style={style}
                    >
                        Home
                    </Button>
                </Home>
                <MyWallet style={{ display: whDisplay }} >
                    <Button
                        type="default"
                        onClick={() => this.props.onWallet()}
                        style={style}
                    >
                        My Wallet
                    </Button>

                </MyWallet  >
                <History style={{ display: whDisplay }}>
                    <Button
                        type="default"
                        onClick={() => this.props.onHistory()}
                        style={style}
                    >
                        History
                    </Button>

                </History>
                <NameLogOutDiv style={{ display: whDisplay }} >
                    <DivheaderNavRight>
                        <NameHeader >
                            <NameHeaderP>
                                {`Welcome ${this.state.info.fName}`}
                            </NameHeaderP>
                        </NameHeader>

                    </DivheaderNavRight>
                    <BlockDiv>
                        <Button
                            type="default"
                            onClick={() => this.onLogout()}
                            style={styleLogout}
                        >
                            Logout
                        </Button></BlockDiv>
                </NameLogOutDiv>
            </HeaderContainer>
        );
    }
}

export default connect<StoreProps, DispatchProps, {}, any>(
    s => ({
        data: s, // selData(store)
    }),
    {
        onHome: () => push('/User'),
        onWallet: () => push('/User/wallet'),
        onHistory: () => push('/User/OrderHistory'),
        logout: () => push('/'),
    }
)(Header);
