import 'reflect-metadata';
import {RaygunExceptionHandler} from '../src/RaygunExceptionHandler';
import {assert} from 'chai';

describe('Raygun Exception Handler', () => {
  it('should exist', () => {
    assert.ok(RaygunExceptionHandler);
  });
});
