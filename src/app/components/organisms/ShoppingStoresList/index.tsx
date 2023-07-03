import ThemeProviderWrapper from 'app/styles/themes/themeProvider';

import React, { Dispatch, SetStateAction, memo } from 'react';
import { useTranslation } from 'react-i18next';

import { Dropdown, DropdownOption } from 'app/components/molecules/Dropdown';
import { ShoppingStoreCard } from 'app/components/molecules/ShoppingStoreCard';
import { ShoppingStore } from 'types';
import { messages } from './messages';
import { Container, Filters, List } from './styles';

export interface ShoppingStoreProps {
  setShoppingStoreSelected: Dispatch<SetStateAction<ShoppingStore | null>>;
  shoppingStores: ShoppingStore[];
  setFilterOptionSelected: React.Dispatch<React.SetStateAction<DropdownOption>>;
  filterOptions: DropdownOption[];
  filterOptionSelected: DropdownOption;
  role?: React.AriaRole;
}

export const ShoppingStoresList = memo(
  ({
    filterOptionSelected,
    filterOptions,
    setFilterOptionSelected,
    setShoppingStoreSelected,
    shoppingStores,
    ...props
  }: ShoppingStoreProps) => {
    const { t } = useTranslation();

    const onSelectShoppingStore = value => {
      setShoppingStoreSelected({ ...value });
    };

    return (
      <ThemeProviderWrapper>
        <Container data-testid="shoppingStoresList">
          <Filters>
            <Dropdown
              label={t(messages.i18nFilter())}
              options={filterOptions}
              optionSelectedState={filterOptionSelected}
              setOptionSelected={setFilterOptionSelected}
            />
          </Filters>
          <List>
            {shoppingStores?.map((shoppingStore, index) => (
              <ShoppingStoreCard
                onClick={() => onSelectShoppingStore(shoppingStore)}
                key={`${shoppingStore.id}${shoppingStore.placeName}`}
                shoppingStore={shoppingStore}
              />
            ))}
          </List>
        </Container>
      </ThemeProviderWrapper>
    );
  },
);
