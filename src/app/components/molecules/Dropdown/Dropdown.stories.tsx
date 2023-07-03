import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import { Provider } from 'react-redux';
import { configureAppStore } from 'store/configureStore';
import { Dropdown, DropdownOption } from '.';

const meta: Meta<typeof Dropdown> = {
  component: Dropdown,
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const WrapperComponent = args => {
  const store = configureAppStore();

  const options = [
    { key: 1, title: 'Option #1' },
    { key: 2, title: 'Option #2' },
  ];

  const [optionSelectedState, setOptionSelected] = useState<DropdownOption>(
    options[0],
  );

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
        <Dropdown
          {...args}
          optionSelectedState={optionSelectedState}
          setOptionSelected={setOptionSelected}
          options={options}
        />
      </div>
    </Provider>
  );
};

export const Default: Story = {
  render: args => {
    return WrapperComponent(args);
  },
};
