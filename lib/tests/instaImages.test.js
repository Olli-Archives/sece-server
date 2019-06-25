
require('dotenv').config();
const request = require('supertest');
const mongoose = require('mongoose');
const connect = require('../../lib/utils/connect');
const app = require('../../lib/app');

describe(`images route`, ()=>{
  beforeAll(() => {
    return connect();
  });
  beforeEach(() => {
    return mongoose.connection.dropDatabase();
  });
  afterAll(() => {
    return mongoose.connection.close();
  });
  const imageArray = ['image1', 'image2', 'image3'];

  it('can make images', async()=>{
  const images = await request(app)
    .post('/api/v1/images')
    .send([...imageArray]);
    expect(images.body).toEqual({images:[...imageArray], __v:0, _id:expect.any(String)})

  })
  it('can get all imges', async()=>{
  await request(app)
  .post('/api/v1/images')
  .send([...imageArray]);
  const foundImages = await request(app)
  .get('/api/v1/images');
  expect(foundImages.body).toEqual([{images:[...imageArray], __v:0, _id:expect.any(String)}]) 
  })

})