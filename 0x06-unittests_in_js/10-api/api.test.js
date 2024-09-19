const { expect } = require('chai');
const request = require('request');

describe('Available payments endpoint', () => {
  it('should return a 200 status code', (done) => {
    request('http://localhost:7865/available_payments', (error, response) => {
      expect(response.statusCode).to.equal(200);
      done();
    });
  });

  it('should return the correct payment methods', (done) => {
    request('http://localhost:7865/available_payments', (error, response, body) => {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: {
          credit_cards: true,
          paypal: false,
        },
      });
      done();
    });
  });
});

describe('Login endpoint', () => {
  it('should return a 200 status code and welcome message', (done) => {
    const options = {
      method: 'POST',
      url: 'http://localhost:7865/login',
      json: { userName: 'Betty' },
    };

    request(options, (error, response, body) => {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome Betty');
      done();
    });
  });
});
