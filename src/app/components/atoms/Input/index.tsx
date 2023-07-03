import ThemeProviderWrapper from 'app/styles/themes/themeProvider';
import React, { forwardRef } from 'react';
import { Label, MagnifierIconStyled, SearchInputWrapper } from './styles';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  type: 'text' | 'search';
  placeholder?: string;
  showSearchIcon?: boolean;
  isRounded?: boolean;
  noBorders?: boolean;
  secondary?: boolean;
}

export const Input = forwardRef<HTMLInputElement, Props>(
  ({ placeholder, type, showSearchIcon, ...props }: Props, ref) => {
    return (
      <ThemeProviderWrapper>
        <Label>
          {showSearchIcon && <MagnifierIconStyled />}
          <SearchInputWrapper
            placeholder={placeholder}
            showSearchIcon={showSearchIcon}
            type={type}
            ref={ref}
            data-testid="input"
            {...props}
          />
        </Label>
      </ThemeProviderWrapper>
    );
  },
);
