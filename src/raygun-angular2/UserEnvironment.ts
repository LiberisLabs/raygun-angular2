import {ExtendedNavigator, ExtendedScreen} from './window';

export class UserEnvironment {
		private _navigator = navigator as ExtendedNavigator;
		private _screen = screen as ExtendedScreen;
		
    // The number of processors in the machine
    "processorCount" = 'hardwareConcurrency' in this._navigator ? this._navigator.hardwareConcurrency : 0;
    // The version of the operating system this app is running on
    "osVersion" = 'oscpu' in this._navigator ? this._navigator.oscpu : '';
    // The width of the window
    "windowBoundsWidth" = this._screen.width;
    // The height of the window
    "windowBoundsHeight" = this._screen.height;
    // The width of the browser window
    "browser-Width" = window.outerWidth;
    // The height of the browser window
    "browser-Height" = window.outerHeight;
    // The width of the screen
    "screen-Width" = window.innerWidth;
    // The height of the screen
    "screen-Height" = window.innerHeight;
    // The scale of the screen
    "resolutionScale": number;
    // Color depth of the screen
    "color-Depth" = this._screen.colorDepth;
    // The orientation of the screen
    "currentOrientation" = this._screen.orientation.type || this._screen.msOrientation || '';
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
    "diskSpaceFree": Array<Number> ;
    // Name of the device (phone name for instance)
    "deviceName": string;
    // Locale setting of the system
    "locale" = this._navigator.language;
    // Number of hours offset from UTC
    "utcOffset" = new Date().getTimezoneOffset() / 60;
    // The browser manufacturer
    "browser" = this._navigator.vendor;
    // The browser name
    "browserName": string;
    // The full user agent string
    "browser-Version" = this._navigator.userAgent;
    // OS Name
    "platform" = this._navigator.platform;
		
}