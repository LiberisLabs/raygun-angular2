import 'reflect-metadata';
import {WrappedException} from '@angular/core';
import {Observable} from 'rxjs';
import {Http, Response} from '@angular/http';
import {RaygunExceptionHandler} from '../src/RaygunExceptionHandler';
import {assert} from 'chai';
import {TypeMoq} from 'typemoq';
import {ExtendedNavigator} from '../src/raygun-angular2/window';

// Manually mocking various browser specifics
global['btoa'] = (str: string) => new Buffer(str).toString('base64');
global['navigator'] = {
  userAgent: 'meow'
};
global['screen'] = {
  orientation: {}
};
global['window'] = {
  location: {
    search: '?foo=bar'
  }
};
global['document'] = {};

describe('Raygun Exception Handler', () => {
  var subject: RaygunExceptionHandler;
  var http: TypeMoq.Mock<Http> = TypeMoq.Mock.ofType(Http);
  var sampleResponse = TypeMoq.Mock.ofType(Observable);
  var sampleException: TypeMoq.Mock<WrappedException> = TypeMoq.Mock.ofType(WrappedException);
  var originalException = new Error('fintech');

  http
    .setup(x => x.post(TypeMoq.It.isAny(), TypeMoq.It.isAny()))
    .returns(() => sampleResponse.object);

  sampleException
    .setup(x => x.originalException)
    .returns(() => originalException);

  beforeEach(() => {
    RaygunExceptionHandler.apiKey = 'fintechfintech==';
    RaygunExceptionHandler.version = '1.0.0';

    subject = new RaygunExceptionHandler(http.object);
  });

  it('should exist', () => {
    assert.ok(RaygunExceptionHandler);
  });

  it('should attempt to call the Raygun API and rethrow the exception', () => {
    try {
      subject.call(sampleException.object);
      assert.fail();
    } catch (exception) {
      assert.equal(exception, originalException);
    }
    
    http.verify(x => x.post('https://api.raygun.io/entries?apikey=fintechfintech==', TypeMoq.It.isAny()), TypeMoq.Times.once());
  });
});

describe('Raygun Exception Handler in noop mode', () => {
  var subject: RaygunExceptionHandler;
  var http: TypeMoq.Mock<Http> = TypeMoq.Mock.ofType(Http);
  var sampleResponse = TypeMoq.Mock.ofType(Observable);
  var sampleException: TypeMoq.Mock<WrappedException> = TypeMoq.Mock.ofType(WrappedException);
  var originalException = new Error('fintech');

  http
    .setup(x => x.post(TypeMoq.It.isAny(), TypeMoq.It.isAny()))
    .returns(() => sampleResponse.object);

  sampleException
    .setup(x => x.originalException)
    .returns(() => originalException);

  beforeEach(() => {
    RaygunExceptionHandler.apiKey = 'fintechfintech==';
    RaygunExceptionHandler.version = '1.0.0';
    RaygunExceptionHandler.noop = true;

    subject = new RaygunExceptionHandler(http.object);
  });

  it('should exist', () => {
    assert.ok(RaygunExceptionHandler);
  });

  it('should not attempt to call the Raygun API but does rethrow the exception', () => {
    assert.throws(() => subject.call(sampleException.object), Error, originalException.message);
    
    http.verify(x => x.post(TypeMoq.It.isAny(), TypeMoq.It.isAny()), TypeMoq.Times.never());
  });
});
