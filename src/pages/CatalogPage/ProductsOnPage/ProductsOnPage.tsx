import './ProductsOnPage.scss';
import { Product } from '../../../models/product';
import { ProductCard } from '../../../components/ProductCard/ProductCard';
import { baseUrl } from '../../../helpers/baseUrl';
import { useParams } from 'react-router-dom';
import Pagination from '../../../components/Pagination/Pagination';
import React, { useEffect, useState } from 'react';

const ProductsOnPage = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const { categoryId, subCategoryId } = useParams();
  const [postsPerPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    if (subCategoryId) {
      fetch(`${baseUrl}/subcategory/${subCategoryId}/products`)
        .then((response) => response.json())
        .then((products) => setProducts(products));
    } else {
      fetch(`${baseUrl}/category/${categoryId}/products`)
        .then((response) => response.json())
        .then((products) => setProducts(products));
    }
  }, [categoryId, subCategoryId]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div id="products-in-page">
      <div className="list-products">
        {currentPosts.map((item, index) => (
          <ProductCard
            key={index}
            imgSrc={item.imgSrc}
            imgAlt={item.imgAlt}
            title={item.title}
            cost={item.cost}
            oldCost={item.oldCost}
            iconNew={item.iconNew}
            id={item.id}
            inStock={item.inStock}
          />
        ))}
      </div>
      <Pagination totalProducts={products.length} productsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </div>
  );
};

export default ProductsOnPage;
