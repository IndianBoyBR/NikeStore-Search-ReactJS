import { NewsSliceState } from 'app/components/organisms/NewsSlider/slice/types';
import { ThemeState } from 'app/styles/themes/slice/types';

// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/*
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  theme?: ThemeState;
  newsSlice?: NewsSliceState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
