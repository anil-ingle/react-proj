import { Button, Input, Spin } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { selForgetPass } from '../../ecall/forgetpassword/selectors';
import { sagasActions } from '../../ecall/otp';
import { selOtp } from '../../ecall/otp/selectors';
import { EParkingStore } from '../../ecall/types';
import { BlockDiv, OtpContainer, ButtonStyle, SpanDiv, ErrorSpan } from './style/Otp.Style';
import { push } from 'connected-react-router';
import { withProps } from '../common/style';
import { Buttoncolor } from '../common/style/types';

const FButton = withProps<Buttoncolor>()(styled(Button as any))`
    width: -webkit-fill-available;
    width: inherit;
    color:white;
    ${(p) => 'background-color: ' + p.color}
`;

type StoreProps = {
    data: ForgetPassResponseImMap;
    fetchData: any;
};

type DispatchProps = {
    otpVerify: (otpVerifyAction: any) => {};
    cancel: any;
};

type StateProps = {

};
type state = {
    otp: string;
    errorMsg: string;
    tg: boolean;
};
declare global {
    interface Window {
        resetPage: boolean;
    }
}

type Props = DispatchProps & StoreProps & StateProps & {};

class Otp extends React.Component<Props, state> {

    state = {
        otp: '',
        errorMsg: '',
        tg: false,
    };
    onSubmit = () => {
        (window as any).resetPage = true;
        let val = this.props.data.get('data').toJS();
        if (val) {
            let submitOtp = this.state.otp;
            if (submitOtp.length === 6) {
                this.props.otpVerify({ data: { key: val.key, otp: this.state.otp } });
            } else {
                this.setState({ errorMsg: 'Please enter 6 digit OTP' });
            }

        }
        this.setState({ tg: true });
    }

    otpOnChange = (otp: string) => {
        if (this.state.tg) {
            this.setState({ otp, errorMsg: '', tg: false });

        } else {
            this.setState({ otp });
        }
    }

    render() {
        return (
            <OtpContainer>
                <div>
                    {this.props.fetchData.get('fetching') ? <Spin style={{ color: 'red' }} size="large" /> : ''}
                    <BlockDiv>
                        <Input
                            type="text"
                            placeholder="Enter OTP"
                            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                                this.otpOnChange(e.target.value)}
                            value={this.state.otp}
                        />
                        <SpanDiv>
                            <ErrorSpan >{this.state.errorMsg}</ErrorSpan>
                        </SpanDiv>
                    </BlockDiv>
                    <ButtonStyle style={{ display: 'flex' }}>
                        <BlockDiv>
                            <FButton
                                type="default"
                                onClick={() => this.props.cancel()}
                                color={'red'}
                            >
                                cancel
                            </FButton>
                        </BlockDiv>
                        <BlockDiv>
                            <FButton
                                type="default"
                                onClick={this.onSubmit}
                                color={'green'}
                            >
                                continue
                            </FButton>
                        </BlockDiv>
                    </ButtonStyle>
                </div>
            </OtpContainer>
        );
    }
}

export default connect<StoreProps, DispatchProps, {}, EParkingStore>(
    store => ({
        data: selForgetPass(store),
        fetchData: selOtp(store),
    }),
    {
        otpVerify: sagasActions.otpAction,
        cancel: () => push('/'),
    }
)(Otp);
