import classes from './CartItem.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { CartItemsActions } from '../../store/store';

const CartItem = (props) => {
  const CartItems = useSelector((state) => state.items);
  const dispatchItem = useDispatch();
  const { title, quantity, total, price } = props.item;

  const addItemHandler = () => {
    dispatchItem(CartItemsActions.addItem(title));
    console.log(title);
  }

  const removeItemHandler = () => {
    dispatchItem(CartItemsActions.removeItem(title));
    console.log(title);
  }

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={removeItemHandler}>-</button>
          <button onClick={addItemHandler}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
