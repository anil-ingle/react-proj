
import * as React from 'react';
import { connect } from 'react-redux';
import * as toastr from 'toastr';
import { EParkingStore } from '../../ecall/types';
import { selParkingSlot } from '../../ecall/user/parking-slot/selectors';
import { selUserTime } from '../../ecall/user/user-time-info/selectors';
import { sagasActions } from '../../ecall/user/wallet-money';
import { selWalletMoney } from '../../ecall/user/wallet-money/selectors';
import { DisplayFlex, ParkingSlotContainer, Slot } from '../common/style/ParlingSlotStyle';
import { ButtonSubmit, SlotArea, SlotDiv } from './style/ParlingSlotStyle';
import UserWalletInfo from './UserWalletInfo';
type StoreProps = {
    data: ParkingSlotResponseImMap,
    wData: WalletMoneyResponseImMap,
    uTime: UserTimeImMap,
};

type DispatchProps = {
    getAmount: (userWalletAction: any) => {}

};

type Props = DispatchProps & StoreProps & {};

type State = {
    selectedSlots: object[];
    openFlag: boolean;
    closeFlag: boolean;
    userBill: number;
};
class ParkingSlot extends React.Component<Props, State> {
    state = {
        selectedSlots: [] as any[],
        openFlag: false,
        closeFlag: false,
        userBill: 0,
        count: 0,
    };
    componentDidMount() {
        let info = JSON.parse(sessionStorage.getItem('info') as any);
        if (info && info.length > 0) {
            this.props.getAmount(info.id);
        }
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
        if (this.props.uTime.get('time')) {
            let selectedTime = this.props.uTime.get('time');
            if (selectedTime && this.state.selectedSlots.length > 0) {
                let bill: number = 0;
                for (let slot of this.state.selectedSlots) {
                    if (slot.slotNumber > 5) {
                        bill = bill + (parseInt(selectedTime, 10) * 30);
                    } else {
                        bill = bill + (parseInt(selectedTime, 10) * 20);
                    }
                }
                this.setState({ openFlag: true, closeFlag: false, userBill: bill });
            } else {
                toastr.warning('Plz select All field ');
            }
        } else {
            toastr.warning('Plz select Time');
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
        if (this.props.data.get('data')) {
            const val = this.props.data.get('data').toJS();
            if (val && val.length > 0) {
                this.state.count = 9;
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
        let walletAvailableMoney = this.props.wData.get('data').toJS();
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

export default connect<StoreProps, DispatchProps, {}, EParkingStore>(
    store => ({
        data: selParkingSlot(store),
        wData: selWalletMoney(store),
        uTime: selUserTime(store)
    }),
    {
        getAmount: sagasActions.walletMoneyAction,
    }
)(ParkingSlot);