import * as React from 'react';
import FormItem from '../../FormItem';
import { FormProps, DispatchProps, StoreProps } from './registration-type';
import RegistrationStyleWrapper from './registration-style';
import { Modal } from 'antd';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { EParkingStore } from '../../../ecall/types';
type State = {
    isOpen: boolean;
};
interface MyFormValues {
    firstName: string;
    lastName: string;
}

class Registration extends React.Component<FormProps, State> {
    state = {
        isOpen: false,

    };
    static getDerivedStateFromProps(nextProps: FormProps, state: State) {

        return null;
    }
    componentDidMount() {
        this.setState({ isOpen: window.reg });
    }
    handleCancel = () => {
        this.setState({ isOpen: false });
        this.props.loginPage();

    }
    render() {

        const { values, errors, handleBlur, handleChange, handleSubmit, isSubmitting } = this.props;
        return (
            <Modal
                title="Registratin page"
                visible={this.state.isOpen}
                onCancel={this.handleCancel}
            >
                <RegistrationStyleWrapper>
                    <form onSubmit={handleSubmit}>
                        <div className="Form-Style">
                            <FormItem formKey="first_name" errors={errors} >
                                <input
                                    placeholder="First Name"
                                    type="text"
                                    name="first_name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.first_name}
                                    style={{ paddingLeft: '5px' }}
                                />
                            </FormItem>
                            <FormItem formKey="last_name" errors={errors} >
                                <input
                                    placeholder="Last Name"
                                    type="text"
                                    name="last_name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.last_name}
                                    style={{ paddingLeft: '5px' }}
                                />
                            </FormItem>
                        </div>
                        <div className="Form-Style">
                            <FormItem formKey="password" errors={errors} >
                                <input
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    style={{ paddingLeft: '5px' }}
                                />
                            </FormItem>
                            <FormItem formKey="password" errors={errors} >
                                <input
                                    placeholder="Conform Password"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    style={{ paddingLeft: '5px' }}
                                />
                            </FormItem>
                        </div>
                        <div className="Form-Style">
                            <FormItem formKey="email" errors={errors} >
                                <input
                                    placeholder="Email"
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                    style={{ paddingLeft: '5px' }}
                                />
                            </FormItem>
                            <FormItem formKey="mobileNumber" errors={errors} >
                                <input
                                    placeholder="Mobile Number"
                                    type="text"
                                    name="mobileNumber"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.mobileNumber}
                                    style={{ paddingLeft: '5px' }}
                                />
                            </FormItem>
                        </div>
                        <div className="Form-Style">
                            <div>
                                <button type="submit" disabled={isSubmitting} onClick={() => handleSubmit} >
                                    Register now
                        </button>
                            </div>
                            <div>
                                <button type="button" onClick={this.handleCancel} >
                                    Cancel
                        </button>
                            </div>
                        </div>
                    </form>
                </RegistrationStyleWrapper>
            </Modal>
        );
    }
}
export default connect<StoreProps, DispatchProps, {}, EParkingStore>(
    store => ({

    }),
    {
        loginPage: () => push('/'),

    }
)(Registration);
