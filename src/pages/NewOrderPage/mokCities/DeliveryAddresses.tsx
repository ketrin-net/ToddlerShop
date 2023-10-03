import React from 'react';

export enum Cities {
  Moscow = 'Москва',
  SaintPetersburg = 'Санкт-Петербург',
  Novosibirsk = 'Новосибирск',
}

interface CitiesAndAdressDelivery {
  key: Cities;
  value: string;
}

export const deliveryAddressesCDEK: CitiesAndAdressDelivery[] = [
  { key: Cities.Moscow, value: 'ул. Тверская, 9, стр.7, 7' },
  { key: Cities.Moscow, value: 'пер. Большой Сухаревский, 15, стр.2' },
  { key: Cities.Moscow, value: 'пер. Лучников, 4 стр. 2, 22' },
  { key: Cities.SaintPetersburg, value: 'ул. 1-я линия В.О, 34' },
  { key: Cities.SaintPetersburg, value: 'ул. Ординарная, 18' },
  { key: Cities.SaintPetersburg, value: ' ул. Жуковского, 57, пом.19' },
  { key: Cities.Novosibirsk, value: 'ул. Юности, 1' },
  { key: Cities.Novosibirsk, value: 'ул. Выборная, 89/2' },
  { key: Cities.Novosibirsk, value: 'ул. Никитина, 112а' },
];

export const deliveryAddressesBusinessLines: CitiesAndAdressDelivery[] = [
  { key: Cities.Moscow, value: 'Леснорядский пер., 18, стр. 1' },
  { key: Cities.Moscow, value: '1-я Энтузиастов ул., 3' },
  { key: Cities.Moscow, value: 'ул. Вавилова ул, 9А, стр. 3 ' },
  { key: Cities.SaintPetersburg, value: 'Кондратьевский пр-кт, 14/10Б' },
  { key: Cities.SaintPetersburg, value: 'Проспект Науки, д. 21, корп.1' },
  { key: Cities.SaintPetersburg, value: 'Воздухоплавательная ул, дом № 19, литера А' },
  { key: Cities.Novosibirsk, value: 'ул. Богдана Хмельницкого, 71/16' },
  { key: Cities.Novosibirsk, value: 'Сухарная ул., 35/1' },
  { key: Cities.Novosibirsk, value: 'ул. Петухова, 73/1' },
];
