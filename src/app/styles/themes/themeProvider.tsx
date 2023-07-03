import { useSelector } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import { useThemeSlice } from './slice';
import { selectTheme } from './slice/selectors';

const ThemeProviderWrapper = ({ children }) => {
  useThemeSlice();
  const theme = useSelector(selectTheme);

  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default ThemeProviderWrapper;

// CHANGE THEME EXAMPLE
// import { saveTheme } from 'styles/theme/utils' as well to persist data;
// const dispatch = useDispatch();
// dispatch(themeActions.changeTheme('light'));
// saveTheme('light);
