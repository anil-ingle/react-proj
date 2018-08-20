import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import * as React from 'react';
import * as styled from 'styled-components';
import { connect } from 'react-redux';
import { Table } from 'antd';
const HeaderContainer = styled.default.div`
width: 100%;
height: 100%;
display: flex;
`;

type StoreProps = {};

type DispatchProps = {};

type Props = DispatchProps & StoreProps & {};
const columns = [{
    title: 'Parking Stand',
    dataIndex: 'parkingStand',
}, {
    title: 'City',
    dataIndex: 'city',
},
{
    title: 'Date',
    dataIndex: 'date',
},
{
    title: 'Intime',
    dataIndex: 'intime',
},
{
    title: 'Outtime',
    dataIndex: 'outtime',
}, {
    title: 'price',
    dataIndex: 'price',
}];

const data = [] as any;
for (let i = 0; i < 46; i++) {
    data.push({
        key: i,
        parkingStand: 'Hydrabad ',
        city: 'hydrabad',
        date: '10-oct-2017',
        intime: '4pm',
        outtime: '9pm',
        price: 210,
    });
}

class OrderHistory extends React.Component {
    state = {
        selectedRowKeys: [], // Check here to configure the default column
        loading: false,
    };

    start = () => {
        this.setState({ loading: true });
        // ajax request after empty completing
        setTimeout(() => {
            this.setState({ selectedRowKeys: [], loading: false, });
        },
        );
    }
    onSelectChange = (selectedRowKeys: any) => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({ selectedRowKeys });
    }
    render() {
        const { loading, selectedRowKeys } = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 0;
        return (
            <HeaderContainer>
                <Table style={{ width: '100%' }} rowSelection={rowSelection} columns={columns} dataSource={data} />,
            </HeaderContainer>
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
)(OrderHistory);