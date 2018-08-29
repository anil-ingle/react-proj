import { Select } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import * as styled from 'styled-components';
import { sagasActions as citySaga } from '../../ecall/user/city-area';
import { selCityArea } from '../../ecall/user/city-area/selectors';
import { sagasActions as parkingArea } from '../../ecall/user/parking-slot';
import { EParkingStore } from '../../ecall/types';
const Option = Select.Option;

const CityAreaContainer = styled.default.div`
    margin:0px;
    padding:0px;   
`;
type StoreProps = {
    data: CityAreaDataResponseImMap,
};
interface StateProps {
    id: string;
}
type DispatchProps = {
    getCityArea: (cityAreaAction: any) => {}
    getParkingSlot: (parkingAreaAction: any) => {}
};

type Props = StateProps & StoreProps & DispatchProps & {};
type State = {
    curCityId: number;
};
export class CityArea extends React.Component<Props, State> {
    state = {
        curCityId: 0,
    };
    handleChange = (id: any) => {
        if (id !== 0) {
            this.props.getParkingSlot({ data: { id } });
        }
        this.setState({ curCityId: id });
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
        if (this.props.data.get('data')) {
            this.props.data.getIn(['data']).map((c: any) => {
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
                    placeholder=" Select city area"
                    optionFilterProp="children"
                    onChange={this.handleChange}
                >
                    {cityArea}
                </Select>,
                </CityAreaContainer>
        );
    }
}

export default connect<StoreProps, DispatchProps, {}, EParkingStore>(
    store => ({
        data: selCityArea(store)
    }),
    {
        getCityArea: citySaga.cityAreaAction,
        getParkingSlot: parkingArea.parkingAreaAction,
    }
)(CityArea);
