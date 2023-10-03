import './SwitchHeart.scss';
import { HeartSwitch } from '@anatoliygatt/heart-switch';
import { Product } from '../../models/product';
import { addInFavorites, deleteInFavorites, selectProductsInFavorites } from '../../pages/FavoritesPage/slice/favoritesSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

interface SwitchHeartProps {
  product: Product;
}

const SwitchHeart = ({ product }: SwitchHeartProps) => {
  const dispatch = useDispatch();
  const allProductsInFavorites = useSelector(selectProductsInFavorites);
  const almostInFavorites = allProductsInFavorites.some((item) => item.id === product.id);
  const [checked, setChecked] = useState(almostInFavorites);

  return (
    <div className="heart-switch">
      <HeartSwitch
        size="sm"
        inactiveTrackFillColor="#ffffff"
        inactiveTrackStrokeColor="#7FC9F0"
        activeTrackFillColor="#7FC9F0"
        activeTrackStrokeColor="#446B80"
        inactiveThumbColor="#ecfeff"
        activeThumbColor="#ecfeff"
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          if (event.target.checked) {
            dispatch(addInFavorites(product));
          } else {
            dispatch(deleteInFavorites({ id: product.id }));
          }
        }}
      />
    </div>
  );
};

export default SwitchHeart;
