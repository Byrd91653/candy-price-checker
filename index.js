const cc = require('cryptocompare');

cc.price('BTC', 'USD')
  .then((price) => {
    console.log(`BTC price: $${price}`);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
