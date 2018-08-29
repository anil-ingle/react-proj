import * as React from 'react';
import { connect } from 'react-redux';
import * as styled from 'styled-components';
import { EParkingStore } from '../../ecall/types';
import { sagasActions } from '../../ecall/user/wallet-money';
import { selWalletMoney } from '../../ecall/user/wallet-money/selectors';
import * as SC  from '../common/style/UserWalletStyle';
import WalletMessage from '../common/WalletMessage';

const WalletContainer = styled.default.div`
    width: 100%;
    height: 500px; 
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
    align-items: center; 
    justify-content: center;
    font-size: 1.3em;
    background: linear-gradient(154deg, #e0e6ec, #273542);
    background-color: transparent !important;
`;
type StoreProps = {
    wData: WalletMoneyResponseImMap,
};
type DispatchProps = {
    getAmount: (userWalletAction: any) => {}
};
type Props = DispatchProps & StoreProps & {};

class OwnerWallet extends React.Component<Props> {
    state = {
        info: {} as any,
    };

    componentDidMount() {
        let info = JSON.parse(sessionStorage.getItem('info') as any);
        if (info.id !== undefined && info.id > 0) {
            this.props.getAmount(info.id);
            this.setState({ info });
        }
    }
    render() {
        return (
            <WalletContainer>
                <SC.HeadingContent>
                    <SC.HeadingLineTitle>
                        My Wallet
                    </SC.HeadingLineTitle>
                </SC.HeadingContent>
                <WalletContainer>
                    <SC.DivSep>
                        <SC.DivBlock>
                            <SC.TextContent> {WalletMessage.UserNameText.defaultMessage} </SC.TextContent>
                        </SC.DivBlock>
                        <SC.DivBlock><SC.InputText value={this.state.info.fName + ' ' + this.state.info.lName} /></SC.DivBlock>
                    </SC.DivSep>
                    <SC.DivSep>
                        <SC.DivBlock>
                            <SC.TextContent>  {WalletMessage.UserEmailTest.defaultMessage}</SC.TextContent>
                        </SC.DivBlock>
                        <SC.DivBlock><SC.InputText value={this.state.info.email} /></SC.DivBlock>
                    </SC.DivSep>
                    <SC.DivSep>
                        <SC.DivBlock>
                            <SC.TextContent>  {WalletMessage.UserMobileNumberTest.defaultMessage}</SC.TextContent>
                        </SC.DivBlock>
                        <SC.DivBlock><SC.InputText value={this.state.info.mobileNumber} /></SC.DivBlock>
                    </SC.DivSep>
                    <SC.DivSep>
                        <SC.DivBlock>
                            <SC.TextContent>  {WalletMessage.UserTotalAmountText.defaultMessage} </SC.TextContent>
                        </SC.DivBlock>
                        <SC.DivBlock><SC.InputText value={this.props.wData.get('data').toJS().totalAmount} />
                        </SC.DivBlock>
                    </SC.DivSep>
                </WalletContainer>
            </WalletContainer>
        );
    }
}

export default connect<StoreProps, DispatchProps, {}, EParkingStore>(
    store => ({
        wData: selWalletMoney(store),
    }),
    {
        getAmount: sagasActions.walletMoneyAction,
    })(OwnerWallet);
