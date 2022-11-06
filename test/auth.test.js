const request = require('supertest');
const app = require('../server')
const mongoose = require('mongoose')

beforeAll(done=>{
    done()
})

afterAll(done=>{
    mongoose.connection.close()
    done()
})

describe("GET /",()=>{
    test("It should respond hello",async()=>{
        const response = await request(app).get("/");
        expect(response.statusCode).toEqual(200);
    });
});