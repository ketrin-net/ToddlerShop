import React from 'react';
import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ProductCard, ProductCardProps } from './components/ProductCard/ProductCard';
import linen from './components/ProductCard/assets/linen.png';
import { SwiperProduct } from './components/SwiperProduct/SwiperProduct';

export interface AppProps {}

const productCard: ProductCardProps[] = [
  { imgSrc: './components/ProductCard/assets/linen.png', imgAlt: "linen", title: "Постельное белье Forest Sky (3 предмета)", cost: 2000 },
  { imgSrc: 'image2.jpg', imgAlt: 'Image 2', title: 'Product 2', cost: 20 },
];

export const App = (props: AppProps) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>HomePage</div>} />
        <Route path="bucket" element={<div>BucketPAge</div>} />
        <Route path="checkout" element={<div>CheckoutPage</div>} />
        <Route path="payment" element={<div>PaymentPage</div>} />
        <Route path="registration" element={<div>RegistrationPage</div>} />
        <Route path="restore-password" element={<div>RestorePasswordPAge</div>} />
        <Route path="orders" element={<div>OrdersPage</div>} />
        <Route path="favorites" element={<div>FavoritesPage</div>} />
        <Route path="personal-data" element={<div>PersonalDataPage</div>} />
        <Route path="blog">
          <Route index element={<div>BlogsPage</div>} />
          <Route path=":blogId" element={<div>ConcreteBlogPage</div>} />
        </Route>
        <Route path="promos">
          <Route index element={<div>PromosPage</div>} />
          <Route path=":promoId" element={<div>ConcretePromoPage</div>} />
        </Route>
        <Route path="contacts" element={<div>ContactsPage</div>} />
        <Route path="category/:categoryId">
          <Route index element={<div>CategoryPage</div>} />
          <Route path="product/:productId" element={<div>ConcreteProductPage</div>} />
        </Route>
        <Route path="delivery" element={<div>DeliveryPage</div>} />
        <Route path="wholesalers" element={<div>WholesalersPage</div>} />
        <Route path="*" element={<div>NotFoundPage</div>} />
      </Routes>

      <SwiperProduct {...productCard} />

      <ProductCard 
        imgSrc={linen}
        imgAlt="linen"
        title="Постельное белье Forest Sky (3 предмета)"
        cost={2000}
        oldCost={1500}
        iconNew={true}
      />
    </BrowserRouter>
  );
};

export default App;