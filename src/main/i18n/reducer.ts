import { fromJS } from 'immutable';
import { CHANGE_LOCALE } from './constant';
import { SkPlainObj, reducerFn, reducerType } from './types';
import { env } from '../../config';

const INITIAL_STATE: ImMap<SkPlainObj> = fromJS({
  locale: env.default_locale,
} as SkPlainObj);

const languageProviderReducer: reducerFn = (language = INITIAL_STATE, action: Action<{ locale: string }>) => {
  switch (action.type) {
    case CHANGE_LOCALE:
      return language.set('locale', action.payload.locale);
    default:
      return language;
  }
};

/** all reducers - for products */
export const reducer: reducerType = { language: languageProviderReducer };
