import { all, spawn, fork, ForkEffect } from 'redux-saga/effects';

// import { CategoriesSaga } from '../eComClient/categories';
// import { ProductsSaga } from '../eComClient/products';
// import { CartsSaga } from '../eComClient/carts';
// import { CurrenciesSaga } from '../eComClient/currencies';
// import { ProductSaga } from '../eComClient/selectedProduct';
// import { CheckoutSaga } from '../eComClient/checkout';
// import { UserSaga } from '../eComClient/user';
// import { Api } from '../eComClient/api';
// import { CollectionsSaga } from '../eComClient/collections';
// import { OrdersSaga } from '../eComClient/orders';
// import { SelectedOrderSaga } from '../eComClient/selectedOrder';
// import { AddressesSaga } from '../eComClient/addresses';
// import { CustomerSaga } from '../eComClient/customer';
// import { ChildProductSaga } from '../eComClient/childProduct';
// import { Logger } from '../eComClient/logger';
import { loginSaga } from '../ecall/login';

export function* rootSaga() {
    // const api = new Api();
    // const log = new Logger();

    yield all([
        // ...(new CategoriesSaga(log)).getSagaWatchers(api),
        // ...(new ProductsSaga(log)).getSagaWatchers(api),
        // ...(new CartsSaga(log)).getSagaWatchers(api),
        // ...(new CurrenciesSaga(log)).getSagaWatchers(api),
        // ...(new ProductSaga(log).getSagaWatchers(api)),
        // ...(new CheckoutSaga(log).getSagaWatchers(api)),
        // ...(new UserSaga(log).getSagaWatchers(api)),
        // ...(new CollectionsSaga(log).getSagaWatchers(api)),
        // ...(new OrdersSaga(log).getSagaWatchers(api)),
        // ...(new SelectedOrderSaga(log).getSagaWatchers(api)),
        // ...(new AddressesSaga(log).getSagaWatchers(api)),
        // ...(new CustomerSaga(log).getSagaWatchers(api)),
        // ...(new ChildProductSaga(log).getSagaWatchers(api)),
        // ...(new loginSaga.getSagaWatchers()),
    ]);
}