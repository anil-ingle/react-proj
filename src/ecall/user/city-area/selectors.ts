import { EParkingStore } from '../../types';
import { createSelector } from 'reselect';

const cityAreaFS = (store: EParkingStore) => store.getIn(['cityArea']);

const cityAreaActFS = (store: EParkingStore) => store.getIn(['cityArea_act']);

export const selCityArea: selector<CityAreaDataResponseImMap> = createSelector(
    [cityAreaFS], (retCityAreaFS) => {
        return retCityAreaFS;
    }
);

export const selCityAreaAct: selector<CityAreaDataResponseImMap> = createSelector(
    [cityAreaActFS], (retCityAreaFS) => {
        return retCityAreaFS;
    }
);