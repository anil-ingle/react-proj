import { DatePicker, Form, Icon, Input, Radio, Select } from 'antd';
import * as moment from 'moment';
import * as React from 'react';
import { connect } from 'react-redux';
import { sagasActions as register } from '../../ecall/register';
import { selRegister } from '../../ecall/register/selectors';
import { EParkingStore } from '../../ecall/types';
import { sagasActions as city } from '../../ecall/user/city';
import { selCity } from '../../ecall/user/city/selectors';
import { FormButton, RegistrationModal } from './style/AntResister.Style';
import * as SC from './style/Register.Style';

type StoreProps = {
    data: CityDataResponseImMap;
    successMsg: any;
};
type DispatchProps = {
    register: (registerAction: any) => {},
    getCity: () => {},
};
type StateProps = {
    isOpen: boolean;
    isClose: boolean;
    closeModal1: any;
};
type form = {
    fName?: string;
    lName?: string;
    email?: string;
    pass?: string;
    password?: string;
    mobileNumber?: string;
    cityId?: string;
    dob?: string;
    currentTime?: string;
    gender?: string;
};
type State = form & {
    isOpen: boolean;
    errorMsg: string;
    fNameError: boolean;
    lNameError: boolean;
    emailError: boolean;
    passwordError: boolean;
    mobileNumberError: boolean;
    cityIdError: boolean;
    dobError: boolean;
    fNameErrorMsg: string;
    lNameErrorMsg: string;
    emailErrorMsg: string;
    passwordErrorMsg: string;
    mobileNumberErrorMsg: string;
    dobErrorMsg: string;
    cityIdErrorMsg: string;
    conformPassword: string;
    conformPasswordError: boolean;
};
const Option = Select.Option;
type Props = DispatchProps & StoreProps & StateProps & {};

class Registration extends React.Component<Props, State> {
    state = {
        isOpen: false,
        fName: '',
        lName: '',
        email: '',
        password: '',
        conformPassword: '',
        gender: 'male',
        mobileNumber: '',
        dob: '',
        errorMsg: '',
        cityId: '',
        fNameError: false,
        lNameError: false,
        emailError: false,
        passwordError: false,
        mobileNumberError: false,
        dobError: false,
        cityIdError: false,
        conformPasswordError: false,
        fNameErrorMsg: '',
        lNameErrorMsg: '',
        emailErrorMsg: '',
        passwordErrorMsg: '',
        mobileNumberErrorMsg: '',
        dobErrorMsg: '',
        cityIdErrorMsg: '',

    };
    componentDidMount() {
        this.props.getCity();
    }
    render() {
        let st = this.state;
        let Usercity: Array<JSX.Element> = [];
        if (this.props.data.get('data')) {
            this.props.data.getIn(['data']).map((p: any) => {
                Usercity.push(<Option key={p.get('cityId')} > {p.get('cityName')}</Option >);
            });
        }

        return (
            <SC.ModalContainer>
                <RegistrationModal
                    title="Registration Forn"
                    visible={this.props.isOpen}
                    onCancel={this.handleCancel}
                >
                    <Form>
                        <SC.DisplayFlexDiv>
                            <SC.FormRegister>
                                <Input
                                    placeholder="Enter First name"
                                    prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.
                                        fNameChange(e.target.value)}
                                    value={st.fName}
                                />
                                <SC.SpanDiv>
                                    <SC.ErrorSpan >{st.fNameError ? st.fNameErrorMsg : ''}</SC.ErrorSpan>
                                </SC.SpanDiv>
                            </SC.FormRegister>
                            <SC.FormRegister>
                                <Input
                                    placeholder="Enter Last name"
                                    prefix={<Icon type="User" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.
                                        lNameChange(e.target.value)}
                                    value={st.lName}
                                />
                                <SC.SpanDiv>
                                    <SC.ErrorSpan >{st.lNameError ? st.lNameErrorMsg : ''}</SC.ErrorSpan>
                                </SC.SpanDiv>
                            </SC.FormRegister>
                        </SC.DisplayFlexDiv>
                        <SC.DisplayFlexDiv>
                            <SC.FormRegister>
                                <Input
                                    placeholder="Enter Password"
                                    type="password"
                                    prefix={<Icon type="password" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.
                                        passwordChange(e.target.value)}
                                    value={st.password}
                                />
                                <SC.SpanDiv>
                                    <SC.ErrorSpan >{st.passwordError ? st.passwordErrorMsg : ''}</SC.ErrorSpan>
                                </SC.SpanDiv>
                            </SC.FormRegister>
                            <SC.FormRegister>
                                <Input
                                    placeholder="Conform Password"
                                    type="password"
                                    prefix={<Icon type="password" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.
                                        confornPasswordChange(e.target.value)}
                                    value={st.conformPassword}
                                />
                                <SC.SpanDiv>
                                    <SC.ErrorSpan >{st.conformPasswordError ? 'Password not match' : ''}</SC.ErrorSpan>
                                </SC.SpanDiv>
                            </SC.FormRegister>
                        </SC.DisplayFlexDiv>
                        <SC.DisplayFlexDiv>
                            <SC.FormRegister>
                                <Input
                                    placeholder="Enter Email"
                                    prefix={<Icon type="Email" style={{ color: 'rgba(0,0,0,.25)' }} />}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.
                                        emailChange(e.target.value)}
                                    value={st.email}
                                />
                                <SC.SpanDiv>
                                    <SC.ErrorSpan >{st.emailError ? st.emailErrorMsg : ''}</SC.ErrorSpan>
                                </SC.SpanDiv>
                            </SC.FormRegister>
                            <SC.FormRegister>
                                <Input
                                    placeholder="Enter Mobile number"
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.
                                        mobileNumberChange(e.target.value)}
                                    value={st.mobileNumber}
                                />
                                <SC.SpanDiv>
                                    <SC.ErrorSpan >{st.mobileNumberError ? st.mobileNumberErrorMsg : ''}</SC.ErrorSpan>
                                </SC.SpanDiv>
                            </SC.FormRegister>
                        </SC.DisplayFlexDiv>
                        <SC.DisplayFlexDiv>
                            <SC.DateDiv>
                                <DatePicker
                                    onChange={this.onDateChange}
                                    placeholder="Select date of birth"
                                />
                                <SC.SpanDiv>
                                    <SC.ErrorSpan >{st.dobError ? st.dobErrorMsg : ''}</SC.ErrorSpan>
                                </SC.SpanDiv>
                            </SC.DateDiv>
                            <SC.DateDiv>
                                <Select
                                    showSearch
                                    placeholder=" Select a city"
                                    optionFilterProp="children"
                                    onChange={this.handleCity}
                                >
                                    {Usercity}
                                </Select>
                                <SC.ErrorSpan >{st.cityIdError ? st.cityIdErrorMsg : ''}</SC.ErrorSpan>
                            </SC.DateDiv>
                        </SC.DisplayFlexDiv>
                        <SC.DisplayFlexDiv>
                            <div>
                                <Radio.Group defaultValue="male" buttonStyle="solid" onChange={this.onGenderChange}>
                                    <Radio.Button value="male">Male</Radio.Button>
                                    <Radio.Button value="female">Female</Radio.Button>
                                    <Radio.Button value="other">Other</Radio.Button>
                                </Radio.Group>
                                <SC.SpanDiv>
                                    <SC.ErrorSpan >{st.dobError ? '' : ''}</SC.ErrorSpan>
                                </SC.SpanDiv>
                            </div>
                        </SC.DisplayFlexDiv>
                        <SC.ButtonDiv>
                            <SC.BlockDiv>
                                <FormButton onClick={this.handleCancel} color={'#c34242'}>Cancel</FormButton>
                            </SC.BlockDiv>
                            <SC.BlockDiv>
                                <FormButton onClick={this.register} color={'#2196F3'} >Register </FormButton>
                            </SC.BlockDiv>
                        </SC.ButtonDiv>
                    </Form>
                </RegistrationModal>
            </SC.ModalContainer>
        );
    }
    register = () => {
        (window as any).otp = true;
        let error = this.validate();
        if (error) {
            // toastr.warning('error');
        } else {
            let registerForm: form = {};
            let st = this.state;
            registerForm.fName = st.fName;
            registerForm.lName = st.lName;
            registerForm.pass = st.password;
            registerForm.email = st.email;
            registerForm.mobileNumber = st.mobileNumber;
            registerForm.dob = st.dob;
            registerForm.cityId = st.cityId;
            registerForm.gender = st.gender;
            registerForm.currentTime = moment(new Date()).format('YYYY-MM-DD');
            if (this.register) {
                this.props.register({ data: { registerForm: registerForm } });
                this.closeModal();
            }
        }
    }
    closeModal = () => {
        this.props.closeModal1();
    }
    handleCancel = () => {
        this.reset();
        this.closeModal();
    }
    fNameChange = (fName: string) => {
        if (this.state.fNameError) {
            this.setState({ fName, fNameError: false });
        } else {
            this.setState({ fName });
        }
        this.setState({ fName });
    }
    lNameChange = (lName: string) => {
        if (this.state.lNameError) {
            this.setState({ lName, lNameError: false });
        } else {
            this.setState({ lName });
        }
    }
    emailChange = (email: string) => {
        if (this.state.emailError) {
            this.setState({ email, emailError: false });
        } else {
            this.setState({ email });
        }
    }
    passwordChange = (password: string) => {
        if (this.state.passwordError || this.state.conformPasswordError) {
            if (this.state.conformPassword === password) {
                this.setState({ password, passwordError: false, conformPasswordError: false });
            } else {
                this.setState({ password, passwordError: false, conformPasswordError: true });
            }
        } else {
            if (this.state.conformPassword === password) {
                this.setState({ password, conformPasswordError: false });
            } else {
                this.setState({ password, conformPasswordError: true });
            }
        }
    }
    confornPasswordChange = (pass: string) => {
        if (this.state.password === pass) {
            this.setState({ conformPassword: pass, conformPasswordError: false });
        } else {
            this.setState({ conformPassword: pass, conformPasswordError: true });
        }
    }
    mobileNumberChange = (mobileNumber: string) => {
        if (this.state.mobileNumberError) {
            this.setState({ mobileNumber, mobileNumberError: false });
        } else {
            this.setState({ mobileNumber });
        }
    }
    handleCity = (cityId: string) => {
        if (this.state.cityIdError) {
            this.setState({ cityId, cityIdError: false });
        } else {
            this.setState({ cityId });
        }
    }
    onDateChange = (bday: any) => {
        let dob = moment(bday).format('YYYY-MM-DD');
        if (this.state.dobError) {
            this.setState({ dob, dobError: false });
        } else {
            this.setState({ dob });
        }
    }
    onGenderChange = (event: any) => {
        this.setState({ gender: event.target.value });
    }
    validate = () => {
        let st = this.state;
        let fNameError = false, fNameErrorMsg = '';
        let lNameError = false, lNameErrorMsg = '';
        let passwordError = false, passwordErrorMsg = '';
        let emailError = false, emailErrorMsg = '';
        let mobileNumberError = false, mobileNumberErrorMsg = '';
        let dobError = false, dobErrorMsg = '';
        let cityIdError = false, cityIdErrorMsg = '';
        let isError = true;

        if (st.fName && st.fName.length > 0) {
            fNameError = false;
        } else {
            fNameError = true;
            fNameErrorMsg = 'First name required';
        }
        if (st.lName && st.lName.length > 0) {
            lNameError = false;
        } else {
            lNameError = true;
            lNameErrorMsg = 'Last name required';
        }
        if (st.password.length > 6 && st.password.length <= 10) {
            passwordError = false;
        } else {
            passwordError = true;
            passwordErrorMsg = 'Password should have 6-10 digit required';
        }
        if (st.email && st.email.length > 0) {
            if (st.email.match(/^\S+@\S+\.\S+$/)) {
                emailError = false;
            } else {
                emailError = true;
                emailErrorMsg = 'Email not valid';
            }
        } else {
            emailError = true;
            emailErrorMsg = 'Email  required';
        }
        if (st.mobileNumber.length === 10 && st.mobileNumber.match(/^[6-9]\d{9}$/)) {
            mobileNumberError = false;
        } else {
            mobileNumberError = true;
            mobileNumberErrorMsg = 'ENter Valid Mobile Number required';
        }
        if (st.dob && st.dob.length > 0) {
            dobError = false;
        } else {
            dobError = true;
            dobErrorMsg = 'Date of Birth required required';
        }
        if (st.cityId && st.cityId.length > 0) {
            cityIdError = false;
        } else {
            cityIdError = true;
            cityIdErrorMsg = 'Please Select city';
        }
        this.setState({
            fNameError, fNameErrorMsg, lNameError, lNameErrorMsg, passwordError, passwordErrorMsg,
            emailError, emailErrorMsg, mobileNumberError, mobileNumberErrorMsg, dobError,
            dobErrorMsg, cityIdError, cityIdErrorMsg
        });
        if (fNameError || lNameError || passwordError || emailError || mobileNumberError || dobError || cityIdError) {
            isError = true;
        } else {
            isError = false;
        }
        return isError;
    }
    reset = () => {
        this.setState({
            fName: '', lName: '', email: '', password: '', mobileNumber: '', dob: '', cityId: '',
            fNameError: false, fNameErrorMsg: '', lNameError: false, lNameErrorMsg: '', passwordError: false,
            passwordErrorMsg: '', emailError: false, emailErrorMsg: '', mobileNumberError: false,
            mobileNumberErrorMsg: '', dobError: false, dobErrorMsg: '', cityIdError: false, cityIdErrorMsg: '',
            conformPasswordError: false, conformPassword: '',
        });
    }
}

export default connect<StoreProps, DispatchProps, {}, EParkingStore>(
    store => ({
        data: selCity(store),
        successMsg: selRegister(store),
    }),
    {
        register: register.registerAction,
        getCity: city.getCityAction,
    }
)(Registration);
