import Amex from 'app/components/atoms/svgs/logos/Amex';
import Discover from 'app/components/atoms/svgs/logos/Discover';
import Elo from 'app/components/atoms/svgs/logos/Elo';
import FacebookRoundedWhite from 'app/components/atoms/svgs/logos/FacebookRoundedWhite';
import Hipercard from 'app/components/atoms/svgs/logos/Hipercard';
import InstagramRoundedWhite from 'app/components/atoms/svgs/logos/InstagramRoundedWhite';
import Mastercard from 'app/components/atoms/svgs/logos/Mastercard';
import Visa from 'app/components/atoms/svgs/logos/Visa';
import YoutubeRoundedWhite from 'app/components/atoms/svgs/logos/YoutubeRoundedWhite';
import ThemeProviderWrapper from 'app/styles/themes/themeProvider';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

import { useCheckIsMediumScreen } from 'app/hooks/useCheckIsMediumScreen';

import Billet from 'app/components/atoms/svgs/logos/Billet';
import { LinksDropdown } from 'app/components/molecules/LinksDropdown';
import { messages } from './messages';
import {
  CompanyInfos,
  Container,
  Hr,
  Links,
  LinksMediumScreen,
  LinksWrapper,
  MainNavLink,
  MediumScreenWrapper,
  MultipleSectionsWrapper,
  PaymentMethods,
  PaymentOptions,
  SectionLabel,
  SectionNavLink,
  SectionTitleMediumScreen,
  SmallScreenWrapper,
  SocialMedias,
  SocialMediasOptions,
  TermLinkStyled,
  TermsLinksMediumScreen,
  TermsSectionMediumScreen,
  TermsSmallScreen,
} from './styles';

interface Props {}

export const Footer = memo((props: Props) => {
  const { t } = useTranslation();

  const helpLinks = [
    {
      label: t(messages.i18nHelpLinks.links.i18nGeneralQuestions()),
      url: '/',
    },
    {
      label: t(messages.i18nHelpLinks.links.i18FindYourSize()),
      url: '/',
    },
    {
      label: t(messages.i18nHelpLinks.links.i18nOrders()),
      url: '/',
    },
    {
      label: t(messages.i18nHelpLinks.links.i18nExchangesAndReturns()),
      url: '/',
    },
    {
      label: t(messages.i18nHelpLinks.links.i18nEditConsent()),
      url: '/',
    },
    {
      label: t(messages.i18nHelpLinks.links.i18nPayments()),
      url: '/',
    },
    {
      label: t(messages.i18nHelpLinks.links.i18nCookiePreferences()),
      url: '/',
    },
    {
      label: t(messages.i18nHelpLinks.links.i18nProducts()),
      url: '/',
    },
    {
      label: t(messages.i18nHelpLinks.links.i18nCorporate()),
      url: '/',
    },
    {
      label: t(messages.i18nHelpLinks.links.i18nContactUs()),
      url: '/',
    },
  ];

  const aboutNikeLinks = [
    {
      label: t(messages.i18nAboutNikeLinks.links.i18nMadeToPlay()),
      url: '/',
    },
    {
      label: t(messages.i18nAboutNikeLinks.links.i18nGeneralSustentability()),
      url: '/',
    },
  ];

  const isMediumScreen = useCheckIsMediumScreen();

  return (
    <ThemeProviderWrapper>
      {isMediumScreen && (
        <Container data-testid="footer">
          <MediumScreenWrapper>
            <LinksMediumScreen>
              <MainNavLink to="/">
                {t(messages.i18nFindShoppingStore())}
              </MainNavLink>
              <MainNavLink to="/">
                {t(messages.i18nRegisterForNews())}
              </MainNavLink>
              <MainNavLink to="/">{t(messages.i18nSiteMap())}</MainNavLink>
            </LinksMediumScreen>
            <LinksMediumScreen>
              <SectionTitleMediumScreen>
                {t(messages.i18nHelpLinks.i18nTitle())}
              </SectionTitleMediumScreen>
              {helpLinks?.map((helpLink, index) => (
                <SectionNavLink
                  key={`${helpLink.url}${helpLink.label}`}
                  to={helpLink.url}
                >
                  {helpLink.label}
                </SectionNavLink>
              ))}
            </LinksMediumScreen>
            <LinksMediumScreen>
              <SectionTitleMediumScreen>
                {t(messages.i18nAboutNikeLinks.i18nTitle())}
              </SectionTitleMediumScreen>
              {aboutNikeLinks?.map((aboutNikeLink, index) => (
                <SectionNavLink
                  key={`${aboutNikeLink.url}${aboutNikeLink.label}`}
                  to={aboutNikeLink.url}
                >
                  {aboutNikeLink.label}
                </SectionNavLink>
              ))}
            </LinksMediumScreen>
            <MultipleSectionsWrapper>
              <SocialMedias>
                <SectionLabel>{t(messages.i18nSocialMedias())}</SectionLabel>
                <SocialMediasOptions>
                  <NavLink to="/">
                    <FacebookRoundedWhite />
                  </NavLink>
                  <NavLink to="/">
                    <InstagramRoundedWhite />
                  </NavLink>
                  <NavLink to="/">
                    <YoutubeRoundedWhite />
                  </NavLink>
                </SocialMediasOptions>
              </SocialMedias>
              <PaymentMethods>
                <SectionLabel>{t(messages.i18nPaymentMethods())}</SectionLabel>
                <PaymentOptions>
                  <Amex />
                  <Discover />
                  <Elo />
                  <Hipercard />
                  <Mastercard />
                  <Visa />
                  <Billet />
                </PaymentOptions>
              </PaymentMethods>
            </MultipleSectionsWrapper>
          </MediumScreenWrapper>
          <Hr />
          <TermsSectionMediumScreen>
            <TermsLinksMediumScreen>
              <TermLinkStyled to="/">Brasil</TermLinkStyled>
              <TermLinkStyled to="/">
                {t(messages.i18nPrivacyPolicy())}
              </TermLinkStyled>
              <TermLinkStyled to="/">
                {t(messages.i18nUserTerms())}
              </TermLinkStyled>
            </TermsLinksMediumScreen>
            <CompanyInfos>{t(messages.i18nCompanyInfos())}</CompanyInfos>
          </TermsSectionMediumScreen>
        </Container>
      )}

      {!isMediumScreen && (
        <SmallScreenWrapper {...props}>
          <Links>
            <MainNavLink to="/">
              {t(messages.i18nFindShoppingStore())}
            </MainNavLink>
            <MainNavLink to="/">
              {t(messages.i18nRegisterForNews())}
            </MainNavLink>
            <MainNavLink to="/">{t(messages.i18nSiteMap())}</MainNavLink>
          </Links>
          <Hr />
          <LinksWrapper>
            <LinksDropdown
              title={t(messages.i18nHelpLinks.i18nTitle())}
              links={helpLinks}
            ></LinksDropdown>
            <LinksDropdown
              title={t(messages.i18nAboutNikeLinks.i18nTitle())}
              links={aboutNikeLinks}
            ></LinksDropdown>
          </LinksWrapper>
          <SocialMedias>
            <SectionLabel>{t(messages.i18nSocialMedias())}</SectionLabel>
            <SocialMediasOptions>
              <NavLink to="/">
                <FacebookRoundedWhite />
              </NavLink>
              <NavLink to="/">
                <InstagramRoundedWhite />
              </NavLink>
              <NavLink to="/">
                <YoutubeRoundedWhite />
              </NavLink>
            </SocialMediasOptions>
          </SocialMedias>
          <PaymentMethods>
            <SectionLabel>{t(messages.i18nPaymentMethods())}</SectionLabel>
            <PaymentOptions>
              <Amex />
              <Discover />
              <Elo />
              <Hipercard />
              <Mastercard />
              <Visa />
              <Billet />
            </PaymentOptions>
          </PaymentMethods>
          <Hr />
          <TermsSmallScreen>
            <TermLinkStyled to="/">Brasil</TermLinkStyled>
            <TermLinkStyled to="/">
              {t(messages.i18nPrivacyPolicy())}
            </TermLinkStyled>
            <TermLinkStyled to="/">
              {t(messages.i18nUserTerms())}
            </TermLinkStyled>
          </TermsSmallScreen>
          <CompanyInfos>{t(messages.i18nCompanyInfos())}</CompanyInfos>
        </SmallScreenWrapper>
      )}
    </ThemeProviderWrapper>
  );
});
