import { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartContext } from "../../contexts/cart.context";
import { addItemToCart } from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selectors";
import Button, { BUTTON_TYPE_CLASSES } from "../button/button";
import "./product-card.styles.scss";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);

  // const { addItemToCart } = useContext(CartContext);

  const addProductToCart = () => dispatch(addItemToCart(cartItems, product));

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button
        onClick={addProductToCart}
        buttonType={BUTTON_TYPE_CLASSES.inverted}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
