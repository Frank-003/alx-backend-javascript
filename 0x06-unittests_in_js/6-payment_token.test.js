const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token.js');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with data when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((response) => {
        expect(response.data).to.equal('Successful response from the API');
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});
