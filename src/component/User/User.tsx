import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import * as React from 'react';
import * as styled from 'styled-components';
import { connect } from 'react-redux';
import ReginalFilter from './City';
import ParkingSlot from './ParkingSlot';
import Info from './Info';

const UserContainer = styled.default.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
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

const mapStateToProps = (store: any) => {
    return {
        data: store, // selData(store)
    };
};

export default connect<StoreProps, DispatchProps>(
    mapStateToProps
)(User);