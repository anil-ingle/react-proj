import * as React from 'react';
import { connect } from 'react-redux';
import * as styled from 'styled-components';
import { EParkingStore } from '../ecall/types';

const HeaderContainer = styled.default.div`
width: 100%;
height: 100%;
display: flex;
`;

type StoreProps = {};

type DispatchProps = {};

type Props = DispatchProps & StoreProps & {};

class Footer extends React.Component {

    render() {
        return (
            <div>Footer</div>
        );
    }
}

export default connect<StoreProps, DispatchProps, {}, EParkingStore>(
    store => ({
        //
    }),
)(Footer);