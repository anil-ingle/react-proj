import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import * as React from 'react';
import { connect } from 'react-redux';
import * as styled from 'styled-components';

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
            <div>hello</div>
        );
    }
}
// export  User;
const mapStateToProps = (store: any) => {
    return {
    };
};

export default connect<StoreProps, DispatchProps>(
    mapStateToProps,
)(Footer);