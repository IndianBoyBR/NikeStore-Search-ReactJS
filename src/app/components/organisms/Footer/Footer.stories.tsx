import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureAppStore } from 'store/configureStore';
import { Footer } from '.';

const meta: Meta<typeof Footer> = {
  component: Footer,
};

export default meta;
type Story = StoryObj<typeof Footer>;

export const Default: Story = {
  render: args => {
    const store = configureAppStore();

    return (
      <Provider store={store}>
        <BrowserRouter>
          <div
            style={{
              width: '50%',
              margin: '0 auto',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Footer {...args} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  },
};
