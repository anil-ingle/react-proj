import { InjectedFormikProps } from 'formik';
import { InjectedIntlProps } from 'react-intl';
import { RegistrationReq } from '../../../ecall/view-model/registrationreq';

//#region Props & State definitions
export type FormValues = RegistrationReq & { password_confirm: string };

export type StoreProps = {};

export type DispatchProps = {
    loginPage: any;
};

type ExternalProps = {

};

export type OtherProps = ExternalProps & StoreProps & DispatchProps & InjectedIntlProps;

export type FormProps = InjectedFormikProps<OtherProps, FormValues>;

export type State = {};
