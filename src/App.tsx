import './App.scss';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { HeaderSelector } from './components/HeaderSelector/HeaderSelector';
import { HomePage } from './pages/HomePage/HomePage';
import { Path } from './enums';
import { checkAppInitialized, initApp } from './store/reducers/cartSlice';
import { modalInfo } from './store/reducers/modalAdditionSlice';
import { useDispatch, useSelector } from 'react-redux';
import CartPage from './pages/CartPage/CartPage';
import ModalAddProduct from './components/ModalProductAddition/ModalProductAddition';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import React, { useEffect } from 'react';
import { Footer } from './components/Footer/Footer';

export interface AppProps {}

export const App = (props: AppProps) => {
  const dispatch = useDispatch();
  const modalOpen = useSelector(modalInfo);
  const checkProducts = useSelector(checkAppInitialized);

  useEffect(() => {
    if (checkProducts) {
      dispatch(initApp());
    }
  }, [dispatch, checkProducts]);

  return (
    <>
      <BrowserRouter>
        {modalOpen.isOpen && <ModalAddProduct id={modalOpen.idProduct} />}
        <HeaderSelector />
        <Routes>
          <Route path={Path.HomePage} element={<HomePage />} />
          <Route path={Path.CartPage} element={<CartPage />} />
          <Route path={Path.CheckoutPage} element={<div>CheckoutPage</div>} />
          <Route path={Path.PaymentPage} element={<div>PaymentPage</div>} />
          <Route path={Path.RegistrationPage} element={<div>RegistrationPage</div>} />
          <Route path={Path.RestorePasswordPAge} element={<div>RestorePasswordPAge</div>} />
          <Route path={Path.OrdersPage} element={<div>OrdersPage</div>} />
          <Route path={Path.FavoritesPage} element={<div>FavoritesPage</div>} />
          <Route path={Path.PersonalDataPage} element={<div>PersonalDataPage</div>} />
          <Route path={Path.BlogsPage}>
            <Route index element={<div>BlogsPage</div>} />
            <Route path={Path.BlogId} element={<div>ConcreteBlogPage</div>} />
          </Route>
          <Route path={Path.PromosPage}>
            <Route index element={<div>PromosPage</div>} />
            <Route path={Path.PromoId} element={<div>ConcretePromoPage</div>} />
          </Route>
          <Route path={Path.ContactsPage} element={<div>ContactsPage</div>} />
          <Route path={Path.CategoryPage}>
            <Route index element={<div>CategoryPage</div>} />
            <Route path={Path.SubCategoryPathWithId}>
              <Route index element={<div>Sub Category Page</div>} />
              <Route path={Path.ProductPathWithId} element={<div>ConcreteProductPage</div>} />
            </Route>
          </Route>
          <Route path={Path.DeliveryPage} element={<div>DeliveryPage</div>} />
          <Route path={Path.WholesalersPage} element={<div>WholesalersPage</div>} />
          <Route path={Path.AboutUsPage} element={<div>AboutUsPage</div>} />
          <Route path={Path.ReturnGoodsPage} element={<div>ReturnGoodsPage</div>} />
          <Route path={Path.NotFoundPage} element={<NotFoundPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
};
