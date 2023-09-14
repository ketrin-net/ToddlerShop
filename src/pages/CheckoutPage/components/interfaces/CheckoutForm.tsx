import React from 'react';

export interface CheckoutForm {
  city: string;
  methodReceiving: string;
  transportCompany?: string;
  name: string;
  email?: string;
  phone: number;
  street?: string;
  house?: number;
  apartment?: number;
  methodPayment: string;
  comment?: string;
  approvalMailing: boolean;
};
