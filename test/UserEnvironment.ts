import {assert} from 'chai';
import * as sinon from 'sinon';
import {UserEnvironment} from '../src/raygun-angular2/UserEnvironment';

describe('User Environment', () => {
    var subject: UserEnvironment;
    var clock: Sinon.SinonFakeTimers;

    beforeEach(() => {
        clock = sinon.useFakeTimers();
        // Pretend we are a browser
        global['navigator'] = {
            hardwareConcurrency: 8,
            oscpu: 'Win32',
            language: 'en-GB',
            userAgent: 'foo',
            platform: 'Win32'
        };

        global['screen'] = {
            width: 1024,
            height: 1024,
            colorDepth: 32,
            orientation: {
                type: 'landscape-primary'
            }
        };

        global['window'] = {
            outerWidth: 1000,
            outerHeight: 1000,
            innerWidth: 950,
            innerHeight: 950
        };
        
        subject = new UserEnvironment();

    });

    it('attempts to establish the number of processors', () => {
        assert.equal(subject.processorCount, 8);
        
        delete global['navigator'].hardwareConcurrency;
        subject = new UserEnvironment();
        
        assert.notOk(subject.processorCount);
    });
    
    it('attempts to establish the OS', () => {
      assert.equal(subject.osVersion, 'Win32');
      
      delete global['navigator'].oscpu;
      subject = new UserEnvironment();
      
      assert.notOk(subject.osVersion);
    });
    
    it('attempts to get the screen, browser and viewport dimension', () => {
      assert.equal(subject.windowBoundsHeight, 1024);
      assert.equal(subject.windowBoundsWidth, 1024);
      assert.equal(subject['browser-Width'], 1000);
      assert.equal(subject['browser-Height'], 1000);
      assert.equal(subject['screen-Height'], 950);
      assert.equal(subject['screen-Width'], 950);
    });
    
    it('gets the color depth of the screen', () => {
      assert.equal(subject['color-Depth'], 32);
    });
    
    it('gets the device orientation', () => {
      assert.equal(subject.currentOrientation, 'landscape-primary');
    });
    
    it('gets the device orientation on IE', () => {
      delete global['screen'].orientation;
      global['screen'].msOrientation = 'landscape';

      subject = new UserEnvironment();
      
      assert.equal(subject.currentOrientation, 'landscape');
    });
    
    it('gets the current locale', () => {
      assert.equal(subject.locale, 'en-GB');
    });
    
    it('gets the UTC offset', () => {
      assert.equal(subject.utcOffset, new Date().getTimezoneOffset() / 60);
    });
    
    it('gets the browser version', () => {
      assert.equal(subject['browser-Version'], global['navigator'].userAgent);
    });
    
    it('gets the browser platform', () => {
      assert.equal(subject.platform, global['navigator'].platform);
    });
    
});