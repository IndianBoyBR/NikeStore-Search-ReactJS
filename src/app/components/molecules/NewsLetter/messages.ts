/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */

import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  i18nTitle: () =>
    _t(translations.components.newsLetter.title, 'RECEBA AS NOVIDADES DA NIKE'),
  i18nMessage: () =>
    _t(
      translations.components.newsLetter.message,
      'Cadastre-se e seja um dos primeiros a saber de todas as novidades e ofertas.',
    ),
  i18nRegisterButtonLabel: () =>
    _t(translations.components.newsLetter.registerButtonLabel, 'Cadastre-se'),
};
