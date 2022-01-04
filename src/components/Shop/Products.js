import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useSelector, useDispatch } from "react-redux";
import Card from "../UI/Card";
import ItemForm from "./ItemForm";
import { CartItemsActions, formIsShownActions } from "../../store/store";

const Products = (props) => {
  const CartItems = useSelector((state) => state.items);
  const formIsShown = useSelector((state) => state.showForm.FormIsShown);
  const dispatch = useDispatch();

  const toggleFormHandler = () => {
    dispatch(formIsShownActions.showForm());
  };
  const addNewItemHandler = (info) => {
    let newItemProduct = {
      title: info.title,
      price: info.price,
      quantity: 0,
      total: 0,
    };
    dispatch(CartItemsActions.addNewProduct(newItemProduct));
    toggleFormHandler();
  };

  const processedItems = CartItems.items.map((item, index) => {
    return (
      <ProductItem
        title={item.title}
        price={item.price}
        key={index}
        description="basic description"
      />
    );
  });
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      {
        <Card className={classes["button-wrapper"]}>
          {formIsShown ? (
            <ItemForm onAddNewItem={addNewItemHandler}></ItemForm>
          ) : (
            <button onClick={toggleFormHandler}>add item to the cart</button>
          )}
        </Card>
      }
      <ul>{processedItems}</ul>
    </section>
  );
};

export default Products;
