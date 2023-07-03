import { Button } from 'app/components/atoms';
import Nike from 'app/components/atoms/svgs/logos/Nike';
import ThemeProviderWrapper from 'app/styles/themes/themeProvider';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { Content, Message, Title } from './styles';

interface Props {}

export const NewsLetter = memo((props: Props) => {
  const { t } = useTranslation();

  return (
    <ThemeProviderWrapper>
      <Content data-testid="newsLetter">
        <Nike style={{ marginBottom: '1.5rem' }} />
        <Title>{t(messages.i18nTitle())}</Title>
        <Message>{t(messages.i18nMessage())}</Message>
        <Button label={t(messages.i18nRegisterButtonLabel())}></Button>
      </Content>
    </ThemeProviderWrapper>
  );
});
