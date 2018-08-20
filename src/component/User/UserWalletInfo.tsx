import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import * as React from 'react';
import { connect } from 'react-redux';
import { Modal, Button } from 'antd';
import WalletMessage from './WalletMessage';
import {
    UserWalletContainer, UserInfoDiv, WalletTextHeader, WalletTextContent, UserWalletGrid
} from './style/UserWalletStyle';
import { sagasActions } from '../../ecall/user/book-slot';
type StoreProps = {
    data: any,
};

type DispatchProps = {
    bookSlot: (bookslotAction: any) => {}
};
interface StateProps {
    openFlag: boolean;
    closeFlag: boolean;
    closeModal: any;
    bookInfo: any;

}

type Props = DispatchProps & StoreProps & StateProps & {};

class UserWalletInfo extends React.Component<Props> {
    state = {
        openFlag: false,
        info: {} as any,
    };

    showModal = () => {
        this.setState({
            visible: true,
        });
    }
    componentDidMount() {
        let info = JSON.parse(sessionStorage.getItem('info') as any);
        if (info) {
            this.setState({ info });
        }
    }

    handleOk = (e: any) => {
        let aId = 0;
        let selectedTimeAndId = this.props.data.get('userIdTimeAct').get('data').toJS();
        if (selectedTimeAndId && this.state.info) {
            aId = parseInt(selectedTimeAndId.id) + 3;
            this.props.bookSlot({
                data: {
                    areaId: aId, timeTaken: selectedTimeAndId.time,
                    bookedSlots: this.props.bookInfo.slotNum, wBill: this.props.bookInfo.bill,
                    wTotal: this.props.bookInfo.availbleAmount, userId: this.state.info.id,
                }
            });

        }
        this.props.closeModal();
    }

    handleCancel = (e: any) => {
        this.props.closeModal();
    }

    render() {
        return (
            <UserWalletContainer>
                <Modal
                    style={{ textAlign: 'center' }}
                    width={'550px'}
                    title="Wallet Money"
                    visible={this.props.openFlag}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <UserWalletGrid>
                        <UserInfoDiv>
                            <WalletTextHeader>
                                {WalletMessage.UserNameText.defaultMessage}:
                            </WalletTextHeader>
                            <WalletTextContent>
                                {' ' + this.state.info.fName + ' ' + this.state.info.lName}
                            </WalletTextContent>
                        </UserInfoDiv>
                        <UserInfoDiv>
                            <WalletTextHeader>
                                {WalletMessage.UserTotalAmountText.defaultMessage}:
                                </WalletTextHeader>
                            <WalletTextContent>
                                {' ' + this.props.bookInfo.availbleAmount}
                            </WalletTextContent>
                        </UserInfoDiv>
                        <UserInfoDiv>
                            <WalletTextHeader>
                                {WalletMessage.UserBillText.defaultMessage}:
                            </WalletTextHeader>
                            <WalletTextContent>
                                {' ' + this.props.bookInfo.bill}
                            </WalletTextContent>
                        </UserInfoDiv>
                    </UserWalletGrid>
                </Modal>

            </UserWalletContainer>
        );
    }
}
// export  User;
const mapStateToProps = (store: any) => {
    return {
        data: store,
    };
};

export default connect<StoreProps, DispatchProps>(
    mapStateToProps,
    {
        bookSlot: sagasActions.bookSlotAction,
    }
)(UserWalletInfo);