// import { ApiFactory, StorageFactory } from "../api";

// export interface IApi {
//     baseApi: {
//         get: (endpoint: string, p?: RequestPayload) => Promise<{}>,
//         post: (endpoint: string, p?: RequestPayload) => Promise<{}>,
//         delete: (endpoint: string, p?: RequestPayload) => Promise<{}>,
//         put: (endpoint: string, p?: RequestPayload) => Promise<{}>,
//     };

//     getApiFactory(): ApiFactory;

//     getCategories: (p?: RequestPayload) => Promise<{}>;
//     postCategories: (p?: RequestPayload) => Promise<{}>;
//     putCategories: (p?: RequestPayload) => Promise<{}>;
//     deleteCategories: (p?: RequestPayload) => Promise<{}>;
//     getProductsOfCategory: (p?: RequestPayload) => Promise<{}>;

//     // getProducts: (p?: RequestPayload) => Promise<ProductsAPIResponse>;
//     getProduct: (p?: RequestPayload) => Promise<{}>;
//     postProducts: (p?: RequestPayload) => Promise<{}>;
//     putProducts: (p?: RequestPayload) => Promise<{}>;
//     deleteProducts: (p?: RequestPayload) => Promise<{}>;
//     getProductsOfGroup: (p?: RequestPayload) => Promise<{}>;

//     getStaticFiles: (p?: RequestPayload) => Promise<{}>;
//     postStaticFiles: (p?: RequestPayload) => Promise<{}>;
//     putStaticFiles: (p?: RequestPayload) => Promise<{}>;
//     deleteStaticFiles: (p?: RequestPayload) => Promise<{}>;

//     addProductToCart: (p?: RequestPayload) => Promise<{}>;
//     getCartItems: (p?: RequestPayload) => Promise<{}>;
//     deleteCart: (p?: RequestPayload) => Promise<{}>;
//     updateItemInCart: (p?: RequestPayload) => Promise<{}>;
//     deleteItemFromCart: (p?: RequestPayload) => Promise<{}>;
//     postCartForCheckout: (p?: RequestPayload) => Promise<{}>;

//     getCurrencies: (p?: RequestPayload) => Promise<{}>;
//     postCurrencies: (p?: RequestPayload) => Promise<{}>;
//     putCurrencies: (p?: RequestPayload) => Promise<{}>;
//     deleteCurrencies: (p?: RequestPayload) => Promise<{}>;

//     getCollections: (p?: RequestPayload) => Promise<{}>;

//     getCustomer: (p?: RequestPayload) => Promise<{}>;
//     putCustomer: (p?: RequestPayload) => Promise<{}>;

//     getAddresses: (p?: RequestPayload) => Promise<{}>;
//     saveAddresses: (p?: RequestPayload) => Promise<{}>;
//     deleteAddresses: (p?: RequestPayload) => Promise<{}>;
//     editAddresses: (p?: RequestPayload) => Promise<{}>;

//     getOrders: (p?: RequestPayload) => Promise<{}>;
//     getOrderItems: (p?: RequestPayload) => Promise<{}>;

//     loginUser: (p?: RequestPayload) => Promise<{}>;
//     signupUser: (p?: RequestPayload) => Promise<{}>;
//     getVProduct: (p?: RequestPayload) => Promise<{}>;
// }

// export interface IApiFactory {
//     send: (method: "GET" | "POST" | "PUT" | "DELETE", endpoint: string, payload: RequestPayload) => Promise<{}>
//     getStorageFactory: () => StorageFactory
// }