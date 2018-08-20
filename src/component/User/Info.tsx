import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import * as React from 'react';
import { InfoContainer, UserInfo } from './style/UserWalletStyle';

const Info: React.SFC = () => (
    <InfoContainer>
        <UserInfo>
            Please Click Register Button and get Slot After click select slot and book.
   </UserInfo>
        <UserInfo>
            Note:First Five slot are two wheeler
       </UserInfo>
    </InfoContainer>
);

export default Info;
