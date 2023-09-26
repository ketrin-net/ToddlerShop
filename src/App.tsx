import './App.scss';
import { AppDispatch } from './store/store';
import { HeaderSelector } from './components/HeaderSelector/HeaderSelector';
import { HomePage } from './pages/HomePage/HomePage';
import { Path } from './enums';
import { Route, Routes, useLocation } from 'react-router-dom';
import { cleanCart } from './store/reducers/cartSlice';
import { currentUserAuth } from './store/reducers/authSlice';
import { selectModalAddProductInfo } from './store/reducers/modalAdditionSlice';
import { closeLoginModal, selectisOpenLoginModalInfo } from './store/reducers/loginModalSlice';
import { useDispatch, useSelector } from 'react-redux';
import CartPage from './pages/CartPage/CartPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import ModalAddProduct from './components/ModalProductAddition/ModalProductAddition';
import ModalLoginAccount from './components/ModalLoginAccount/ModalLoginAccount';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import React, { useEffect, useState } from 'react';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import { Footer } from './components/Footer/Footer';

export interface AppProps {}

export const App = (props: AppProps) => {
  const dispatch = useDispatch();
  const dispatchApp = useDispatch<AppDispatch>();
  const modalOpen = useSelector(selectModalAddProductInfo);
  const loginModalActive = useSelector(selectisOpenLoginModalInfo);
  const location = useLocation().pathname;

  const tokenInStorage = (localStorage.getItem('token') !== null ? localStorage.getItem('token') : " ") as string;

  useEffect(() => {
    dispatch(cleanCart());
    dispatchApp(currentUserAuth(tokenInStorage));
    dispatch(closeLoginModal());
  }, [dispatch, location]);

  useEffect(() => {
    const setZoom = () => {
      if (window.matchMedia('(min-width: 780px) and (max-width: 1919px)').matches) {
        (document.body.style as any).zoom = '80%';
      }
    };
    setZoom();
    window.addEventListener('resize', setZoom);
  }, []);

  return (
    <>
      {modalOpen.isOpen && <ModalAddProduct id={modalOpen.idProduct} />}
      {loginModalActive && <ModalLoginAccount />}
      <HeaderSelector />
      <Routes>
        <Route path={Path.HomePage} element={<HomePage />} />
        <Route path={Path.CartPage} element={<CartPage />} />
        <Route path={Path.NewOrderPage} element={<NewOrderPage />} />
        <Route path={Path.PaymentPage} element={<div>PaymentPage</div>} />
        <Route path={Path.RegistrationPage} element={<RegistrationPage/>} />
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
        <Route path={Path.ContactsPage} element={<ContactsPage />} />
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
    </>
  );
};
