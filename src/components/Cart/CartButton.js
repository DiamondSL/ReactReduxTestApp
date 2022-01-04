import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartIsShownActions } from '../../store/store';

const CartButton = (props) => {
  let Amount = 0;
  const dispatchCart = useDispatch();
  const cartIsShownStatus = useSelector((state) => state.showCart.cartIsShown);
  const cartItems = useSelector((state) => state.items.items);



  //i could use state in Redux that includes amount of items but in this example i used forEach to show one more way to calculate items amount i cart  
  cartItems.forEach(item => {
    Amount = Amount + item.quantity;
  });

  const toggleCartHandler = () => {
      dispatchCart(cartIsShownActions.showCart());
      console.log(cartIsShownStatus);
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{Amount}</span>
    </button>
  );
};

export default CartButton;
