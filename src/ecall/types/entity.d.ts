interface IAddress {
    type?: string;
    id?: string;
    first_name: string;
    last_name: string;
    company_name: string;
    line_1: string;
    line_2: string;
    city: string;
    postcode: string;
    county: string;
    country: string;
    instructions?: string;
    phone_number: string
}

type AddressImMap = ImMap<IAddress>;
type AddressesDataResponse = DataResponse<IAddress[]>;
type AddressesDataResponseImMap = ImMap<AddressesDataResponse>;
type AddressesAPIResponse = APIResponse<AddressesDataResponse>;

interface Category {
    id: string;
    type: string;
    status: string;
    name: string;
    slug: string;
    description: string;
    meta: Meta;
    relationships: Relationships;
}

interface DisplayPrice {
    with_tax: WithTaxOrWithoutTax;
    without_tax: WithTaxOrWithoutTax;
}
interface WithTaxOrWithoutTax {
    amount: number;
    currency: string;
    formatted: string;
}

interface Dimensions {
    width: number;
    height: number;
}

interface Results {
    total: number;
    all: number;
}

interface Page {
    limit: number;
    offset: number;
    current: number;
    total: number;
}

interface Stock {
    level: number;
    availability: string;
}

interface VariationOption {
    id: string;
    name: string;
    description: string;
}

interface Variation {
    id: string;
    name: string;
    options?: VariationOption[];
}

interface Meta {
    timestamps?: Timestamps;
    display_price?: DisplayPrice;
    dimensions?: Dimensions;
    results?: Results;
    page?: Page;
    stock?: Stock;
    variations?: Variation[];
}

interface Timestamps {
    created_at: string;
    updated_at: string;
}

interface TypeAndId {
    id: string;
    type: string;
}

interface RelationShipsData {
    data: Array<TypeAndId>;
}

interface MainImage {
    data: TypeAndId;
}

interface Relationships {
    products?: RelationShipsData;
    main_image: MainImage;
    files?: RelationShipsData;
    categories?: RelationShipsData;
    brands?: RelationShipsData;
    parent?: RelationShipsData;
    items?: RelationShipsData;
    collections?: RelationShipsData
}

type CategoriesDataResponse = DataResponse<Category[]>;
type CategoriesDataResponseImMap = ImMap<CategoriesDataResponse>;
type CategoriesAPIResponse = APIResponse<CategoriesDataResponse>;

interface Product {
    type: string;
    id: string;
    name: string;
    slug: string;
    sku: string;
    manage_stock: boolean;
    main_image_href?: string;
    description: string;
    price: (PriceEntity)[] | null;
    status: string;
    commodity_type?: string;
    meta?: Meta;
    relationships: Relationships;
    size?: string | null;
    material?: string | null;
    sleeve_type?: string | null;
    HDFormat?: string | null;
    TVFeature?: string | null;
    displaysize?: string | null;
}
type ProductImMap = ImMap<Product>;

interface PriceEntity {
    amount: number;
    currency: string;
    includes_tax: boolean;
}

interface IncludedFiles { files: Array<StaticFile>, main_images: Array<StaticFile> }

type ProductIncludedWithFiles = DataResponse<Product, IncludedFiles>

type ProductDataResponse = DataResponse<Product>;
type ProductDataResponseImMap = ImMap<ProductDataResponse>;
type ProductAPIResponse = APIResponse<ProductDataResponse>;
type ProductsDataResponse = DataResponse<Product[], { groupedData: Category | Collection }>;
type ProductsDataResponseImMap = ImMap<ProductsDataResponse>;
type ProductsAPIResponse = APIResponse<ProductsDataResponse>;

type CategoriesIncludedWithProductsDataResponse = DataResponse<Category[], { products: Product[] }>;
type CategoriesIncludedWithProductsImMap = ImMap<CategoriesIncludedWithProductsDataResponse>;
type CategoriesIncludedWithProductsAPIResponse = APIResponse<CategoriesIncludedWithProductsDataResponse>;

interface Cart {
    id: string;
    type: string;
    product_id: string;
    name: string;
    description: string;
    sku: string;
    quantity: number;
    manage_stock: boolean;
    unit_price: UnitPriceOrValue;
    value: UnitPriceOrValue;
    links: Links;
    meta: Meta;
    image: Image;
}

interface Image {
    mime_type: string;
    file_name: string;
    href: string;
}

interface UnitPriceOrValue {
    amount: number;
    currency: string;
    includes_tax: boolean;
}
interface DisplayPrice {
    with_tax: WithTaxOrWithoutTax;
    without_tax: WithTaxOrWithoutTax;
}
interface WithTaxOrWithoutTax {
    unit: UnitOrValueOrWithTaxOrWithoutTax;
    value: UnitOrValueOrWithTaxOrWithoutTax;
}
interface UnitOrValueOrWithTaxOrWithoutTax {
    amount: number;
    currency: string;
    formatted: string;
}

type CartDataResponse = DataResponse<Cart[]>;
type CartDataResponseImMap = ImMap<CartDataResponse>;
type CartAPIResponse = APIResponse<CartDataResponse>;

interface CustomerUsingEmail {
    name: string;
    email: string;
}

interface CustomerUsingToken {
    data: TypeAndId
}

interface Order {
    type: string;
    id: string;
    status: string;
    payment: string;
    shipping: string;
    customer: CustomerUsingToken | CustomerUsingEmail;
    shipping_address: IAddress;
    billing_address: IAddress;
    links: Links;
    meta: Meta;
    relationships: Relationships;
}

type OrderDataResponse = DataResponse<Order>;
type OrderAPIResponse = APIResponse<OrderDataResponse>;
type OrdersIncludedWithItemsDataResponse = DataResponse<Array<Order>, { items: Array<OrderItem> }>;
type OrdersDataResponseImMap = ImMap<OrdersIncludedWithItemsDataResponse>;
type OrdersAPIResponse = APIResponse<OrdersIncludedWithItemsDataResponse>;

interface OrderItem {
    main_image_href?: string;
    type: string;
    id: string;
    quantity: number;
    product_id: string;
    name: string;
    sku: string;
    unit_price: UnitPriceOrValue;
    value: UnitPriceOrValue;
    links: Links;
    meta: Meta;
    relationships: Relationships;
}

type OrderItemsDataResponse = DataResponse<Array<OrderItem>>;
type OrderItemsDataResponseImMap = ImMap<OrderItemsDataResponse>;
type OrderItemsAPIResponse = APIResponse<OrderItemsDataResponse>;

interface Currency {
    id: string;
    type: string;
    code: string;
    exchange_rate: number;
    format: string;
    decimal_point: string;
    thousand_separator: string;
    decimal_places: number;
    default: boolean;
    enabled: boolean;
    links: Links;
    meta: Meta;
}

type CurrenciesDataResponse = DataResponse<Array<Currency>>;
type CurrenciesDataResponseImMap = ImMap<CurrenciesDataResponse>;
type CurrenciesAPIResponse = APIResponse<CurrenciesDataResponse>;

interface Checkout {
    type?: string;
    id?: string;
    status?: string;
    payment?: string;
    shipping?: string;
    customer?: CustomerUsingEmail | CustomerUsingEmail;
    shipping_address?: IAddress;
    billing_address?: IAddress;
    Links?: Links;
    meta?: Meta;
    relationships?: Relationships;
}

type CheckoutDataResponse = DataResponse<Checkout>;
type CheckoutDataResponseImMap = ImMap<CheckoutDataResponse>;
type CheckoutAPIResponse = APIResponse<CheckoutDataResponse>;

interface Collection {
    id: string;
    type: string;
    status: string;
    name: string;
    slug: string;
    description: string;
    meta: Meta;
    relationships: Relationships;
}

type CollectionsIncludedWithProductsDataResponse = DataResponse<Array<Collection>, { included: Array<Product> }, Meta>
type CollectionsIncludedWithProductsImMap = ImMap<CollectionsIncludedWithProductsDataResponse>;
type CollectionsAPIResponse = APIResponse<CollectionsIncludedWithProductsDataResponse>;

interface Customer {
    type?: string;
    id?: string;
    name?: string;
    email?: string;
    password?: boolean;
}

type CustomerDataResponse = DataResponse<Customer>;
type CustomerDataResponseImMap = ImMap<CustomerDataResponse>;
type CustomerAPIResponse = APIResponse<CustomerDataResponse>;

interface Login {
    type?: string;
    id?: string;
    customer_id?: string;
    token?: string;
    expires?: number;
}

type LoginDataResponse = DataResponse<Login>;
type LoginDataResponseImMap = ImMap<LoginDataResponse>;
type LoginAPIResponse = APIResponse<LoginDataResponse>;

interface Signup {
    type: string;
    id: string;
    name: string;
    email: string;
    password: boolean;
}

type SignupDataResponse = DataResponse<Signup>;
type SignupDataResponseImMap = ImMap<SignupDataResponse>;
type SignupAPIResponse = APIResponse<SignupDataResponse>;

interface FormOptions {
    isUserIconClicked: boolean,
    isFormOpen: boolean,
}

type FormOptionsImMap = ImMap<FormOptions>;

interface Link {
    href: string;
}

interface StaticFile {
    type: string;
    id: string;
    link: Link;
    file_name: string;
    mime_type: string;
    file_size: number;
    public: boolean;
    meta: Meta;
    links: Links;
}

type StaticFileDataResponse = DataResponse<StaticFile>;
type StaticFileDataResponseImMap = ImMap<StaticFileDataResponse>;
type StaticFileAPIResponse = APIResponse<StaticFileDataResponse>;