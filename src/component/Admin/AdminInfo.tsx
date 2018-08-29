import * as React from 'react';
import * as styled from 'styled-components';

const AdminInfoContainer = styled.default.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export default class AdminInfo extends React.Component {
    render() {
        return (
            <AdminInfoContainer>
                Admin Home
         </AdminInfoContainer>
        );
    }
}
