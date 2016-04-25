export class UserEnvironment {
    // The number of processors in the machine
    "processorCount" = 'hardwareConcurrency' in navigator ? navigator.hardwareConcurrency : 0;
    // The version of the operating system this app is running on
    "osVersion" = 'oscpu' in navigator ? navigator.oscpu : '';
    // The width of the window
    "windowBoundsWidth" = screen.width;
    // The height of the window
    "windowBoundsHeight" = screen.height;
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
    "color-Depth" = screen.colorDepth;
    // The orientation of the screen
    "currentOrientation" = screen.orientation.type || screen.msOrientation || '';
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
    "locale" = navigator.language;
    // Number of hours offset from UTC
    "utcOffset" = new Date().getTimezoneOffset() / 60;
    // The browser manufacturer
    "browser" = navigator.vendor;
    // The browser name
    "browserName": string;
    // The full user agent string
    "browser-Version" = navigator.userAgent;
    // OS Name
    "platform" = navigator.platform;
		
}