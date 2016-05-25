import 'reflect-metadata';
import {WrappedException} from '@angular/core';
import {TypeMoq as TM} from 'typemoq';
import {ErrorDetails} from '../src/raygun-angular2/ErrorDetails';
import {assert} from 'chai';

describe('Error Details', () => {
  var subject: ErrorDetails;
  var sampleError = TM.Mock.ofType(WrappedException);
  
  sampleError.setup(x => x.originalException)
    .returns(() => new Error('fintech'));
   
  beforeEach(() => {
    subject = new ErrorDetails(sampleError.object);
  });
  
  it('should generate a grouping key by base64 encoding the error message', () => {
    assert.equal(subject.generateGroupingKey(sampleError.object.originalException.message), 'ZmludGVjaA==');
  });
  
  it('should generate child objects', () => {
    assert.ok(subject.groupingKey);
    assert.ok(subject.error);
    assert.ok(subject.environment);
    assert.ok(subject.request);
    assert.ok(subject.client);
  });
});