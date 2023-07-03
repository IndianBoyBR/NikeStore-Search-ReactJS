import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureAppStore } from 'store/configureStore';
import { TopHeader } from '.';

const meta: Meta<typeof TopHeader> = {
  component: TopHeader,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
  },
};

export default meta;
type Story = StoryObj<typeof TopHeader>;

export const Default: Story = {
  render: args => {
    const store = configureAppStore();

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div
            style={{
              width: '100%',
            }}
          >
            <TopHeader {...args} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  },
};
