import React from "react";

const ItemsDataTable = (props) => {
  const buildTableBody = () => {
    return props.items.map((item, i) => {
      const onSaleItem = props.itemsOnSaleMap[item.name];

      if (onSaleItem && item.quantity >= onSaleItem.quantity) {
        const moduloResult = item.quantity % onSaleItem.quantity;
        const divisionResult = Math.floor(item.quantity / onSaleItem.quantity);

        item.totalPrice =
          item.price * moduloResult + divisionResult * onSaleItem.price;
      } else {
        item.totalPrice = item.price * item.quantity;
      }

      return (
        <tr key={i}>
          <td style={{ textTransform: "capitalize" }}>{item.name}</td>
          <td>{item.quantity}</td>
          <td>${item.totalPrice}</td>
        </tr>
      );
    });
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Item</th>
          <th scope="col">Quantity</th>
          <th scope="col">Price</th>
        </tr>
      </thead>
      <tbody>{buildTableBody()}</tbody>
    </table>
  );
};

export default ItemsDataTable;
