import { Button, Modal } from 'antd';
import styled from 'styled-components';
import { withProps } from '../../common/style';
import { Buttoncolor } from '../../common/style/types';

export const FormButton = withProps<Buttoncolor>()(styled(Button as any))`
    color:white;
    ${(p) => 'background: ' + p.color}
`;
export const RegistrationModal = styled(Modal as any)`
    text-align:center;
    width:40%;
`;
