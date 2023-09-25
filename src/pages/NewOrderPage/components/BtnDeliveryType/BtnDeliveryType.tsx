import './BtnDeliveryType.scss';
import React from 'react';

interface BtnDeliveryTypeProps {
  title: string;
  description: string;
  costDelivery: string | number;
}

const BtnDeliveryType = (props: BtnDeliveryTypeProps) => {
  return (
    <div className="delivery-type">
      <span className="title-delivery">{props.title}</span>
      <span className="description-delivery">{props.description}</span>
      <span className={props.title === 'Транспортной компанией' ? 'cost-delivery' : 'cost-delivery blue'}>{props.costDelivery}</span>
    </div>
  );
};

export default BtnDeliveryType;
