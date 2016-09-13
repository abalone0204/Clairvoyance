import {
  assert
} from 'chai'
import {
  fetchInitJobObject,
  setInitJobObject,
  failToInitJobObject,
} from 'actions/initialize.js'
import {
  jobObject,
} from 'reducers/init.js'
describe('Reducer/ init', function() {
  describe('jobObject', function() {
    const initState = {
      status: 'init',
    }
    it('should handle init of initJobObject', () => {
      const expected = {
        status: 'init',
      }
      const actual = jobObject(initState, {})
      assert.deepEqual(expected, actual)
    })

    it('should handle fetch initJobObject', () => {
      const expected = {
        status: 'fetching',
      }
      const actual = jobObject(initState, fetchInitJobObject())
      assert.deepEqual(expected, actual)
    })

    it('should handle set initJobObject', () => {
      const mock = {
        job_name: 'engineer',
        company_name: 'qooqle',
      }
      const expected = {
        status: 'completed',
        ...mock
      }
      const actual = jobObject(initState, setInitJobObject(mock))
      assert.deepEqual(expected, actual)
    })

    it('should handle fail to fetch initJobObject', () => {
      const error = new Error('fail to fetch initJobObject')
      const expected = {
        status: 'error',
        error,
      }
      const actual = jobObject(initState, failToInitJobObject(error))
      assert.deepEqual(expected, actual)
    })

  });
});