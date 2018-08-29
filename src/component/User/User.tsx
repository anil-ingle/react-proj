import * as React from 'react';
import { connect } from 'react-redux';
import * as styled from 'styled-components';
import { EParkingStore } from '../../ecall/types';
import ReginalFilter from './City';
import Info from './Info';
import ParkingSlot from './ParkingSlot';

const UserContainer = styled.default.div`
    width: 100%;
    height: inherit;
    display: flex;
    flex-direction: column;
    background:linear-gradient(154deg,#eac2a6,#7cd27a);
    background-color: transparent !important;
`;

type StoreProps = {};

type DispatchProps = {};

type Props = DispatchProps & StoreProps & {};

const User: React.SFC<Props> = () => (
    <UserContainer>
        <ReginalFilter />
        <Info />
        <ParkingSlot />
    </UserContainer>
);

export default connect<StoreProps, DispatchProps, {}, EParkingStore>(
    store => ({
        data: store, // selData(store)

    }),
)(User);
