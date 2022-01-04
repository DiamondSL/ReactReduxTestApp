import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import {useSelector, useDispatch} from 'react-redux';
import { CartItemsActions } from '../../store/store';

const ProductItem = (props) => {
  const { title, price, description } = props;
  const dispatchItem = useDispatch();

  const addItemHandler = () => {
    dispatchItem(CartItemsActions.addItem(title));
    console.log(title);
  }


  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addItemHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
