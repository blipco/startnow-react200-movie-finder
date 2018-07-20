/* global define, it, describe, beforeEach, document */
const express = require('express');
const path = require('path');
const Nightmare = require('nightmare');
const expect = require('chai').expect;
const axios = require('axios');
const mocha = require('mocha');

let nightmare;

const app = express();
app.use(express.static(path.join(__dirname, '/../../public')));
app.use(express.static(path.join(__dirname, '/../../dist')));

app.listen(3000);

const url = 'http://127.0.0.1:3000';


describe('express', function() {
  this.timeout(15000);

  it('should have the correct page title', () => {
    const nightmare = new Nightmare();
    return nightmare
      .goto(url)
      .evaluate(() => document.getElementById('title').innerText)
      .end()
      .then((text) => {
        expect(text).to.contain('Movie Finder');
      })
  });

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});
