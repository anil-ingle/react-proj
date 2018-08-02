import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { createBrowserHistory } from 'history';
import * as React from 'react';
import { Route, Router } from 'react-router';
import * as styled from 'styled-components';
import LoginPage from '../component/LoginPage';
import { User } from '../component/User';
const MainContainer = styled.default.div`
width: 100%;
height: 100%;

  
`;

interface StateProps {
    isValid: boolean;
}
export default class MainContent extends React.Component<StateProps>  {

    render() {
        const history = createBrowserHistory();

        if (this.props.isValid) {
            return (
                <MainContainer>
                    <Router history={history}>
                        <Route exact path={'/'} component={User} />
                    </Router>

                </MainContainer>
            );
        } else {
            return (
                <MainContainer>
                    <LoginPage />
                </MainContainer>
            );
        }
        // }

    }
}
// const mapStateToProps = () => {

//     return {
//         // data: store, // selData(store)
//     };
// };
