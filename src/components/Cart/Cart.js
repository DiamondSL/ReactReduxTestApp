import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import {useSelector } from 'react-redux';


const Cart = (props) => {
  const CartItems = useSelector((state) => state.items);

  const processedItems = CartItems.items.map((item, index) => {
    if(item.quantity > 0){
    return <CartItem item={{title: item.title, quantity: item.quantity, total: item.total, price: item.price}} key={index} />
    }
    else {
      return
    }
  })

  console.log(CartItems.items)

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {/* <CartItem
          item={{ title: 'Test Item', quantity: 3, total: 18, price: 6 }}
        /> */}
        {processedItems}
      </ul>
    </Card>
  );
};

export default Cart;
