import * as React from 'react';
import { connect } from 'react-redux';
import * as styled from 'styled-components';
import { EParkingStore } from '../../ecall/types';
import { ParkingSlotContainer } from '../common/style/ParlingSlotStyle';
import { TimeHeader } from './TimeHeader';

const SlotDisplayContainer = styled.default.div`

    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
type StoreProps = {
    data: any,
};
type DispatchProps = {

};
export class SlotDisplay extends React.Component {
    // componentDidMount(){
    //     this.props.getOwnerSlot()
    // }
    // findIndexOfSelectedSlots = (e: any) => {
    //     return this.state.selectedSlots.map(x => x.slotId).indexOf(e.slotId);
    // }
    // toggleReserved = (e: any) => {
    //     let i = this.findIndexOfSelectedSlots(e);
    //     let currentSlots = this.state.selectedSlots as any[];
    //     if (e.isReserved === 1) {
    //         toastr.warning('This Slot Already Booked.');
    //     } else if (i > -1) {
    //         currentSlots.splice(i, 1);
    //     } else {
    //         currentSlots.push(e);
    //     }
    //     this.setState({ selectedSlots: currentSlots });
    // }
    renderSlots = () => {

        // if (this.props.data.get('data')) {
        //     const val = this.props.data.get('data').toJS();
        //     if (val && val.length > 0) {
        //         this.state.count = 9;
        //         return val.map((v: any, i: number) => {
        //             return (<Slot
        //                 key={i}
        //                 isReserved={v.isReserved}
        //                 onClick={() => this.toggleReserved(v)}
        //             >
        //                 {`slot ${v.slotNumber}`}
        //             </Slot>);
        //         });
        //     }
        // }
    }
    render() {

        return (
            <SlotDisplayContainer>
                <TimeHeader />
                <ParkingSlotContainer >
                    {/* <DisplayFlex>{this.renderSlots()}</DisplayFlex> */}
                </ParkingSlotContainer >
            </SlotDisplayContainer>
        );
    }
}

export default connect<StoreProps, DispatchProps, {}, EParkingStore>(
    store => ({
        data: (store),
    }),

)(SlotDisplay);