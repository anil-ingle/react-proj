import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Select } from 'antd';
import * as React from 'react';
import * as styled from 'styled-components';
import { connect } from 'react-redux';
import { sagasActions as citySaga } from '../../ecall/user/city-area';
import { sagasActions as parkingArea } from '../../ecall/user/parking-slot';
const Option = Select.Option;

const CityAreaContainer = styled.default.div`
    margin:0px;
    padding:0px;   
`;
type StoreProps = {
    data: any,
};
interface StateProps {
    id: any;
}
type DispatchProps = {
    getCityArea: (cityAreaAction: any) => {}
    getParkingSlot: (parkingAreaAction: any) => {}
};

type Props = StateProps & StoreProps & DispatchProps & {};
type State = {};
export class CityArea extends React.Component<Props, State> {
    handleChange = (id: any) => {
        if (id !== 0) {
            this.props.getParkingSlot({ data: { id } });
        }

    }

    componentWillReceiveProps(props: any) {
        if (this.props.id !== props.id && props.id !== 0) {
            this.onCityArea(props.id);

        }
    }
    onCityArea(id: number) {
        this.props.getCityArea({ data: { id } });
    }

    render() {
        let cityArea: Array<JSX.Element> = [];
        if (this.props.data.get('cityArea').get('data')) {
            this.props.data.getIn(['cityArea', 'data']).map((c: any) => {
                let areaId = 0, areaName = '';
                if (c && c.size > 0) {
                    areaId = c.getIn(['areaId']);
                    areaName = c.getIn(['areaName']);
                }
                cityArea.push(<Option key={areaId} > {areaName}</Option >);
            });
        }

        return (

            <CityAreaContainer>
                <Select
                    showSearch
                    style={{ width: '250px' }}
                    placeholder="Please select city area"
                    optionFilterProp="children"
                    onChange={this.handleChange}
                >
                    {cityArea}
                </Select>,
                </CityAreaContainer>
        );
    }
}
// export  User;
const mapStateToProps = (store: any) => {
    return {
        data: store, // selData(store)
    };
};

export default connect<StoreProps, DispatchProps>(
    mapStateToProps,
    {
        getCityArea: citySaga.cityAreaAction,
        getParkingSlot: parkingArea.parkingAreaAction,
    }
)(CityArea);
