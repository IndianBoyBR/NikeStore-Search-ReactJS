import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { Input } from '.';

const meta: Meta<typeof Input> = {
  component: Input,
  args: {
    placeholder: 'Search input',
    isRounded: true,
  },
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  render: args => {
    const store = configureAppStore();
    return (
      <Provider store={store}>
        <div
          style={{
            width: '50%',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Input {...args} />
        </div>
      </Provider>
    );
  },
};
