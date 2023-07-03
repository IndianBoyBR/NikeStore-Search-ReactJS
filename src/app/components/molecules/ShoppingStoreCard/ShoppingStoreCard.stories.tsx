import type { Meta, StoryObj } from '@storybook/react';
import { ShoppingStoresMockData } from 'mocks/nike-stores/shopping-stores-data';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { configureAppStore } from 'store/configureStore';
import { ShoppingStoreCard } from '.';

const meta: Meta<typeof ShoppingStoreCard> = {
  component: ShoppingStoreCard,
  parameters: {
    viewport: {
      defaultViewport: 'ipad',
    },
  },
  args: { shoppingStore: ShoppingStoresMockData[0] },
};

export default meta;
type Story = StoryObj<typeof ShoppingStoreCard>;

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
            <ShoppingStoreCard {...args} />
          </div>
        </BrowserRouter>
      </Provider>
    );
  },
};
