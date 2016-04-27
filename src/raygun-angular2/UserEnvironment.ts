import {ExtendedNavigator, ExtendedWindow, ExtendedScreen} from './window';
import {BrowserDetector} from '../utils/BrowserDetector';

export class UserEnvironment {
    private _navigator = <ExtendedNavigator>(navigator || {});
    private _screen = <ExtendedScreen>(screen || {});
    private _window = <ExtendedWindow>(window || {});
    private _browserDetector = new BrowserDetector();

    // The number of processors in the machine
    "processorCount" = this._navigator && 'hardwareConcurrency' in this._navigator ? this._navigator.hardwareConcurrency : 0;
    // The version of the operating system this app is running on
    "osVersion" = this._navigator && 'oscpu' in this._navigator ? this._navigator.oscpu : '';
    // The width of the window
    "windowBoundsWidth" = this._screen ? this._screen.width : undefined;
    // The height of the window
    "windowBoundsHeight" = this._screen ? this._screen.height : undefined;
    // The width of the browser window
    "browser-Width" = this._window ? this._window.outerWidth : undefined;
    // The height of the browser window
    "browser-Height" = this._window ? this._window.outerHeight : undefined;
    // The width of the screen
    "screen-Width" = this._window ? this._window.innerWidth : undefined;
    // The height of the screen
    "screen-Height" = this._window ? this._window.innerHeight: undefined;
    // The scale of the screen
    "resolutionScale": number;
    // Color depth of the screen
    "color-Depth" = this._screen ? this._screen.colorDepth : undefined;
    // The orientation of the screen
    "currentOrientation" = (this._screen && 'orientation' in this._screen ? this._screen.orientation.type : undefined) || this._screen.msOrientation || '';
    // The type of CPU in the machine
    "cpu": string;
    "packageVersion": string;
    // CPU architecture (ARMv8, AMD64, etc)
    "architecture": string;
    // Device manufacturer
    "deviceManufacturer": string;
    // Device model
    "model": string;
    // Total RAM in MB
    "totalPhysicalMemory": number;
    // Available RAM in MB
    "availablePhysicalMemory": number;
    // Total Virtual Memory in MB - RAM plus swap space
    "totalVirtualMemory": number;
    // Available Virtual Memory in MB
    "availableVirtualMemory": number;
    // Free disk space in GB
    "diskSpaceFree": Array < Number > ;
    // Name of the device (phone name for instance)
    "deviceName": string;
    // Locale setting of the system
    "locale" = this._navigator ? this._navigator.language : undefined;
    // Number of hours offset from UTC
    "utcOffset" = new Date().getTimezoneOffset() / 60;
    // The browser manufacturer
    "browser" = this._navigator ? this._navigator.vendor : undefined;
    // The browser name
    "browserName" = this._browserDetector.getCurrentBrowser();
    // The full user agent string
    "browser-Version" = this._navigator ? this._navigator.userAgent : undefined;
    // OS Name
    "platform" = this._navigator ? this._navigator.platform : undefined;

}