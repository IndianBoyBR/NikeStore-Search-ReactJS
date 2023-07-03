import ThemeProviderWrapper from 'app/styles/themes/themeProvider';
import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { newsSliceActions, useNewsSliceSlice } from './slice';
import { selectNewsSlice } from './slice/selectors';
import {
  ArrowButtonWrapper,
  ArrowLeftIconStyled,
  ArrowRightStyled,
  Container,
  Content,
  Link,
  Message,
} from './styles';

interface Props {}

export const NewsSlider = memo((props: Props) => {
  useNewsSliceSlice();

  const [loopOverSlides, setLoopOverSlides] = useState<boolean>(true);
  const sliceState = useSelector(selectNewsSlice);
  const dispatch = useDispatch();

  const Image: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string;
    }
  > = sliceState.selected.Image;

  const onGoToNext = () => {
    setLoopOverSlides(false);
    dispatch(newsSliceActions.goToNext());
  };

  const onGoToPrevious = () => {
    setLoopOverSlides(false);
    dispatch(newsSliceActions.goToNext());
  };

  React.useEffect(() => {
    const loopTimeout: NodeJS.Timeout = setInterval(() => {
      dispatch(newsSliceActions.goToNext());
    }, 4000);

    if (!loopOverSlides) {
      clearInterval(loopTimeout);
    }

    return () => clearInterval(loopTimeout);
  }, [dispatch, loopOverSlides]);

  return (
    <ThemeProviderWrapper>
      <Container data-testid="newsSlider">
        <ArrowButtonWrapper onClick={() => onGoToPrevious()}>
          <ArrowLeftIconStyled />
        </ArrowButtonWrapper>
        <Content key={sliceState.selected.id}>
          {sliceState.selected && <Image />}
          <Message>
            {sliceState.selected.title}
            <Link to={sliceState.selected.link.url}>
              {sliceState.selected.link.label}
            </Link>
          </Message>
        </Content>
        <ArrowButtonWrapper onClick={() => onGoToNext()}>
          <ArrowRightStyled />
        </ArrowButtonWrapper>
      </Container>
    </ThemeProviderWrapper>
  );
});
