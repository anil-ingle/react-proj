import { CHANGE_LOCALE } from './constant';

export function changeLocale(languageLocale: string): Action<{ locale: string }> {
  return {
    type: CHANGE_LOCALE,
    payload: { locale: languageLocale },
  };
}
