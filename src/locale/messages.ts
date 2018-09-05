import { defineMessages } from 'react-intl';

const namespace = 'onlineparking.form';

const validationNamespace = `${namespace}.validation`;
export const validationsMsgs = {
    is_required: {
        id: `${validationNamespace}.is_required`,
        defaultMessage: `{field_name} is required`,
    },
    invalid: {
        id: `${validationNamespace}.invalid`,
        defaultMessage: `Invalid {field_name}`,
    },
    do_not_match: {
        id: `${validationNamespace}.do_not_match`,
        defaultMessage: `{field_name} do not match`,
    },
};