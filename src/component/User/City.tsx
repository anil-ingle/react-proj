import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import { Select } from 'antd';
import * as React from 'react';
import { connect } from 'react-redux';
import { sagasActions as cityAreaSaga } from '../../ecall/user/city';
import { sagasActions as userIsAndTime } from '../../ecall/user/user-info';
import { CityContainer, DisplayFlex } from './style/CityStyle';
import CityArea from './CityArea';
const Option = Select.Option;

type StoreProps = {
    data: any,
};

type DispatchProps = {
    getCity: () => {},
    setUserAreaIdTime: (setUserAreaIdTimeAction: any) => {}
};

type Props = DispatchProps & StoreProps & {};
type State = {};
export class ReginalFilter extends React.Component<Props, State> {
    state = {
        city: [],
        id: 0,
        time: 0,
    };

    componentDidMount() {
        this.props.getCity();
    }

    handleCityAreaChange = (e: any) => {
        if (this.state.time > 0) {
            this.props.setUserAreaIdTime({ data: { id: e, time: this.state.time } });
        }
        this.setState({ id: e });

    }
    handleTimeChange = (e: any) => {
        if (this.state.id > 0) {
            this.props.setUserAreaIdTime({ data: { id: this.state.id, time: e } });
        }
        this.setState({ time: e });
    }

    render() {
        let city: Array<JSX.Element> = [];
        if (this.props.data.get('city').get('data')) {
            let flag = true, count = 0, cityId = 0, cityName = '';
            this.props.data.getIn(['city', 'data']).map((p: any) =>
                p.map((c: any) => {
                    count++;
                    if (flag) {
                        cityId = c; flag = false;
                    } else {
                        cityName = c; flag = true;
                    }
                    if (count === 2) {
                        city.push(<Option key={cityId} > {cityName}</Option >);
                        count = 0; cityName = ''; cityId = 0;
                    }

                }));
        }
        return (
            <CityContainer>
                <DisplayFlex>
                    <Select
                        showSearch
                        style={{ width: '250px' }}
                        placeholder="Please select city"
                        optionFilterProp="children"
                        onChange={this.handleCityAreaChange}
                    >
                        {city}
                    </Select>,
                </DisplayFlex>
                <DisplayFlex>
                    <CityArea id={this.state.id} />
                </DisplayFlex>
                <DisplayFlex>
                    <Select
                        showSearch
                        style={{ width: '250px' }}
                        placeholder="Select a time"
                        optionFilterProp="children"
                        onChange={this.handleTimeChange}
                    >
                        <Option value="1">1 Hr</Option>
                        <Option value="2">2 Hr</Option>
                        <Option value="3">3 Hr</Option>
                        <Option value="4">4+ Hr</Option>
                    </Select>,
                </DisplayFlex>
            </CityContainer>
        );
    }
}
const mapStateToProps = (store: any) => {
    return {
        data: store, // selData(store)
    };
};

export default connect<StoreProps, DispatchProps>(
    mapStateToProps,
    {
        getCity: cityAreaSaga.getCityAction,
        setUserAreaIdTime: userIsAndTime.setUserAreaIdTimeAction,
    }
)(ReginalFilter);
