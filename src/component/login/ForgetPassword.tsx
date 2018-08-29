import * as React from 'react';
import { connect } from 'react-redux';
import { sagasActions } from '../../ecall/forgetpassword';
import { selForgetPass } from '../../ecall/forgetpassword/selectors';
import { EParkingStore } from '../../ecall/types';
import * as ASC from './style/AntdForgetPassword.Style';
import { BlockDiv, SpanDiv, ErrorSpan, InputDiv, ButtonDiv, ForgetPasswordContainer } from './style/ForgetPassword.Style';
import { Input } from 'antd';

type StoreProps = {
    store: any;
};
type DispatchProps = {
    emailVerify: (emailVerifyAction: any) => {}
};
type StateProps = {
    openFlag: boolean;
    closeFlag: boolean;
    closeModal: any;

};
type State = {
    email: string;
    openFlag: boolean;
    errorMsg: string;
    tg: boolean;
};
declare global {
    interface Window {
        otp: boolean;
    }
}
type Props = DispatchProps & StoreProps & StateProps & {};

class ForgetPassword extends React.Component<Props, State> {
    state = {
        email: '',
        openFlag: false,
        otp: false,
        errorMsg: '',
        tg: false,
    };
    handleOk = () => {
        (window as any).otp = true;

        if (this.state.email.length > 0) {
            if (this.state.email.indexOf('@') > 0) {
                this.props.emailVerify({ data: { email: this.state.email } });
                this.props.closeModal();
            } else {
                this.setState({ errorMsg: 'Email is not Valid' });
            }

        } else {
            this.setState({ errorMsg: 'Email required' });
        }
        this.setState({ tg: true });
    }

    handleCancel = () => {
        this.setState({ email: '', errorMsg: '', tg: false });
        this.props.closeModal();
    }

    emailOnChange = (email: string) => {
        if (this.state.tg) {
            this.setState({ email, errorMsg: '', tg: false });

        } else {
            this.setState({ email });
        }

    }

    render() {
        return (
            <ASC.ModalForgetPassword
                title="Forget Password"
                visible={this.props.openFlag}
                onCancel={this.handleCancel}
            >
                <ForgetPasswordContainer>
                    <InputDiv>
                        <Input
                            type="text"
                            placeholder="Email"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                this.emailOnChange(e.target.value)}
                            value={this.state.email}
                        />
                        <SpanDiv>
                            <ErrorSpan >{this.state.errorMsg}</ErrorSpan>
                        </SpanDiv>
                    </InputDiv>
                    <ButtonDiv>
                        <BlockDiv>
                            <ASC.CancelButton onClick={this.handleCancel}>Cancel</ASC.CancelButton>
                        </BlockDiv>
                        <BlockDiv>
                            <ASC.SnedButton onClick={this.handleOk}>continue</ASC.SnedButton>
                        </BlockDiv>
                    </ButtonDiv>
                </ForgetPasswordContainer>
            </ASC.ModalForgetPassword>
        );
    }
}

export default connect<StoreProps, DispatchProps, {}, EParkingStore>(
    store => ({
        store: selForgetPass(store)
    }),
    { emailVerify: sagasActions.forgetPassEmailAction, }
)(ForgetPassword);
