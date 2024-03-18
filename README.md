```
# BTC Price Checker

[![npm version](https://img.shields.io/npm/v/btc-price-checker.svg?style=flat-square)](https://www.npmjs.com/package/btc-price-checker)

A simple package to retrieve the current price of Bitcoin (BTC).

## Installation

Install the package using npm:

```
npm install btc-price-checker
```

## Usage

To use the package, you need to import it:

```javascript
const btcPriceChecker = require('btc-price-checker');
```

Then, you can call the `getBTCPrice()` function to retrieve the current price of Bitcoin:

```javascript
btcPriceChecker.getBTCPrice()
  .then(price => {
    console.log(`The current price of Bitcoin is $${price}`);
  })
  .catch(error => {
    console.error('Error fetching BTC price:', error);
  });
```

## API Documentation

The package provides the following function:

### `getBTCPrice()`

This function fetches the current price of Bitcoin from a reliable data source. It returns a Promise that resolves to the current price in USD.

## Examples

Here's an example of how to use the `getBTCPrice()` function:

```javascript
const btcPriceChecker = require('btc-price-checker');

btcPriceChecker.getBTCPrice()
  .then(price => {
    console.log(`The current price of Bitcoin is $${price}`);
  })
  .catch(error => {
    console.error('Error fetching BTC price:', error);
  });
```

## Contributing

If you wish to contribute to this package, you can follow the guidelines in CONTRIBUTING.md file.

## License

This package is licensed under the MIT License.
```