import ThemeProviderWrapper from 'app/styles/themes/themeProvider';

import { useCheckIsMediumScreen } from 'app/hooks/useCheckIsMediumScreen';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import {
  BagIconStyled,
  CenterWrapper,
  Container,
  HamburguerMenuIconStyled,
  HeaderLinkStyled,
  InputStyled,
  LeftSideWrapper,
  NikeIconStyled,
  RightSideWrapper,
} from './styles';

interface Props {}

export const Header = memo((props: Props) => {
  const { t } = useTranslation();
  const isMediumScreen = useCheckIsMediumScreen();

  return (
    <ThemeProviderWrapper>
      <Container data-testid="header">
        <LeftSideWrapper>
          <NikeIconStyled />
        </LeftSideWrapper>
        <CenterWrapper>
          <HeaderLinkStyled to="/">
            {t(messages.i18nNewOffersPageLink())}
          </HeaderLinkStyled>
          <HeaderLinkStyled to="/">
            {t(messages.i18nMalePageLink())}
          </HeaderLinkStyled>
          <HeaderLinkStyled to="/">
            {t(messages.i18nFemalePageLink())}
          </HeaderLinkStyled>
          <HeaderLinkStyled to="/">
            {t(messages.i18nKidsPageLink())}
          </HeaderLinkStyled>
          <HeaderLinkStyled to="/">
            {t(messages.i18nOffersPageLink())}
          </HeaderLinkStyled>
          <HeaderLinkStyled to="/">
            {t(messages.i18nNewOffersPageLink())}
          </HeaderLinkStyled>
          <HeaderLinkStyled to="/">
            {t(messages.i18nHomePageLink())}
          </HeaderLinkStyled>
        </CenterWrapper>
        <RightSideWrapper>
          {isMediumScreen && (
            <InputStyled
              style={{ width: '12rem' }}
              secondary
              isRounded
              showSearchIcon
              type="search"
              placeholder={t(messages.i18nSearchButtonLabel()) ?? ''}
            />
          )}
          <BagIconStyled />
          {!isMediumScreen && <HamburguerMenuIconStyled />}
        </RightSideWrapper>
      </Container>
    </ThemeProviderWrapper>
  );
});
