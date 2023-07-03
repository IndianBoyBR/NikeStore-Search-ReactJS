import ThemeProviderWrapper from 'app/styles/themes/themeProvider';
import { memo } from 'react';
import { Details, Icon, NavLinkStyled, Options, Summary } from './styles';

export interface Link {
  label: string;
  url: string;
}

interface Props {
  title: string;
  links?: Link[];
}

export const LinksDropdown = memo(({ title, links }: Props) => {
  return (
    <ThemeProviderWrapper>
      <Details data-testid="linksDropdown">
        <Summary>
          {title}
          <Icon />
        </Summary>
        <Options>
          {links?.map((link, index) => (
            <NavLinkStyled key={`${link.url}${link.label}`} to={link.url}>
              {link.label}
            </NavLinkStyled>
          ))}
        </Options>
      </Details>
    </ThemeProviderWrapper>
  );
});
