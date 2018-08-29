import { Button } from 'antd';
import { push } from 'connected-react-router/immutable';
import * as React from 'react';
import { connect } from 'react-redux';
import { selLogin } from '../ecall/login/selectors';
import * as SC from './App.Style';
import { EParkingStore } from '../ecall/types';

// { BlockDiv, DivheaderNavRight, HeaderContainer, History, Home, MyWallet, NameHeader, NameHeaderP, NameLogOutDiv }
type DispatchProps = {
    onUserHome: any;
    onWallet: any;
    onHistory: any;
    logout: any;
    onOwner: any;
    onOwnerWallet: any;
    onAdmin: any;
};

type StoreProps = {
    data: LoginDataResponseImMap,
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

    componentWillReceiveProps(props: any) {
        const info = this.props.data.get('data').toJS();
        if (info.id > 0) {
            this.setState({ info });
        }

    }
    render() {
        let whDisplay = 'none';
        let displayPage = [] as any;
        let info = JSON.parse(sessionStorage.getItem('info') as any);
        let style = {
            backgroundColor: 'transparent'
            , border: '0px', fontSize: '1.1rem', color: 'white'
        };
        if (info && info.roll === 1) {
            whDisplay = 'flex';
            displayPage.push(<SC.Home key={132}>
                <SC.FButton
                    type="default"
                    onClick={() => this.props.onUserHome()}
                >
                    Home
                </SC.FButton>
            </SC.Home>);
            displayPage.push(
                <SC.MyWallet style={{ display: whDisplay }} key={1234}>
                    <SC.FButton
                        type="default"
                        onClick={() => this.props.onWallet()}
                    >
                        My Wallet
                    </SC.FButton>

                </SC.MyWallet  >);
            displayPage.push(<SC.History style={{ display: whDisplay }} key={132123}>
                <SC.FButton
                    type="default"
                    onClick={() => this.props.onHistory()}
                >
                    History
                </SC.FButton>
            </SC.History>);
        } else if (info && info.roll === 2) {
            whDisplay = 'flex';
            displayPage.push(<SC.Home style={{ display: whDisplay }} key={13663}>
                <SC.FButton
                    type="default"
                    onClick={() => this.props.onOwner()}
                >
                    Home
                </SC.FButton>
            </SC.Home>);
            displayPage.push(
                <SC.MyWallet style={{ display: whDisplay }} key={1234}>
                    <SC.FButton
                        type="default"
                        onClick={() => this.props.onOwnerWallet()}
                    >
                        My Wallet
                    </SC.FButton>

                </SC.MyWallet  >);
        } else if (info && info.roll === 3) { // FIXME: NO hard coding
            whDisplay = 'flex';
            // FIXME: NO hard coding, No external style UNLESS ABSOLUTELY NECESSARY
            displayPage.push(<SC.Home style={{ display: whDisplay }} key={1311663}>
                <SC.FButton
                    type="default"
                    onClick={() => this.props.onAdmin()}
                >
                    Home
                </SC.FButton>
            </SC.Home>);

        }
        return (
            <SC.HeaderContainer>
                {displayPage}
                <SC.NameLogOutDiv style={{ display: whDisplay }} >
                    <SC.DivheaderNavRight>
                        <SC.NameHeader >
                            <SC.NameHeaderP>
                                {`Welcome ${this.state.info.fName}`}
                            </SC.NameHeaderP>
                        </SC.NameHeader>

                    </SC.DivheaderNavRight>
                    <SC.BlockDiv>
                        <SC.FButton
                            type="default"
                            onClick={() => this.onLogout()}
                        >
                            Logout
                        </SC.FButton></SC.BlockDiv>
                </SC.NameLogOutDiv>
            </SC.HeaderContainer>
        );
    }
}

export default connect<StoreProps, DispatchProps, {}, EParkingStore>(
    store => ({
        data: selLogin(store)
    }),
    {
        onUserHome: () => push('/User'),
        onOwner: () => push('/Owner'),
        onAdmin: () => push('/Admin'),
        onWallet: () => push('/User/wallet'),
        onOwnerWallet: () => push('/Owner/OwnerWallet'),
        onHistory: () => push('/User/OrderHistory'),
        logout: () => push('/'),
    }
)(Header);
