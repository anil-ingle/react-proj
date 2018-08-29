import * as React from 'react';
import Clock from 'react-live-clock';
import * as SC from './style/TimeHeader.Style';

export const TimeHeader: React.SFC = () => (
    <SC.TimeHeaderContainer>
        <SC.HeaderLineDiv>
            <SC.HeaderLineLine>
                Adoni Parking area
                    </SC.HeaderLineLine>
        </SC.HeaderLineDiv>
        <SC.WatchDiv>
            <SC.HeaderLineLine>
                Date: <Clock format={'HH:mm:ss'} ticking={true} timezone={'Asia/Kolkata'} />
            </SC.HeaderLineLine>
        </SC.WatchDiv>

    </SC.TimeHeaderContainer>
);
