import { Button, Checkbox, Form, Icon, Input, Spin } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import * as React from 'react';
import { connect } from 'react-redux';
import { sagasActions } from '../../ecall/login';
import { selLogin } from '../../ecall/login/selectors';
import { EParkingStore } from '../../ecall/types';
import * as SC from '../App.Style';
import ForgetPassword from './ForgetPassword';
import Registration from './Registration';
import { selForgetPass } from '../../ecall/forgetpassword/selectors';
type StoreProps = {
    data: LoginDataResponseImMap,
    store: any,
};

type DispatchProps = {
    login: (loginAction: any) => {},
};

type Props = DispatchProps & StoreProps & {};

type State = {
    userName: string;
    password: string;
    openFlag: boolean;
    closeFlag: boolean;
    isOpen: boolean;
    isClose: boolean;
};

export class LoginPage extends React.Component<Props, State> {

    state = {
        userName: 'anilingle91@gmail.com',
        password: '1234',
        openFlag: false,
        closeFlag: false,
        isOpen: false,
        isClose: false,
    };

    usernameChange = (e: string) => {
        let userName = e;
        this.setState({
            userName: userName
        });
    }

    passwordChange = (e: string) => {
        let password = e;
        this.setState({
            password: password
        });
    }

    onLogin = () => {
        this.props.login({ data: { userName: this.state.userName, password: this.state.password } });
    }
    onKeyPress = (event: any) => {
        if (event.charCode === 13) {
            this.onLogin();
        }
    }
    registration = () => {
        this.setState({ isOpen: true, isClose: false });

    }
    oncloseModal = () => {
        this.setState({ openFlag: false });
    }
    oncloseModal1 = () => {
        this.setState({ isOpen: false });
    }
    forgetPassword = () => {
        this.setState({ openFlag: true, closeFlag: false });
    }
    render() {
        const info = this.props.data.get('data').toJS();
        if (info) {
            sessionStorage.setItem('info', JSON.stringify(info));
        }

        return (
            < SC.LoginContainer >
                {this.props.store.get('fetching') ? <Spin style={{ color: 'red' }} size="large" /> : ''}
                <ForgetPassword
                    openFlag={this.state.openFlag}
                    closeFlag={this.state.closeFlag}
                    closeModal={this.oncloseModal}
                />
                <Registration
                    isOpen={this.state.isOpen}
                    isClose={this.state.isClose}
                    closeModal1={this.oncloseModal1}
                />
                <SC.BlockDiv>
                    <SC.HeaderLineTitle>Online Parking</SC.HeaderLineTitle>
                </SC.BlockDiv>
                <SC.FormPage>
                    <Form>
                        <FormItem>
                            <Input
                                placeholder="Enter Username"
                                prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.
                                    usernameChange(e.target.value)}
                                value={this.state.userName}
                            />
                        </FormItem>
                        <FormItem>
                            <Input
                                placeholder="Enter Password"
                                type="password"
                                prefix={<Icon type="password" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.
                                    passwordChange(e.target.value)}
                                value={this.state.password}
                                onKeyPress={this.onKeyPress}
                            />
                        </FormItem>
                        <FormItem>

                            <Checkbox style={{ color: 'white' }}>Remember me</Checkbox>

                            <SC.ForgetPasswordButton onClick={this.forgetPassword}>Forgot password</SC.ForgetPasswordButton>
                            <SC.DisplayFormButton>
                                <Button
                                    type="primary"
                                    style={{ width: '400px' }}
                                    onClick={() => this.onLogin()}
                                >
                                    log in
                                </Button>
                            </SC.DisplayFormButton>
                            Or <SC.Registration onClick={this.registration}>register now!</SC.Registration>
                        </FormItem>
                    </Form>
                </SC.FormPage>
            </SC.LoginContainer >

        );
    }
}

export default connect<StoreProps, DispatchProps, {}, EParkingStore>(
    store => ({
        data: selLogin(store),
        store: selForgetPass(store)
    }),
    {
        login: sagasActions.loginAction,

    }
)(LoginPage);
