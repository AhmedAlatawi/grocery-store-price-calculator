import React, { useState } from "react";

import ItemsEnteredBox from "./ItemsEnteredBox";
import Alert from "./Alert";
import ItemsDataTable from "./ItemsDataTable";
import ItemsPurchasedTotalCost from "./ItemsPurchasedTotalCost";

const itemsMap = {
  milk: 3.97,
  bread: 2.17,
  banana: 0.99,
  apple: 0.89
};

const itemsOnSaleMap = {
  milk: {
    quantity: 2,
    price: 5
  },
  bread: {
    quantity: 3,
    price: 6
  }
};

const GroceryStoreCashier = () => {
  const [displayAlert, setDisplayAlert] = useState(false);
  const [alertContent, setAlertContent] = useState({ title: "", msg: "" });
  const [items, setItems] = useState([]);

  const itemsListHandler = (items) => {
    setDisplayAlert(false);
    setItems(items);
  };

  const emptyItemsEnterErrorHandler = () => {
    setAlertContent({
      title: "Empty List!",
      msg: "Please enter items to purchase."
    });
    setDisplayAlert(true);
    setItems([]);
  };

  const invalidItemsEnterErrorHandler = (invalidItem) => {
    setAlertContent({
      title: "Wrong Entry!",
      msg: `Invalid item "${invalidItem}". Please enter valid item(s), e.g. milk, bread, banana, or apple.`
    });
    setDisplayAlert(true);
    setItems([]);
  };

  const displayAlertHandler = () => {
    setDisplayAlert(false);
  };

  const clearHandler = () => {
    setItems([]);
    setDisplayAlert(false);
  };

  return (
    <div className="container">
      <h2 className="header">Price Calculator for a local grocery store</h2>

      <div className="items-entered-box">
        <ItemsEnteredBox
          itemsMap={itemsMap}
          onClear={clearHandler}
          onItemsList={itemsListHandler}
          onEmptyEnterError={emptyItemsEnterErrorHandler}
          onInvalidEnterError={invalidItemsEnterErrorHandler}
        />
      </div>

      {displayAlert && (
        <div className="alert-msg">
          <Alert
            title={alertContent.title}
            msg={alertContent.msg}
            onDismiss={displayAlertHandler}
          />
        </div>
      )}

      {items.length !== 0 && (
        <div className="items-data-table">
          <ItemsDataTable items={items} itemsOnSaleMap={itemsOnSaleMap} />
        </div>
      )}

      {items.length !== 0 && (
        <div className="items-purchased-total-cost">
          <ItemsPurchasedTotalCost
            items={items}
            itemsOnSaleMap={itemsOnSaleMap}
          />
        </div>
      )}
    </div>
  );
};

export default GroceryStoreCashier;
