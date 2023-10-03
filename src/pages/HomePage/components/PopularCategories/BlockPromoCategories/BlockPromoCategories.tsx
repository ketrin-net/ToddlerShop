import './BlockPromoCategories.scss';
import { Link } from 'react-router-dom';
import { Path } from '../../../../../enums';
import React from 'react';

interface BlockPromoCategoriesProps {
  title: string;
  description: string;
  poster: string;
  backgroundColor: string;
  linkTo: string;
}

const BlockPromoCategories = (props: BlockPromoCategoriesProps) => {
  const classNameBlock = 'block-promo-categories' + ' ' + props.backgroundColor;

  return (
    <div className={classNameBlock}>
      <section>
        <span className="head">{props.title}</span>
        <p className="description">{props.description}</p>
        <Link to={props.linkTo} className="btn white">
          Смотреть
        </Link>
      </section>
      <img src={props.poster} alt="" />
    </div>
  );
};

export default BlockPromoCategories;
