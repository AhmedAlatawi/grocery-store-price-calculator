# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Run app locally

In the project directory, you can run:

### `npm start` or `yarn start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## How to calculate total price for each item?

In `ItemsDataTable` component, I'm checking if an item is on sale. If so, I'm performing the following steps:

1. I'm checking if its quantity is equal or larger than the sale price quantity.

2. If so, I'm calculating the remainder of item quantity divided by the sale item quantity.

3. I'm also dividing item quantity by the sale item quantity.

4. Finally, the total price of an on sale item would be the sum of item price multiplied by result of step 2, plus sale price multiplied by result of step 3.

If the item is not on sale, then the total price would be the item price multiplied by item quantity.

## How to calculate total cost?

In `ItemsPurchasedTotalCost` component, I'm using the JavaScript built-in method: `reduce` to calculate the overall sum plus the result of step 4 above if the item is on sale. Otherwise, I'm calculating the overall sum plus the item price divided by item quantity.

## How to calculate total savings?

In `ItemsPurchasedTotalCost` component, I'm also using the JavaScript built-in method: `reduce` to calculate the overall sum plus the result of item price multiplied by item quantity, and then subtracted by item total price, if the item is on sale. Otherwise the overall sum is returned.
