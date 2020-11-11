
const request = require('supertest');
var app = require('../server');
const chai = require('chai');
const express = require('express');

describe('POST a new user when they register', () => {
    it('should post a new user when they register on app', () => {
        request(app)
        .post('/api/users')
        .send({
            'name': 'Scott Smith',
            'email': 'scott@gmail.com',
            'password': '123456'
        })
        .expect(201)
    });
});

describe('GET a user when they are authorized and registered', () => {
    it('it should validate a user for login once they are authenticated', () => {
        request(app)
        .get('/api/auth')
        .send({
            'name': 'Hunter Waters',
            'email': 'hunterrwaters@gmail.com',
            'password': '123456'
        })
        .expect(200)
    });
});

describe('POST a user with proper credentials', () => {
    it('should POST a login for authentication', () => {
        request(app)
        .post('/api/auth')
        .send({
            'email': 'hunterrwaters@gmail.com',
            'password': '123456'
        })
        .expect(200)
    });
});

