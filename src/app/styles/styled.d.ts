import 'styled-components/macro';

declare module 'styled-components/macro' {
  export interface DefaultTheme {
    palette: {
      primary: {
        default: string;
        p700: string;
        p600: string;
      };
      secondary: {
        default: string;
        s200: string;
        s300: string;
        s500: string;
      };
      success: {
        s300: string;
      };
    };
  }
}
