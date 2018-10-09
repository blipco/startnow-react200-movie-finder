const express = require('express');
const path = require('path');
const expect = require('chai').expect;
const axios = require('axios');

const app = express();
const url = 'http://127.0.0.1:3000';

app.use(express.static(path.join(__dirname, '/../../public')));
app.use(express.static(path.join(__dirname, '/../../dist')));

app.listen(3000);




describe('express', function() {  

  it('returns the correct status code', () => axios.get(url)
    .then(response => expect(response.status === 200)));
});
