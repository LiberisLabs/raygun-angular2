import 'reflect-metadata';
import * as sinon from 'sinon';
import {assert} from 'chai';
import {WrappedException} from 'angular2/core';
import {TypeMoq as TM} from 'typemoq';
import {ErrorReport} from '../src/raygun-angular2/ErrorReport';

describe('Error Report', () => {
  var subject: ErrorReport;
  var sampleException = TM.Mock.ofType(WrappedException);
  var clock: Sinon.SinonFakeTimers;
  
  sampleException.setup(x => x.originalException)
    .returns(() => new Error('fintech'));
  
  beforeEach(() => {
    clock = sinon.useFakeTimers();
    subject = new ErrorReport(sampleException.object);
  });
  
  afterEach(() => {
    clock.restore();
  });
  
  it('should set the time of occurence', () => {
    assert.equal(subject.occurredOn, new Date().toISOString());
  });
  
  it('should create an error details object', () => {
    assert.ok(subject.details);
  });
});