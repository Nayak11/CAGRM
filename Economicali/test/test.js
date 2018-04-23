var assert = require('assert');
var request = require('supertest');
var assert = require('chai').assert;
var app = require('../server');
var http = require('http');

it('Test case 1 - should respond with success flag on successful login', function (done) {
    this.timeout(500);
    request(app).post('/dashboard')
        .send({categorydata : "Education"})
        .expect(201)
        .end(function (err, res) {
            if (err) done(err);
            assert.equal(res.body.success, true);
            done();
        });
});