import 'reflect-metadata';
import {WrappedException} from '@angular/core';
import {TypeMoq as TM} from 'typemoq';
import {assert} from 'chai';
import {RaygunError} from '../src/raygun-angular2/RaygunError';

describe('Raygun Error', () => {
  var subject: RaygunError;
  var sampleException = TM.Mock.ofType(WrappedException);
  
  sampleException.setup(x => x.originalException)
    .returns(() => new Error('fintech'));
    
  beforeEach(() => {
    subject = new RaygunError(sampleException.object);
  });
  
  it('should set the error type', () => {
    assert.equal(subject.className, 'Error');
  });
  
  it('should contain the error message', () => {
    assert.equal(subject.message, 'fintech');
  });
  
  it('should create a stack trace', () => {
    assert.isArray(subject.stackTrace);
    assert.ok(subject.stackTrace[0].fileName);
    assert.ok(subject.stackTrace[0].lineNumber);
    assert.ok(subject.stackTrace[0].columnNumber);
    assert.ok(subject.stackTrace[0].methodName);
    assert.ok(subject.stackTrace[0].className);
  });
});