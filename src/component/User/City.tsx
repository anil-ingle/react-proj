import { Select } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { EParkingStore } from '../../ecall/types';
import { sagasActions as cityAreaSaga } from '../../ecall/user/city';
import { selCity } from '../../ecall/user/city/selectors';
import { sagasActions as setUserCityId } from '../../ecall/user/user-city-info';
import { sagasActions as setUserTime } from '../../ecall/user/user-time-info';
import CityArea from './CityArea';
import { CityContainer, DisplayFlex } from './style/CityStyle';

const Option = Select.Option;

type StoreProps = {
    data: CityDataResponseImMap,
};

type DispatchProps = {
    getCity: () => {},
    setUserTime: (setUserTimeAction: any) => {}
    setUserCityId: (setUserCityIdAction: any) => {}
};

type Props = DispatchProps & StoreProps & {};
type State = {
    id: string;
    time: number;
};
const SelectOp = styled(Select as any)`
    width: 250px;
`;
export class RegionalFilter extends React.Component<Props, State> {
    state = {
        id: '',
        time: 0,
    };

    componentDidMount() {
        this.props.getCity();
    }

    handleCityChange = (e: string) => {
        this.setState({ id: e });
        this.props.setUserCityId({ data: { cityId: e } });
    }
    handleTimeChange = (e: string) => {
        this.props.setUserTime({ data: { time: e } });
    }

    render() {
        let city: Array<JSX.Element> = [];
        if (this.props.data.get('data')) {
            this.props.data.getIn(['data']).map((p: any) => {
                city.push(<Option key={p.get('cityId')} > {p.get('cityName')}</Option >);
            });
        }
        return (
            <CityContainer>
                <DisplayFlex>
                    <SelectOp
                        showSearch
                        placeholder=" Select city"
                        optionFilterProp="children"
                        onChange={this.handleCityChange}
                    >
                        {city}
                    </SelectOp>,
                </DisplayFlex>
                <DisplayFlex>
                    <CityArea id={this.state.id} />
                </DisplayFlex>
                <DisplayFlex>
                    <SelectOp
                        showSearch
                        placeholder=" Select a time"
                        optionFilterProp="children"
                        onChange={this.handleTimeChange}
                    >
                        <Option value="1">1 Hr</Option>
                        <Option value="2">2 Hr</Option>
                        <Option value="3">3 Hr</Option>
                        <Option value="4">4+ Hr</Option>
                    </SelectOp>,
                </DisplayFlex>
            </CityContainer>
        );
    }
}
export default connect<StoreProps, DispatchProps, {}, EParkingStore>(
    s => ({
        data: selCity(s)
    }),
    {
        getCity: cityAreaSaga.getCityAction,
        setUserTime: setUserTime.setUserTimeAction,
        setUserCityId: setUserCityId.setUserCityIdAction,
    }
)(RegionalFilter);
