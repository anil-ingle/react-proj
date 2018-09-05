import * as React from 'react';
import { Form } from 'antd';

export default ({ formKey, errors, children }: { formKey: string, errors: object, children: React.ReactNode }) => (
    <Form.Item
        hasFeedback={!!errors[formKey]}
        validateStatus={errors[formKey] && 'error'}
        help={errors[formKey]}
    >
        {children}
    </Form.Item>);
