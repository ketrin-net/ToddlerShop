import './ListSubCategory.scss';
import { Path } from '../../../enums/Path';
import { selectCategoriesInState } from '../slice/catalogSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';

const ListSubCategory = () => {
  const navigate = useNavigate();
  const { categoryId, subCategoryId } = useParams();
  const categories = useSelector(selectCategoriesInState);
  const allSubCategories = categories?.find((i) => i.id === parseInt(categoryId as string))?.subCategory;

  const changePage = (id: number) => () => {
    const path = `/category/${categoryId}/${id.toString()}`;
    navigate(path);
  };

  return (
    <div id="list-subcategory">
      {allSubCategories?.map((item) => (
        <>
          <div className="subcategory">
            <button key={item.id} onClick={changePage(item.id)}>
              {item.name}
            </button>
          </div>
        </>
      ))}
    </div>
  );
};

export default ListSubCategory;
