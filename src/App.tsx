import './App.scss';
import { AppDispatch } from './store/store';
import { Footer } from './components/Footer/Footer';
import { HeaderSelector } from './components/HeaderSelector/HeaderSelector';
import { HomePage } from './pages/HomePage/HomePage';
import { Path } from './enums';
import { Route, Routes, useLocation } from 'react-router-dom';
import { batch, useDispatch, useSelector } from 'react-redux';
import { cleanCart } from './pages/CartPage/slice/cartSlice';
import { closeLoginModal, selectisOpenLoginModalInfo } from './store/slices/loginModalSlice';
import { currentUserAuth } from './store/slices/authSlice';
import { selectModalAddProductInfo } from './store/slices/modalAdditionSlice';
import CartPage from './pages/CartPage/CartPage';
import ContactsPage from './pages/ContactsPage/ContactsPage';
import ModalAddProduct from './components/ModalProductAddition/ModalProductAddition';
import ModalLoginAccount from './components/ModalLoginAccount/ModalLoginAccount';
import NewOrderPage from './pages/NewOrderPage/NewOrderPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import React, { useEffect } from 'react';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import RestorePasswordPage from './pages/RestorePasswordPage/RestorePasswordPage';
import { CatalogPage } from './pages/CatalogPage/CatalogPage';

export interface AppProps {}

export const App = (props: AppProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const modalOpen = useSelector(selectModalAddProductInfo);
  const loginModalActive = useSelector(selectisOpenLoginModalInfo);
  const location = useLocation().pathname;

  const tokenInStorage = (localStorage.getItem('token') !== null ? localStorage.getItem('token') : ' ') as string;

  useEffect(() => {
    batch(() => {
      dispatch(cleanCart());
      dispatch(currentUserAuth(tokenInStorage));
      dispatch(closeLoginModal());
    });
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
        <Route path={Path.CartPage}>
          <Route index element={<CartPage />} />
          <Route path={Path.NewOrderPage} element={<NewOrderPage />} />
        </Route>
        <Route path={Path.RegistrationPage} element={<RegistrationPage />} />
        <Route path={Path.RestorePasswordPage} element={<RestorePasswordPage />} />
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

        <Route path={Path.CategoryPage} element={<CatalogPage />} />
        <Route path={Path.SubCategoryPage} element={<CatalogPage />} />

        <Route path={Path.DeliveryPage} element={<div>DeliveryPage</div>} />
        <Route path={Path.WholesalersPage} element={<div>WholesalersPage</div>} />
        <Route path={Path.AboutUsPage} element={<div>AboutUsPage</div>} />
        <Route path={Path.ReturnGoodsPage} element={<div>ReturnGoodsPage</div>} />
        <Route path={Path.NotFoundPage} element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
};
