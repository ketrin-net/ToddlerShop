import { EnumTypeDelivery } from '../enum/EnumTypeDelivery';
import React from 'react';

export interface CheckoutForm {
  city: string;
  methodReceiving: EnumTypeDelivery;
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
}
