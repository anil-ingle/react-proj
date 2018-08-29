import * as React from 'react';
import * as styled from 'styled-components';
import { connect } from 'react-redux';

const WalletContainer = styled.default.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

type StoreProps = {};

type DispatchProps = {};

type Props = DispatchProps & StoreProps & {};

const Admin: React.SFC<Props> = () => (
    <WalletContainer>
        Admin Home
    </WalletContainer>
);

export default connect<StoreProps, DispatchProps>(
    store => ({
        data: store, // selData(store)
    }),
)(Admin);