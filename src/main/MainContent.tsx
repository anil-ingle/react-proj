import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import * as React from 'react';
import { Route, Switch } from 'react-router';
import * as styled from 'styled-components';
import LoginPage from '../component/login/LoginPage';
import User from '../component/User/User';
import Header from '../component/Header';
import Wallet from '../component/User/Wallet';
import OrderHistory from '../component/User/OrderHistory';
import Owner from '../component/Owner/Owner';
import OwnerWallet from '../component/Owner/OwnerWallet';
import Admin from '../component/Admin/Admin';
import Otp from '../component/login/Otp';
import PasswordResetPage from '../component/login/PasswordResetPage';
import index from '../component/page/register/index';

const MainContainer = styled.default.div`
    width: 100%;
    height: 100%;
`;
class MainContent extends React.Component {
    render() {
        let info = JSON.parse(sessionStorage.getItem('info') as any);
        if (info && info.id > 0) {
            return (
                <MainContainer>
                    <Header />
                    <Switch>
                        <Route exact path={'/'} component={LoginPage} />
                        <Route exact path={'/Owner'} component={Owner} />
                        <Route exact path={'/Admin'} component={Admin} />
                        <Route exact path={'/User'} component={User} />
                        <Route exact path={'/User/Wallet'} component={Wallet} />
                        <Route exact path={'/Owner/OwnerWallet'} component={OwnerWallet} />
                        <Route exact path={'/User/OrderHistory'} component={OrderHistory} />
                    </Switch>
                </MainContainer >
            );
        } else if (window.otp === true) {
            return (
                <MainContainer>
                    <Switch>
                        <Route exact path={'/'} component={LoginPage} />
                        <Route exact path={'/Otp'} component={Otp} />
                    </Switch>
                </MainContainer >
            );
        } else if (window.resetPage === true) {
            return (
                <MainContainer>
                    <Switch>
                        <Route exact path={'/'} component={LoginPage} />
                        <Route exact path={'/PasswordResetPage'} component={PasswordResetPage} />
                    </Switch>
                </MainContainer >
            );
        } else if (window.reg === true) {
            return (
                <MainContainer>
                    <Switch>
                        <Route exact path={'/'} component={LoginPage} />
                        <Route exact path={'/Registration'} component={index} />
                    </Switch>
                </MainContainer >
            );
        } else {
            return (
                <MainContainer>
                    <Switch>
                        <Route exact path={'/*'} component={LoginPage} />
                    </Switch>
                </MainContainer >
            );
        }

    }
}
export default MainContent;
