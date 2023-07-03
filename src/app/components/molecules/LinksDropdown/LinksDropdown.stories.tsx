import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureAppStore } from 'store/configureStore';
import { LinksDropdown } from '.';

const meta: Meta<typeof LinksDropdown> = {
  component: LinksDropdown,
  args: {
    title: 'Dropdown',
    links: [
      {
        label: 'Home',
        url: '/',
      },
      {
        label: 'About',
        url: '/about',
      },
      {
        label: 'Test',
        url: '/test',
      },
    ],
  },
};

export default meta;
type Story = StoryObj<typeof LinksDropdown>;

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
            <LinksDropdown {...args} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  },
};
