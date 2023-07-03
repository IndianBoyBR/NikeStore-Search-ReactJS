/**
 * This file is only need if you want to extract messages into JSON files in locales folder
 * AND if you are also using the object syntax instead of string syntax. \
 * Check the documentation section i18n for details
 */

import { translations } from 'locales/translations';
import { _t } from 'utils/messages';

export const messages = {
  i18nNewOffersPageLink: () =>
    _t(translations.components.header.links.newOffersPage, 'Lançamentos'),
  i18nMalePageLink: () =>
    _t(translations.components.header.links.malePage, 'Masculino'),
  i18nFemalePageLink: () =>
    _t(translations.components.header.links.femalePage, 'Feminino'),
  i18nKidsPageLink: () =>
    _t(translations.components.header.links.kidsPage, 'Infantil'),
  i18nOffersPageLink: () =>
    _t(translations.components.header.links.offersPage, 'Ofertas'),
  i18nHomePageLink: () =>
    _t(translations.components.header.links.homePage, 'SNKRS'),
  i18nSearchButtonLabel: () =>
    _t(translations.components.header.searchButtonLabel, 'Buscar'),
};
