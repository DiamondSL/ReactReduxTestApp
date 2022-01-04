import { Fragment, useState } from "react";
import classes from "./ItemForm.module.css";
import Card from "../UI/Card";

const ItemForm = (props) => {

    const [inputValue, setInputValue] = useState('');
    const [numberInputValue, setNumberInputValue] = useState(0);

    const nameInputChangeHandler = (event) => {
        setInputValue(event.target.value);
    }
    const numberInputChangeHandler = (event) => {
        setNumberInputValue(event.target.value);
    }

    const resetInputs = () => {
        setNumberInputValue(0);
        setInputValue('');
    }

  const addNewItemHandler = (event) => {
    event.preventDefault();
    let inputInformation = {
        title: '',
        price: 0
    };

    if (inputValue.trim() !== '' && numberInputValue !== ''){
        inputInformation.title = inputValue;
        inputInformation.price = Number(numberInputValue);
        props.onAddNewItem(inputInformation);
        resetInputs();
    }
    else {
        return
    }
  };
  return (
    <Fragment>
      <form onSubmit={addNewItemHandler}>
        <Card>
        <div className={classes["input-wrapper"]}>
          <label htmlFor="product-name">Product name</label>
          <input name="product-name" type="text" placeholder="put your product name here" onChange={nameInputChangeHandler} value={inputValue}></input>
        </div>
        {inputValue === '' ? <div className={classes['error-handler']}><p>please write product name</p></div> : ''}
        </Card>
        <Card>
        <div className={classes["input-wrapper"]}>
          <label htmlFor="price">Product price</label>
          <input name="price" type="number" min="1" step="0.5" placeholder="1" onChange={numberInputChangeHandler} value={numberInputValue}></input>
        </div>
        {numberInputValue === 0 ? <div className={classes['error-handler']}><p>please write product price</p></div> : ''}
        </Card>    
        <div className={classes["button-wrapper"]}>
          <button type="submit">Add</button>
        </div>
      </form>
    </Fragment>
  );
};

export default ItemForm;
