import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import * as React from 'react';
import { Route, Switch } from 'react-router';
import * as styled from 'styled-components';
import LoginPage from '../component/LoginPage';
import User from '../component/User/User';
import Header from '../component/Header';
import Footer from '../component/Footer';
import Wallet from '../component/User/Wallet';
import OrderHistory from '../component/User/OrderHistory';
const MainContainer = styled.default.div`
    width: 100%;
    height: 100%;
`;
class MainContent extends React.Component {

    render() {
        let headerDisplay = 'none';
        if (window.location.pathname === '/') {
            headerDisplay = 'none';
        } else {
            headerDisplay = 'flex';
        }
        return (
            <MainContainer>
                <div style={{ display: headerDisplay }} >
                    <Header />

                </div>
                <div style={{ display: headerDisplay, position: 'fixed', bottom: 0, backgroundColor: 'yellow' }} >
                    <Footer />
                </div>
                <Switch>
                    <Route exact path={'/'} component={LoginPage} />
                    <Route exact path={'/User'} component={User} />
                    <Route exact path={'/User/Wallet'} component={Wallet} />
                    <Route exact path={'/User/OrderHistory'} component={OrderHistory} />
                </Switch>
            </MainContainer >
        );
    }
}
export default MainContent;
