import type { Meta, StoryObj } from '@storybook/react';

import { DropdownOption } from 'app/components/molecules';
import { ShoppingStoresMockData } from 'mocks/nike-stores/shopping-stores-data';
import { useState } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureAppStore } from 'store/configureStore';
import { ShoppingStore } from 'types';
import { ShoppingStoresList } from '.';

const meta: Meta<typeof ShoppingStoresList> = {
  component: ShoppingStoresList,
  args: {
    shoppingStores: ShoppingStoresMockData,
  },
};

export default meta;
type Story = StoryObj<typeof ShoppingStoresList>;

const WrapperComponent = args => {
  const store = configureAppStore();
  const [, setShoppingStoreSelected] = useState<ShoppingStore | null>(null);

  const filterOptions = [
    { key: 1, title: 'Filter #1' },
    { key: 2, title: 'Filter #2' },
  ];

  const [filterOptionSelected, setFilterOptionSelected] =
    useState<DropdownOption>(filterOptions[0]);

  return (
    <Provider store={store}>
      <BrowserRouter>
        <ShoppingStoresList
          {...args}
          filterOptions={filterOptions}
          filterOptionSelected={filterOptionSelected}
          setFilterOptionSelected={setFilterOptionSelected}
          setShoppingStoreSelected={setShoppingStoreSelected}
        />
      </BrowserRouter>
    </Provider>
  );
};

export const Default: Story = {
  render: args => {
    return WrapperComponent(args);
  },
};
