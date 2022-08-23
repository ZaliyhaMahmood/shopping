import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartContext } from "../../contexts/cart.context";
import {
  addItemToCart,
  clearItemFromCart,
  removeItemFromCart,
} from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selectors";
import { ItemProps } from "../cart-item/cart-item";
import "./checkout-item.styles.scss";

type CheckoutItemProps = {
  cartItem: ItemProps
}

const CheckoutItem = ({ cartItem }: CheckoutItemProps) => {
  const { name, imageUrl, quantity, price } = cartItem;

  const dispatch = useDispatch();
  // const { clearItemFromCart, addItemToCart, removeItemFromCart } =
  //   useContext(CartContext);

  const cartItems = useSelector(selectCartItems);

  const handleClearItem = () =>
    dispatch(clearItemFromCart(cartItems, cartItem));
  const handleAddItem = () => dispatch(addItemToCart(cartItems, cartItem));
  const handleRemoveItem = () =>
    dispatch(removeItemFromCart(cartItems, cartItem));

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow" onClick={handleRemoveItem}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div className="arrow" onClick={handleAddItem}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={handleClearItem}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
