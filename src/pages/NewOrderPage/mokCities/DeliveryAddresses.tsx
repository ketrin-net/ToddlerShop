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
  { key: Cities.Moscow, value: 'ул. pyk, 9, стр.7, 7' },
  { key: Cities.Moscow, value: 'пер. Большой pyk, 15, стр.2' },
  { key: Cities.Moscow, value: 'пер. pyk, 4 стр. 2, 22' },
  { key: Cities.SaintPetersburg, value: 'ул. 1-я kek В.О, 34' },
  { key: Cities.SaintPetersburg, value: 'ул. kek, 18' },
  { key: Cities.SaintPetersburg, value: ' ул. kek, 57, пом.19' },
  { key: Cities.Novosibirsk, value: 'ул. lol, 1' },
  { key: Cities.Novosibirsk, value: 'ул. lol, 89/2' },
  { key: Cities.Novosibirsk, value: 'ул. lol, 112а' },
];