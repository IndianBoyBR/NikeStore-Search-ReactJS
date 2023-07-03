import { ShoppingStore } from 'types';

export const ShoppingStoresMockData: ShoppingStore[] = [
  {
    id: 1,
    placeName: 'Nike Store - Shopping Ibirapuera',
    address: {
      lat: -23.610265,
      lng: -46.666617,
      location:
        'Av. Ibirapuera, 3103 - Indianópolis, São Paulo - SP, 04029-902',
    },
    availability: 4,
    workingHours: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
  },
  {
    id: 2,
    placeName: 'Nike Store - Shopping Bourbon',
    address: {
      lat: -23.526153,
      lng: -46.681346,
      location: 'R. Palestra Itália, 500 - Perdizes, São Paulo - SP, 05005-030',
    },
    availability: 6,
    workingHours: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
  },
  {
    id: 3,
    placeName: 'Nike Store - Osasco',
    address: {
      lat: -23.538056,
      lng: -46.767778,
      location:
        'Av. dos Autonomistas, 1542 - Vila Yara, Osasco - SP, 06020-010',
    },
    availability: 2,
    workingHours: 'Segunda a Sábado 10h às 22h | Domingo 11h às 20h',
  },
];
