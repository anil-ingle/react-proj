import * as React from 'react';
import { connect } from 'react-redux';
import { selLogin } from '../../ecall/login/selectors';
import { sagasActions } from '../../ecall/user/wallet-money';
import { selWalletMoney } from '../../ecall/user/wallet-money/selectors';
import * as SC from '../common/style/UserWalletStyle';
import WalletMessage from '../common/WalletMessage';
import { EParkingStore } from '../../ecall/types';

type StoreProps = {
    fName: string,
    lName: string,
    email: string,
    mobileNumber: string,
    totalAmount: number,
};

type DispatchProps = {
    getAmount: (userWalletAction: any) => {}
};

type Props = DispatchProps & StoreProps & {};

class Wallet extends React.Component<Props> {
    render() {
        const { fName = '', lName = '', email = '', mobileNumber = '', totalAmount = 0 } = this.props;
        return (
            <SC.Container>
                <SC.HeadingContent>
                    <SC.HeadingLineTitle>
                        My Wallet
                    </SC.HeadingLineTitle>
                </SC.HeadingContent>
                <SC.WalletContainer>
                    <SC.DivSep>
                        <SC.DivBlock>
                            <SC.TextContent> {WalletMessage.UserNameText.defaultMessage} </SC.TextContent>
                        </SC.DivBlock>
                        <SC.DivBlock><SC.InputText value={fName + ' ' + lName} /></SC.DivBlock>
                    </SC.DivSep>
                    <SC.DivSep>
                        <SC.DivBlock>
                            <SC.TextContent>  {WalletMessage.UserEmailTest.defaultMessage}</SC.TextContent>
                        </SC.DivBlock>
                        <SC.DivBlock><SC.InputText value={email} /></SC.DivBlock>
                    </SC.DivSep>
                    <SC.DivSep>
                        <SC.DivBlock>
                            <SC.TextContent>  {WalletMessage.UserMobileNumberTest.defaultMessage}</SC.TextContent>
                        </SC.DivBlock>
                        <SC.DivBlock><SC.InputText value={mobileNumber} /></SC.DivBlock>
                    </SC.DivSep>
                    <SC.DivSep>
                        <SC.DivBlock>
                            <SC.TextContent>  {WalletMessage.UserTotalAmountText.defaultMessage} </SC.TextContent>
                        </SC.DivBlock>
                        <SC.DivBlock><SC.InputText value={totalAmount} />
                        </SC.DivBlock>
                    </SC.DivSep>
                </SC.WalletContainer>
            </SC.Container>
        );
    }
}

export default connect<StoreProps, DispatchProps, {}, EParkingStore>(
    (store) => {
        const pp = selWalletMoney(store);
        const qq = selLogin(store);
        return {
            fName: 'GG',
            lName: 'sd',
            email: 'sd',
            mobileNumber: 'sd',
            totalAmount: 0
        };
    },
    {
        getAmount: sagasActions.walletMoneyAction,
    }
)(Wallet);
