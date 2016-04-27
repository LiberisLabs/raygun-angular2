import {assert} from 'chai';
import {Request} from '../src/raygun-angular2/Request';

global['window'].location = {
  search: '?foo=bar&baz=qux&fintech'
};

describe('Request', () => {
  var subject: Request;
  
  beforeEach(() => {
    subject = new Request();
  });
  
  describe('buildQueryString', () => {
    it('should create an object representing the query string', () => {
      assert.deepEqual(subject.buildQueryString(), {
        foo: 'bar',
        baz: 'qux',
        fintech: undefined
      });
    })
  });
});