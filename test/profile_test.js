const request = require('supertest');
var app = require('../server');
const chai = require('chai');
const express = require('express');

describe('POST new information to a profile', () => {
    it('creates a profile for a logges in user', () => {
        request(app)
        .post('/api/profile')
        .send({
            user: {
                'email': 'hunterrwaters@gmail.com',
                'password': '123456'
            },
            "skills": "HTML, CSS,PHP,Python, NodeJS",
            "website": "www.google.com",
            "location": "Seattle",
            "bio": "I am a  new developer in Seattle, WA",
            "githubusername": "hunterrwaters",
            "twitter": "https://www.twitter.com/hunterwaters",
            "facebook": "https://www.facebook.com/hunterwaters",
            "youtube": "https://www.youtube.com/hunterwaters"
        })
        .expect(201)
    });
});

describe('GET logged in users profile', () => {
    it('it should get the users profile after login', () => {
        request(app)
        .get('/api/profile')
        .send({
            'email': 'hunterrwaters@gmail.com',
            'password': '123456'
        })
        .expect({
            "skills": "HTML, CSS,PHP,Python, NodeJS",
            "website": "www.google.com",
            "location": "Seattle",
            "bio": "I am a  new developer in Seattle, WA",
            "githubusername": "hunterrwaters",
            "twitter": "https://www.twitter.com/hunterwaters",
            "facebook": "https://www.facebook.com/hunterwaters",
            "youtube": "https://www.youtube.com/hunterwaters"
        }, 200)
    });
});

describe('GET all profiles', () => {
    it('get all profiles listed', () => {
        request(app)
        .get('/api/profile')
        .expect( {} )
        .expect(200)
    });
});

describe('GET all profiles', () => {
    it('get all profiles listed', () => {
        request(app)
        .get('/api/profile')
        .expect( {} )
        .expect(200)
    });
});

describe('GET profile by user id', () => {
    it('get only profile by id', () => {
        request(app)
        .get('api/profile/user')
        .send( {
            '_id': '5f9770e275c351dea43f816f'
        })
        .expect({
            user: {
                'email': 'hunterrwaters@gmail.com',
                'password': '123456'
            },
            "skills": "HTML, CSS,PHP,Python, NodeJS",
            "website": "www.google.com",
            "location": "Seattle",
            "bio": "I am a  new developer in Seattle, WA",
            "githubusername": "hunterrwaters",
            "twitter": "https://www.twitter.com/hunterwaters",
            "facebook": "https://www.facebook.com/hunterwaters",
            "youtube": "https://www.youtube.com/hunterwaters"
        })
        .expect(200)
    });
});

describe('PUT add experience to profile', () => {
    it('adds experience to profile', () => {
        request(app)
        .put('/api/profile/experience/5f9770e275c351dea43f816f')
        .send({
    "title": "Developer and student",
    "company": "Uber",
    "location": "Seattle, WA",
    "from": "8-10-2010",
    "current": true,
    "description": "Developer"
        })
        .expect(201)
    });
});

describe('PUT add education to profile', () => {
    it('adds education to profile', () => {
        request(app)
        .put('/api/profile/education/5f9770e275c351dea43f816f')
        .send({
            "school": "Thinkful",
            "degree": "Associates",
            "location": "Seattle, WA",
            "from": "8-10-2010",
            "current": true,
            "description": "Current Student"
        })
        .expect(201)
    });
});

describe('DELETE experience from profile', () => {
    it('deletes experience from profile', () => {
        request(app)
        .delete('/api/profile/experience/5f9770e275c351dea43f816f')
        .send({
    "title": "Developer and student",
    "company": "Uber",
    "location": "Seattle, WA",
    "from": "8-10-2010",
    "current": true,
    "description": "Developer"
        })
        .expect(200)
    });
});

describe('DELETE education from profile', () => {
    it('deletes education from profile', () => {
        request(app)
        .delete('/api/profile/education/5f9770e275c351dea43f816f')
        .send({
            "school": "Thinkful",
            "degree": "Associates",
            "location": "Seattle, WA",
            "from": "8-10-2010",
            "current": true,
            "description": "Current Student"
        })
        .expect(200)
    });
});

describe('GET github repos for logges in user', () => {
    it('get all profiles listed', () => {
        request(app)
        .get('api/profile/github/hunterwaters')
        .send({
            'email': 'hunterrwaters@gmail.com',
            'password': '123456'
        })
        .expect(200)
    });
});


