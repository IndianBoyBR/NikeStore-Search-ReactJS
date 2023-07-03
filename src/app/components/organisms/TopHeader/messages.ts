/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */

import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  i18nHelpPageLink: () =>
    _t(translations.components.topHeader.links.help, 'Ajuda'),
  i18nFollowYourOrderPageLink: () =>
    _t(
      translations.components.topHeader.links.followYourOrder,
      'Acompanhe seu pedido',
    ),
  i18nJoinUsPageLink: () =>
    _t(translations.components.topHeader.links.joinUs, 'Junte-se a nós'),
  i18nLoginLink: () =>
    _t(translations.components.topHeader.links.login, 'Entrar'),
};
