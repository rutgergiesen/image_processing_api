import supertest from "supertest";
import app from '../index';
import myFunc from '../index';
/*
it('expect myFunc(5) to equal 25', () => {
    expect(myFunc(5)).toEqual(25);
});
*/
//test endpoint 
// gets the api/images endpoint error

const request = supertest(app);
// test should fail
describe('Gets the api/images endpoint', ()=> {
    it('fails getting the api endpoint', async () => {
        const response = await request.get('/api');
        expect(response.status).toBe(404);
   
    })

    it('gets the api/images endpoint', async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(200);
    })
});


//test image transform function should resolve or reject
//expect transform to not throw error
//expect transform to throw specific error: error at sharp processing: Error: Input file is missing

//test working