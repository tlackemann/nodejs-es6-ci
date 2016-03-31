import server from './../../src/index'
import chai from 'chai'

const assert = chai.assert

describe('server', () => {
  it('tells me hello world', () => {
    server.inject({
      method: 'GET',
      url: '/'
    }, function (res) {
      assert.equal(res.statusCode, 200)
      assert.deepEqual(res.result, { message: 'Hello, ElasticBeanstalk!' })
    })
  })
})
