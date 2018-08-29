
import { Modal } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import { EParkingStore } from '../../ecall/types';
import { sagasActions } from '../../ecall/user/book-slot';
import { selCityAreaAct } from '../../ecall/user/city-area/selectors';
import { selUserTime } from '../../ecall/user/user-time-info/selectors';
import * as SC from '../common/style/UserWalletStyle';
import WalletMessage from '../common/WalletMessage';
type StoreProps = {
    uTime: UserTimeImMap,
    cityArea: CityAreaDataResponseImMap
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
        let cityArea = this.props.cityArea.get('data').toJS();
        let selectedTime = this.props.uTime.get('time');
        if (cityArea && this.state.info && selectedTime > 0) {
            aId = parseInt(cityArea.id, 10) + 3;
            this.props.bookSlot({
                data: {
                    areaId: aId, timeTaken: selectedTime,
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
            <SC.UserWalletContainer>
                <Modal
                    style={{ textAlign: 'center' }}
                    width={'550px'}
                    title="Wallet Money"
                    visible={this.props.openFlag}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <SC.UserWalletGrid>
                        <SC.UserInfoDiv>
                            <SC.WalletTextHeader>
                                {WalletMessage.UserNameText.defaultMessage}:
                            </SC.WalletTextHeader>
                            <SC.WalletTextContent>
                                {this.state.info.fName + ' ' + this.state.info.lName}
                            </SC.WalletTextContent>
                        </SC.UserInfoDiv>
                        <SC.UserInfoDiv>
                            <SC.WalletTextHeader>
                                {WalletMessage.UserTotalAmountText.defaultMessage}:
                                </SC.WalletTextHeader>
                            <SC.WalletTextContent>
                                {this.props.bookInfo.availbleAmount}
                            </SC.WalletTextContent>
                        </SC.UserInfoDiv>
                        <SC.UserInfoDiv>
                            <SC.WalletTextHeader>
                                {WalletMessage.UserBillText.defaultMessage}:
                            </SC.WalletTextHeader>
                            <SC.WalletTextContent>
                                {this.props.bookInfo.bill}
                            </SC.WalletTextContent>
                        </SC.UserInfoDiv>
                    </SC.UserWalletGrid>
                </Modal>

            </SC.UserWalletContainer>
        );
    }
}

export default connect<StoreProps, DispatchProps, {}, EParkingStore>(
    s => ({
        uTime: selUserTime(s),
        cityArea: selCityAreaAct(s),

    }),
    {
        bookSlot: sagasActions.bookSlotAction,
    }
)(UserWalletInfo);