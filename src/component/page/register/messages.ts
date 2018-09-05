import { defineMessages } from 'react-intl';

const namespace = 'saybuiz.tenant.page.signup';

const defaultNamespace = `${namespace}.default`;
export const msgs = {
    first_name: {
        id: `${defaultNamespace}.first_name`,
        defaultMessage: `First Name`,
    },
    last_name: {
        id: `${defaultNamespace}.last_name`,
        defaultMessage: `Last Name`,
    },
    email: {
        id: `${defaultNamespace}.email`,
        defaultMessage: `Email`,
    },
    password: {
        id: `${defaultNamespace}.password`,
        defaultMessage: `Password`,
    },
    password_confirm: {
        id: `${defaultNamespace}.password_confirm`,
        defaultMessage: `Confirm Password`,
    },
    company: {
        id: `${defaultNamespace}.company`,
        defaultMessage: `Company`,
    },
    terms: {
        id: `${defaultNamespace}.terms`,
        defaultMessage: 'Must Accept Terms and Conditions',
    },
};
