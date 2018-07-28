// import * as React from 'react';
// import * as PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { createSelector } from 'reselect';
// import { IntlProvider } from 'react-intl';

// // import { makeSelectLocale } from './selector';

// type Props = {
//   locale: string,
//   // messages: object,
//   // tslint:disable-next-line:no-any
//   children: React.ReactElement<any>,
// };

// export class BaseLanguageProvider extends React.PureComponent<Props, {}> {
//   render() {
//     return (
//       <IntlProvider
//         locale={this.props.locale}
//         key={this.props.locale}
//       // messages={this.props.messages[this.props.locale]}
//       >
//         {React.Children.only(this.props.children)}
//       </IntlProvider>
//     );
//   }
// }

// const mapStateToProps = createSelector(
//   // makeSelectLocale(),
//   (locale) => ({ locale })
// );

// export const LanguageProvider = connect(mapStateToProps)(BaseLanguageProvider);
