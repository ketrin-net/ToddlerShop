import { Category } from './ModalContent';

export const mockedCategories: Category[] = [
  {
    id: 1,
    name: 'Детская мебель',
    isActive: true,
    subCategories: [
      {
        id: 1,
        name: 'Кроватки',
      },
      {
        id: 2,
        name: 'Колыбели',
      },
      {
        id: 3,
        name: 'Люльки',
      },
      {
        id: 4,
        name: 'Пеленальные комоды',
      },
      {
        id: 5,
        name: 'Шкафы',
      },
      {
        id: 6,
        name: 'Аксессуары',
      },
    ],
  },
  {
    id: 2,
    name: 'Коляски',
    isActive: false,
    subCategories: [
      {
        id: 1,
        name: 'Коляски-трансформеры',
      },
      {
        id: 2,
        name: 'Коляски-люльки',
      },
      {
        id: 3,
        name: 'Коляски-универсалы',
      },
      {
        id: 4,
        name: 'Прогулочные коляски',
      },
      {
        id: 5,
        name: 'Коляски-трость',
      },
      {
        id: 6,
        name: 'Аксессуары',
      },
    ],
  },
  {
    id: 3,
    name: 'Автокресла',
    isActive: false,
    subCategories: [
      {
        id: 1,
        name: 'Группа 0',
      },
      {
        id: 2,
        name: 'Группа 0+',
      },
      {
        id: 3,
        name: 'Группа 1',
      },
      {
        id: 4,
        name: 'Группа 2',
      },
      {
        id: 5,
        name: 'Группа 3',
      },
    ],
  },
];
