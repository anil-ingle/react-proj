import { withFormik } from 'formik';
import { compose } from 'redux';
import * as Yup from 'yup';
import { RegistrationReq } from '../../../ecall/view-model/registrationreq';
import { YupObj } from '../../common/yup-extender';
import RegistrationUser from './Registration';
import { FormValues, OtherProps } from './registration-type';
export default compose(

    withFormik<OtherProps, FormValues>({
        validateOnBlur: false,
        validateOnChange: false,
        handleSubmit: ({ first_name, last_name, }, { setSubmitting, props, resetForm }) => {
            // props.register({ first_name, last_name,  });
            const stores: RegistrationReq[] = [];
            setSubmitting(false);
        },
        validationSchema: () => {
            return Yup.object().shape({
                first_name: Yup.string()
                    .required('First Name is Required'),
                last_name: Yup.string()
                    .required('Last Name is Required'),
                    email: Yup.string()
                    .required('Email is Required'),
                    mobileNumber: Yup.string()
                    .required('Mobile Number is Required'),
                    password: Yup.string()
                    .required('Password is Required'),
                    password_confirm: Yup.string()
                    .required('Password is Required'),
            } as YupObj<FormValues>);
        },
    }),

)(RegistrationUser as any);