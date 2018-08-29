interface Login {
  id: number;
  roll: number;
  fName: string;
  lName: string;
  email: string;
  pass?: string;
  dob?: string;
  mobileNumber: string;
  gender: string;
  cityId: number;
  currentTime?: string;
  totalAmount: number;
}
interface City {
  cityId: number;
  cityName: string;
}

interface CityArea {
  areaId: number;
  areaName: string;
}

interface ParkingSlot {
  slotId: number;
  slotNumber: number;
  isReserved: number;
  fSlotId: number;
}

interface WalletMoney {
  walletId: number;
  totalAmount: number;
}

interface UserTime {
  time: String;
}
interface ForgetPass{
  key:string;
  code:number;
}

type LoginDataResponse = DataResponse<Login>;
type LoginDataResponseImMap = ImMap<LoginDataResponse>;
type LoginAPIResponse = APIResponse<Login>;

type CityDataResponse = DataResponse<City>;
type CityDataResponseImMap = ImMap<CityDataResponse>;
type CityAPIResponse = APIResponse<City>;

type CityAreaDataResponse = DataResponse<CityArea>;
type CityAreaDataResponseImMap = ImMap<CityAreaDataResponse>;
type CityAreaAPIResponse = APIResponse<CityArea>;

type ParkingSlotDataResponse = DataResponse<ParkingSlot>;
type ParkingSlotResponseImMap = ImMap<ParkingSlotDataResponse>;
type ParkingSlotAPIResponse = APIResponse<ParkingSlot>;

type WalletMoneyDataResponse = DataResponse<WalletMoney>;
type WalletMoneyResponseImMap = ImMap<WalletMoneyDataResponse>;
type WalletMoneyAPIResponse = APIResponse<WalletMoney>;

// type UserTimeDataResponse = DataResponse<UserTime>;
type UserTimeImMap = ImMap<UserTime>;
// type UserTimeAPIResponse = APIResponse<UserTime>;

type ForgetPassDataResponse = DataResponse<ForgetPass>;
type ForgetPassResponseImMap = ImMap<ForgetPassDataResponse>;
type ForgetPassAPIResponse = APIResponse<ForgetPass>;

type actionCreator<T> = (p: T) => Action<T>;
