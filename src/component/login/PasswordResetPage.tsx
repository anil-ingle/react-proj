import { Button, Input, Spin } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { selForgetPass } from '../../ecall/forgetpassword/selectors';
import { sagasActions } from '../../ecall/reset-password';
import { EParkingStore } from '../../ecall/types';
import { BlockDiv, OtpContainer } from './style/ForgetPassword.Style';
import { selReset } from '../../ecall/reset-password/selectors';
import { push } from 'connected-react-router';

const FButton = styled(Button as any)`
    width: -webkit-fill-available;
    width: inherit;
`;

type StoreProps = {
    data: ForgetPassResponseImMap;
    fetchData: any;
};
type DispatchProps = {
    resetPass: (resetPassAction: any) => {};
    cancel: any;
};
type StateProps = {};
type State = {
    newPass: string;
    isOpen: boolean;
};
type Props = DispatchProps & StoreProps & StateProps & {};

class PasswordResetPage extends React.Component<Props, State> {
    state = {
        newPass: '',
        isOpen: false,
    };
    onSubmit = () => {
        let val = this.props.data.get('data').toJS();
        if (val) {
            this.props.resetPass({ data: { key: val.key, newPass: this.state.newPass } });
        }
    }

    handleCancel = (e: any) => {
        this.setState({ newPass: '' });
    }

    emailOnChange = (newPass: string) => {
        this.setState({ newPass });
    }
    render() {
        return (
            <OtpContainer>
                {this.props.fetchData.get('fetching') ? <Spin style={{ color: 'red' }} size="large" /> : ''}
                <BlockDiv>
                    <Input
                        type="text"
                        placeholder="Enter new password"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                            this.emailOnChange(e.target.value)}
                        value={this.state.newPass}
                    />
                </BlockDiv>
                <div style={{ display: 'flex' }}>
                    <BlockDiv>
                        <FButton
                            type="default"
                            style={{ background: 'red', color: 'white' }}
                            onClick={() => this.props.cancel()}
                        >
                            cancel
                        </FButton>
                    </BlockDiv>
                    <BlockDiv>
                        <FButton
                            type="default"
                            style={{ background: 'green', color: 'white' }}
                            onClick={this.onSubmit}
                        >
                            continue
                        </FButton>
                    </BlockDiv>
                </div>
            </OtpContainer>
            // </Modal>
        );
    }
}

export default connect<StoreProps, DispatchProps, {}, EParkingStore>(
    store => ({
        data: selForgetPass(store),
        fetchData: selReset(store),
    }),
    {
        resetPass: sagasActions.resetPassAction,
        cancel: () => push('/'),
    }
)(PasswordResetPage);
