import React, { useRef } from "react";

const ItemsEnteredBox = (props) => {
  const itemsRef = useRef(null);

  const collectEnteredItemsHandler = (e) => {
    e.preventDefault();

    if (!itemsRef.current.value) {
      props.onEmptyEnterError();
      return;
    }

    const itemsArr = itemsRef.current.value
      .split(",")
      .map((item) => item.trim().toLowerCase());

    let invalidItem;

    const items = [];

    for (let item of itemsArr) {
      if (!props.itemsMap[item]) {
        invalidItem = item;
        break;
      }

      const foundItemIndex = items.findIndex(
        (itemObj) => itemObj.name === item
      );

      if (foundItemIndex !== -1) {
        items[foundItemIndex].quantity++;
      } else {
        items.push({
          name: item,
          price: props.itemsMap[item],
          quantity: 1
        });
      }
    }

    if (invalidItem !== undefined) {
      props.onInvalidEnterError(invalidItem);
      return;
    }

    props.onItemsList(items);
  };

  const clearEntry = () => {
    props.onClear();
    itemsRef.current.value = "";
  };

  return (
    <form className="form-floating" onSubmit={collectEnteredItemsHandler}>
      <textarea
        className="form-control"
        placeholder="Leave a comment here"
        id="itemsTextarea"
        ref={itemsRef}
        style={{ height: "100px" }}
      ></textarea>
      <label htmlFor="itemsTextarea">
        Please enter all the items purchased separated by a comma
      </label>
      <div style={{ paddingTop: "15px" }}>
        <button type="submit" className="btn btn-outline-primary">
          Purchase
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          style={{ marginLeft: "10px" }}
          onClick={clearEntry}
        >
          Clear
        </button>
      </div>
    </form>
  );
};

export default ItemsEnteredBox;
