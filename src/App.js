import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import {useSelector} from 'react-redux';

function App() {
  const cartItems = useSelector((state) => state.items.items);
  const cartIsShownStatus = useSelector((state) => state.showCart.cartIsShown);

    //i could use state in Redux that includes amount of items but in this example i used forEach to show one more way to calculate items amount i cart  
    let itemsAmount = 0;
    cartItems.forEach(item => {
      itemsAmount = itemsAmount + item.quantity;
    });
  return (
    <Layout>
      {cartIsShownStatus && itemsAmount > 0 ? <Cart /> : '' }
      {cartIsShownStatus ? <Products /> : ''}
    </Layout>
  );
}

export default App;
