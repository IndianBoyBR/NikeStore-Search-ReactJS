import { environment } from 'environment';
import { rest } from 'msw';
import { ShoppingStore } from 'types';
import { GetKilometersBetweenPoints } from 'utils/helpers';
import { ShoppingStoresMockData } from './shopping-stores-data';

export const nikeStoresHandler = [
  rest.get(`${environment.resourceOrigin}/nike-stores`, (req, res, ctx) => {
    ctx.delay(1500);

    const lat = req.url.searchParams.get('lat') ?? '0';
    const lng = req.url.searchParams.get('lng') ?? '0';

    return res(
      ctx.json<ShoppingStore[]>(
        ShoppingStoresMockData.map(shoppingStore => ({
          ...shoppingStore,
          distance: GetKilometersBetweenPoints({
            latitudeA: parseFloat(lat),
            longitudeA: parseFloat(lng),
            latitudeB: shoppingStore.address.lat,
            longitudeB: shoppingStore.address.lng,
          }),
        })),
      ),
    );
  }),
];
