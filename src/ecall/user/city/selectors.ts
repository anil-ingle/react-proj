import { EParkingStore } from '../../types';
import { createSelector } from 'reselect';

const cityFS = (store: EParkingStore) => store.getIn(['city']);

export const selCity: selector<CityDataResponseImMap> = createSelector(
    [cityFS], (retCityFS) => {
        return retCityFS;
    }
);
