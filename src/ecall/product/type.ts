// #region imports
import { List, fromJS } from 'immutable';
import * as React from 'react';
import { connect } from 'react-redux';
import { selCategories } from '../../../eComClient/categories';
import { selCurrencies } from '../../../eComClient/currencies';
import { EComStore } from '../../../eComClient/types';
import { facebookLogo, instagramLogo, twitterLogo } from '../../../image';
import message from '../message';
import {
    FooterCompanyNamePPTUText, FooterContainer, FooterLinksContainer,
    FooterLinksHeader, FooterLinksList, FooterLinksListItem, FooterLinksWrapper,
    FooterPPTUContainer, FooterPPTUWrapper, FooterSocialMediaLogo, FooterSubscribeButton,
    FooterSubscribeContainerDropDown, FooterSubscribeContainerOption, FooterSubscribeContentContainer,
    FooterSubscribeEmailTextBox, FooterSubscribeWrapper
} from '../styled';
// #endregion imports

// #region Quick Styles
// #endregion Quick Styles

// #region Props & State definitions
type Props = DispatchProps & StateProps & {};

type State = {
    languages: Array<string>,
    aboutUsLinks: List<Map<string, any>>, // tslint:disable-line no-any
    supportLinks: List<Map<string, any>>, // tslint:disable-line no-any
    accountLinks: List<Map<string, any>>, // tslint:disable-line no-any
};



interface DispatchProps { }
// #endregion Props & State definitions

// #region Component
export class Footer extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            languages: ['EN', 'HIN'],
            aboutUsLinks: fromJS([
                { name: message.FooterLinksAboutLinkText.defaultMessage },
                { name: message.FooterLinksOurStoryLinkText.defaultMessage }
            ]),
            supportLinks: fromJS([
                { name: message.FooterLinksFAQLinkText.defaultMessage },
                { name: message.FooterLinksSupportLinkText.defaultMessage },
                { name: message.FooterLinksReturnPolicyLinkText.defaultMessage }
            ]),
            accountLinks: fromJS([
                { name: message.FooterLinksLogInLinkText.defaultMessage },
                { name: message.FooterLinksCreateAccountLinkText.defaultMessage }
            ])
        };
    }

    renderLinksInFooter(header: string, links: List<ImMap<Category> | any>) { // tslint:disable-line no-any
        return (
            <div></div>
        );
    }

}
