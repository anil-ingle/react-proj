import * as React from 'react';
import { connect } from 'react-redux';
import CustomerInfo from './CustomerInfo';
import SlotDisplay from './SlotDisplay';
import { sagasActions } from '../../ecall/owner/own-address';
import { OwnerContainer, DisplayRow, DivSep, Horizontal } from './style/Owner.Style';
import { EParkingStore } from '../../ecall/types';

type StoreProps = {
    data: any,
};
type DispatchProps = {
    getAddress: (getAddressAction: any) => {}
};

type Props = DispatchProps & StoreProps & {};

export class Owner extends React.Component<Props> {

    componentDidMount() {
        let info = JSON.parse(sessionStorage.getItem('info') as any);
        if (info) {
            this.props.getAddress(info.id);
        }
    }
    render() {
        return (
            <OwnerContainer>
                <DisplayRow >
                    <SlotDisplay />
                </DisplayRow>

                <DivSep>
                    <Horizontal />
                </DivSep>
                <DisplayRow>
                    <CustomerInfo />
                </DisplayRow>
            </OwnerContainer>
        );
    }
}

export default connect<StoreProps, DispatchProps, {}, EParkingStore>(
    store => ({
        data: store, // selData(store)
    }),
    {
        getAddress: sagasActions.ownerAdrsAction,
    })(Owner);