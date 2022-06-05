const app = require('./index.js') // Link to your server file
const supertest = require('supertest')
const request = supertest(app)
it('gets the test endpoint', async () => {
  const response = await request.get('/elearning')
  console.log(response.status)
  expect(response.status).toBe(200)
  expect(response.body).toStrictEqual({ myFavouriteAuthor: 'Robert Kiyosaki' })
})





