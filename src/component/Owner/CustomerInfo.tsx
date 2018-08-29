import * as React from 'react';
import * as styled from 'styled-components';

const CustomerInfoContainer = styled.default.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
`;

export default class CustomerInfo extends React.Component {
    render() {
        return (
            <CustomerInfoContainer>
                Customer page
         </CustomerInfoContainer>
        );
    }
}
