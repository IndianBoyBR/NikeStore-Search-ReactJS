import { FunctionComponent, SVGProps } from 'react';

export interface SliderItem {
  id: number;
  title: string;
  link: {
    label: string;
    url: string;
  };
  Image: FunctionComponent<SVGProps<SVGSVGElement> & { title?: string }>;
}

export interface NewsSliceState {
  selected: SliderItem;
  items: SliderItem[];
}
