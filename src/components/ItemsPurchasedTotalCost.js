import React from "react";

const ItemsPurchasedTotalCost = (props) => {
  const getTotalPrice = () => {
    return props.items.reduce((sum, item) => {
      const onSaleItem = props.itemsOnSaleMap[item.name];

      if (onSaleItem && item.quantity >= onSaleItem.quantity) {
        const moduloResult = item.quantity % onSaleItem.quantity;
        const divisionResult = Math.floor(item.quantity / onSaleItem.quantity);

        return (
          sum + (item.price * moduloResult + divisionResult * onSaleItem.price)
        );
      }

      return sum + item.price * item.quantity;
    }, 0);
  };

  const getTotalSavings = () => {
    return props.items.reduce((sum, item) => {
      const onSaleItem = props.itemsOnSaleMap[item.name];

      return onSaleItem
        ? sum + (item.price * item.quantity - item.totalPrice)
        : sum + 0;
    }, 0);
  };

  return (
    <div className="card">
      <div className="card-body">
        <p className="card-text">Total price: ${getTotalPrice().toFixed(2)}</p>
        <p className="card-text">
          You saved ${getTotalSavings().toFixed(2)} today.
        </p>
      </div>
    </div>
  );
};

export default ItemsPurchasedTotalCost;
