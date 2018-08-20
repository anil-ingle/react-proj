import { AxiosResponse } from 'axios';
// import { storeObj as storeAddresses } from '../addresses';
// import { storeObj as storeCarts } from '../carts';
// import { storeObj as storeCategories } from '../categories';
// import { storeObj as storeChildProduct } from '../childProduct';
// import { storeObj as storeCollections } from '../collections';
// import { storeObj as storeCurrencies } from '../currencies';
// import { storeObj as storeCustomer } from '../customer';
// import { storeObj as storeOrders } from '../orders';
// import { storeObj as storeProducts } from '../products';
// import { storeObj as storeVProducts } from '../vproducts';
// import { storeObj as storeSelectedOrder } from '../selectedOrder';
// import { storeObj as storeSelectedProduct } from '../selectedProduct';
// import { storeObj as storeLanguage } from '../../main/i18n';
// import { storeObj as storeUser } from '../user';

export interface EComResponse<T> extends AxiosResponse {
    data: T
}

// export type EComStore = ImMap<
//     storeAddresses &
//     storeCategories &
//     storeCarts &
//     storeChildProduct &
//     storeCollections &
//     storeCurrencies &
//     storeCustomer &
//     storeOrders &
//     storeProducts &
//     storeSelectedOrder &
//     storeSelectedProduct &
//     storeUser &
//     storeLanguage &
//     storeVProducts
//     >;

// type MSTP<SP> = (store: EComStore) => SP;
