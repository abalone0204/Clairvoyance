import {
    assert
} from 'chai'
import {
    CHANGE_USER_IDENTITY,
    changeUserIdentity
} from 'actions/changeUserIdentity.js'

describe('Actions/ changeUserIdentity', function () {
    it('should return action of changeUserIdentity',  () => {
        const expected = {
            type: CHANGE_USER_IDENTITY
        }
        const actual = changeUserIdentity()
        assert.deepEqual(expected, actual) 
    })
});