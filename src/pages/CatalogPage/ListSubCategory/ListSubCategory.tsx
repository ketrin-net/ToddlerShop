import './ListSubCategory.scss';
import { Path } from '../../../enums/Path';
import { selectCategoriesInState } from '../slice/catalogSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import React from 'react';

const ListSubCategory = () => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  const categories = useSelector(selectCategoriesInState);
  const allSubCategories = categories?.find((i) => i.id === parseInt(categoryId as string))?.subCategory;

  const changePage = (id: number) => () => {
    const path = Path.SubCategoryPage.replace(':categoryId', categoryId as string).replace(':subCategoryId', id.toString());
    navigate(path, { replace: true});
  };

  return (
    <div className="list-subcategory">
      {allSubCategories?.map((item) => (
        <button key={item.id} onClick={changePage(item.id)}>
          {item.name}
        </button>
      ))}
    </div>
  );
};

export default ListSubCategory;
