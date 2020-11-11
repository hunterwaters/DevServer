const request = require('supertest');
var app = require('../server');
const chai = require('chai');
const express = require('express');

describe('POST new information to  post', () => {
    it('create s a new post', () => {
        request(app)
        .post('/api/posts')
        .send({
            user: {
                'email': 'hunterrwaters@gmail.com',
                'password': '123456'
            },
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id orci blandit, consequat massa fringilla, fermentum ligula. Ut semper laoreet gravida. Nam consequat purus et turpis dignissim lobortis. "
        })
        .expect(201)
    });
});

describe('GET all posts', () => {
    it('get all posts listed', () => {
        request(app)
        .get('/api/posts')
        .expect( {} )
        .expect(200)
    });
});

describe('GET posts by id', () => {
    it('get posts by id', () => {
        request(app)
        .get('/api/posts/5f9770e275c351dea43f816f')
        .expect({
            "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi id orci blandit, consequat massa fringilla, fermentum ligula. Ut semper laoreet gravida. Nam consequat purus et turpis dignissim lobortis. "
        })
        .expect(200)
    });
});

describe('DELETE a post', () => {
    it('delete a post', () => {
        request(app)
        .delete('/api/posts/')
        .send( {
            '_id': '5f9770e275c351dea43f816f'
        })
        .expect(200)
    });
});

describe('PUT like a post', () => {
    it('like a post', () => {
        request(app)
        .put('/api/posts/like/5f9770e275c351dea43f816f')
        .expect(201)
    });
});

describe('PUT unlike a post', () => {
    it('like a post', () => {
        request(app)
        .put('/api/posts/unlike/5f9770e275c351dea43f816f')
        .expect(201)
    });
});


describe('POST new comment to post', () => {
    it('comment on a post', () => {
        request(app)
        .post('/api/posts/comment/5f99cc1993be7f11abb12e96')
        .send({
            "text": "Thank you, great post!"
        })
        .expect(201)
    });
});

describe('DELETE a comment', () => {
    it('delete a comment', () => {
        request(app)
        .delete('/api/posts/comment/5f99cc1993be7f11abb12e96')
        .expect(200)
    });
});





