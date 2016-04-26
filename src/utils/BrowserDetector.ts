import {ExtendedWindow, ExtendedDocument} from '../raygun-angular2/window';


export class BrowserDetector {
  private _window = <ExtendedWindow>window;
  private _document = <ExtendedDocument>document;
  
  private _results = {
    isOpera: false,
    isFirefox: false,
    isSafari: false,
    isIE: false,
    isEdge: false,
    isChrome: false,
    isBlink: false
  };
  
  constructor() {
    // Opera 8.0+
    this._results.isOpera = (!!this._window.opr && !!this._window.opr.addons) || !!this._window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;
    // Firefox 1.0+
    this._results.isFirefox = typeof this._window.InstallTrigger !== 'undefined';
    // At least Safari 3+: "[object HTMLElementConstructor]"
    this._results.isSafari = Object.prototype.toString.call(this._window.HTMLElement).indexOf('Constructor') > 0;
    // Internet Explorer 6-11
    this._results.isIE = /*@cc_on!@*/ false || !!this._document.documentMode;
    // Edge 20+
    this._results.isEdge = !this._results.isIE && !!this._window.StyleMedia;
    // Chrome 1+
    this._results.isChrome = !!this._window.chrome && !!this._window.chrome.webstore;
    // Blink engine detection
    this._results.isBlink = (this._results.isChrome || this._results.isOpera) && !!this._window.CSS;
  }
  
  getCurrentBrowser() {
    var browser = '';
    var browserKey = Object.keys(this._results).map((k) => {
      if (this._results[k]) {
        return k;
      }
    }).filter(k => !!k);
    
    if (browserKey.length > 1) {
      browser = browserKey[0].substr(2);
    }
    
    return browser;
  }
  
  getVendor() {
    
  }
}