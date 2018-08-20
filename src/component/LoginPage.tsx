import { Button, Form, Icon, Input } from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import FormItem from 'antd/lib/form/FormItem';
import * as React from 'react';
import { connect } from 'react-redux';
import { sagasActions } from '../ecall/login';
import { DisplayFormButton, FormPage, LoginContainer } from './App.Style';
type StoreProps = {
    data: any,
};

type DispatchProps = {
    login: (loginAction: any) => {},
};

type Props = DispatchProps & StoreProps & {};

type State = {};

export class LoginPage extends React.Component<Props, State> {

    state = {
        userName: 'anilingle91@gmail.com',
        password: '1234',
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

    render() {
        const info = this.props.data.get('Login').get('data').toJS();
        if (info) {
            sessionStorage.setItem('info', JSON.stringify(info));
        }
        return (
            <LoginContainer>
                <FormPage>
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
                            />
                        </FormItem>
                        <FormItem>
                            <DisplayFormButton>
                                <Button
                                    type="primary"
                                    htmlType="submit"
                                    style={{ width: '400px' }}
                                    onClick={() => this.onLogin()}
                                >
                                    log in
                                </Button>
                            </DisplayFormButton>
                        </FormItem>
                    </Form>
                </FormPage>
            </LoginContainer>
        );
    }
}

const mapStateToProps = (store: any) => {
    return {
        data: store, // selData(store)
    };
};

export default connect<StoreProps, DispatchProps>(
    mapStateToProps,
    {
        login: sagasActions.loginAction,

    }
)(LoginPage);
