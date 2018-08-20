
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import * as React from 'react';
import { connect } from 'react-redux';
import {
    Slot, ButtonSubmit, DisplayFlex,
    ParkingSlotContainer, SlotArea, SlotDiv
} from './style/ParlingSlotStyle';
import UserWalletInfo from './UserWalletInfo';
import { sagasActions } from '../../ecall/user/wallet-money';
import * as toastr from 'toastr';
type StoreProps = {
    data: any,
};

type DispatchProps = {
    getAmount: (userWalletAction: any) => {}

};

type Props = DispatchProps & StoreProps & {};

type State = {
    selectedSlots: object[];
    openFlag: boolean;
    closeFlag: boolean;
    userBill: number,
};
class ParkingSlot extends React.Component<Props, State> {
    state = {
        selectedSlots: [] as any[],
        openFlag: false,
        closeFlag: false,
        dimmerFlag: false,
        userBill: 0,
    };
    componentDidMount() {
        let info = JSON.parse(sessionStorage.getItem('info') as any);
        this.props.getAmount(info.id);
    }
    findIndexOfSelectedSlots = (e: any) => {
        return this.state.selectedSlots.map(x => x.slotId).indexOf(e.slotId);
    }
    toggleReserved = (e: any) => {
        let i = this.findIndexOfSelectedSlots(e);
        let currentSlots = this.state.selectedSlots as any[];
        if (e.isReserved === 1) {
            toastr.warning('This Slot Already Booked.');
        } else if (i > -1) {
            currentSlots.splice(i, 1);
        } else {
            currentSlots.push(e);
        }
        this.setState({ selectedSlots: currentSlots });
    }
    bookSlot = () => {
        let bill = 0;
        let selectedTimeAndId = this.props.data.get('userIdTimeAct').get('data').toJS();
        if (selectedTimeAndId && this.state.selectedSlots.length > 0) {
            for (let slot of this.state.selectedSlots) {
                if (slot.slotNumber > 5) {
                    bill += selectedTimeAndId.time * 30;
                } else {
                    bill += selectedTimeAndId.time * 20;
                }
            }

            this.setState({ openFlag: true, closeFlag: false, userBill: bill });
        } else {
            toastr.warning('Plz select slot first');
        }

    }
    oncloseModal = () => {
        this.setState({ openFlag: false });
    }
    onUserWalletInfo = () => {
        //
    }
    cancelSlot() {
        console.log('db clck');
    }

    renderSlots = () => {
        if (this.props.data.get('parkingSlot').get('data')) {
            const val = this.props.data.get('parkingSlot').get('data').toJS();
            if (val) {
                return val.map((v: any, i: number) => {
                    return (<Slot
                        key={i}
                        isReserved={v.isReserved}
                        onClick={() => this.toggleReserved(v)}
                    >
                        {`slot ${v.slotNumber}`}
                    </Slot>);
                });
            }
        }
    }
    render() {
        let slotNum = '';
        this.state.selectedSlots.forEach(function (num: any) {
            slotNum += num.slotNumber + ',';
        });
        slotNum = slotNum.toString().slice(0, -1);
        let walletAvailableMoney = this.props.data.get('wallet_money').get('data').toJS();
        let bookInfo = {} as any;
        if (walletAvailableMoney && this.state.userBill > 0) {
            bookInfo.availbleAmount = walletAvailableMoney.totalAmount;
            bookInfo.bill = this.state.userBill;
            bookInfo.slotNum = slotNum;
        }

        return (
            <DisplayFlex>
                <UserWalletInfo
                    openFlag={this.state.openFlag}
                    closeFlag={this.state.closeFlag}
                    closeModal={this.oncloseModal}
                    bookInfo={bookInfo}
                />
                <SlotArea>
                    <SlotDiv>
                        Selected Slot Number: {slotNum}
                    </SlotDiv>
                </SlotArea>
                <ParkingSlotContainer >
                    <DisplayFlex>{this.renderSlots()}</DisplayFlex>
                </ParkingSlotContainer >
                <DisplayFlex>
                    <ButtonSubmit onClick={this.bookSlot}>
                        Book Slot
                    </ButtonSubmit>
                </DisplayFlex>
            </DisplayFlex>
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
        getAmount: sagasActions.walletMoneyAction,
    }
)(ParkingSlot);