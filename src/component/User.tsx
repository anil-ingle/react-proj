import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import * as React from 'react';
import { connect } from 'react-redux';
import * as styled from 'styled-components';
import { sagasActions } from '../ecall/login';

const HeaderContainer = styled.default.div`
width: 100%;
height: 170px;
display: flex;
flex: 1 1 0%;
align-items: center;
justify-content: center;
font-size: 1.5em;
color: purple;
background: linear-gradient(154deg,#008fe2,#00b29c);
background-color: transparent !important;
  
`;

export class User extends React.Component {

    render() {

        return (
            <HeaderContainer>
                Hello.......
            </HeaderContainer>
        );
    }
}
