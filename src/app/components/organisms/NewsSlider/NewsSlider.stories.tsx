import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureAppStore } from 'store/configureStore';
import { NewsSlider } from '.';

const meta: Meta<typeof NewsSlider> = {
  component: NewsSlider,
};

export default meta;
type Story = StoryObj<typeof NewsSlider>;

export const Default: Story = {
  render: args => {
    const store = configureAppStore();

    return (
      <Provider store={store}>
        <BrowserRouter>
          <NewsSlider {...args} />
        </BrowserRouter>
      </Provider>
    );
  },
};
