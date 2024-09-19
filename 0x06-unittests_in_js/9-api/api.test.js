const { expect } = require('chai');
const request = require('request');

describe('Cart page', () => {
  it('should return a 200 status code when ID is a number', (done) => {
    request('http://localhost:7865/cart/12', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return a 404 status code when ID is not a number', (done) => {
    request('http://localhost:7865/cart/hello', (error, response) => {
      expect(response.statusCode).to.equal(404);
      done();
    });
  });

  it('should return the correct message when ID is a number', (done) => {
    request('http://localhost:7865/cart/12', (error, response, body) => {
      expect(body).to.equal('Payment methods for cart 12');
      done();
    });
  });

  it('should return an error message when ID is not a number', (done) => {
    request('http://localhost:7865/cart/hello', (error, response, body) => {
      expect(body).to.equal('Invalid cart ID');
      done();
    });
  });
});
