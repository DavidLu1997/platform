// Copyright (c) 2016 Mattermost, Inc. All Rights Reserved.
// See License.txt for license information.

/*
Example User Agents
--------------------

Chrome:
    Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36

Firefox:
    Mozilla/5.0 (Windows NT 10.0; WOW64; rv:47.0) Gecko/20100101 Firefox/47.0

IE11:
    Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko

Edge:
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586

Desktop App:
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Mattermost/1.2.1 Chrome/49.0.2623.75 Electron/0.37.8 Safari/537.36
    Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/46.0.2486.0 Safari/537.36 Edge/13.10586
    Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_0) AppleWebKit/537.36 (KHTML, like Gecko) Mattermost/3.4.1 Chrome/53.0.2785.113 Electron/1.4.2 Safari/537.36
    Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Mattermost/3.4.1 Chrome/51.0.2704.106 Electron/1.2.8 Safari/537.36

Android Chrome:
    Mozilla/5.0 (Linux; Android 4.0.4; Galaxy Nexus Build/IMM76B) AppleWebKit/535.19 (KHTML, like Gecko) Chrome/18.0.1025.133 Mobile Safari/535.19

Android App:
    Mozilla/5.0 (Linux; U; Android 4.1.1; en-gb; Build/KLP) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30
    Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/_BuildID_) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36
    Mozilla/5.0 (Linux; Android 5.1.1; Nexus 5 Build/LMY48B; wv) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/43.0.2357.65 Mobile Safari/537.36

iOS Safari:
    Mozilla/5.0 (iPhone; U; CPU like Mac OS X; en) AppleWebKit/420+ (KHTML, like Gecko) Version/3.0 Mobile/1A543 Safari/419.3

iOS Android:
    Mozilla/5.0 (iPhone; U; CPU iPhone OS 5_1_1 like Mac OS X; en) AppleWebKit/534.46.0 (KHTML, like Gecko) CriOS/19.0.1084.60 Mobile/9B206 Safari/7534.48.3

iOS App:
    Mozilla/5.0 (iPhone; CPU iPhone OS 9_3_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Mobile/13F69
*/

const userAgent = window.navigator.userAgent;

export function isChrome() {
    return userAgent.indexOf('Chrome') > -1;
}

export function isSafari() {
    return userAgent.indexOf('Safari') !== -1 && userAgent.indexOf('Chrome') === -1;
}

export function isIosSafari() {
    return userAgent.indexOf('iPhone') !== -1 && userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('CriOS') === -1;
}

export function isIosChrome() {
    return userAgent.indexOf('CriOS') !== -1;
}

export function isIosWeb() {
    return isIosSafari() || isIosChrome();
}

export function isIos() {
    return userAgent.indexOf('iPhone') !== -1;
}

export function isAndroid() {
    return userAgent.indexOf('Android') !== -1;
}

export function isAndroidChrome() {
    return userAgent.indexOf('Android') !== -1 && userAgent.indexOf('Chrome') !== -1 && userAgent.indexOf('Version') === -1;
}

export function isAndroidWeb() {
    return isAndroidChrome();
}

// Returns true if and only if the user is using a Mattermost mobile app. This will return false if the user is using the
// web browser on a mobile device.
export function isMobileApp() {
    return userAgent.indexOf('iPhone') !== -1 && userAgent.indexOf('Safari') === -1 && userAgent.indexOf('CriOS') === -1;
}

// Returns true if and only if the user is using Mattermost from either the mobile app or the web browser on a mobile device.
export function isMobile() {
    return isIos() || isAndroid();
}

export function isFirefox() {
    return userAgent.indexOf('Firefox') !== -1;
}

export function isInternetExplorer() {
    return userAgent.indexOf('Trident') !== -1;
}

export function isEdge() {
    return userAgent.indexOf('Edge') !== -1;
}

export function getOperatingSystem() {
    let os = 'other';
    const clientStrings = [
        {s: 'Windows 10', r: /(Windows 10.0|Windows NT 10.0)/},
        {s: 'Windows 8.1', r: /(Windows 8.1|Windows NT 6.3)/},
        {s: 'Windows 8', r: /(Windows 8|Windows NT 6.2)/},
        {s: 'Windows 7', r: /(Windows 7|Windows NT 6.1)/},
        {s: 'Windows Vista', r: /Windows NT 6.0/},
        {s: 'Windows Server 2003', r: /Windows NT 5.2/},
        {s: 'Windows XP', r: /(Windows NT 5.1|Windows XP)/},
        {s: 'Windows 2000', r: /(Windows NT 5.0|Windows 2000)/},
        {s: 'Windows ME', r: /(Win 9x 4.90|Windows ME)/},
        {s: 'Windows 98', r: /(Windows 98|Win98)/},
        {s: 'Windows 95', r: /(Windows 95|Win95|Windows_95)/},
        {s: 'Windows NT 4.0', r: /(Windows NT 4.0|WinNT4.0|WinNT|Windows NT)/},
        {s: 'Windows CE', r: /Windows CE/},
        {s: 'Windows 3.11', r: /Win16/},
        {s: 'Android', r: /Android/},
        {s: 'Open BSD', r: /OpenBSD/},
        {s: 'Sun OS', r: /SunOS/},
        {s: 'Linux', r: /(Linux|X11)/},
        {s: 'iOS', r: /(iPhone|iPad|iPod)/},
        {s: 'Mac OS X', r: /Mac OS X/},
        {s: 'Mac OS', r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/},
        {s: 'QNX', r: /QNX/},
        {s: 'UNIX', r: /UNIX/},
        {s: 'BeOS', r: /BeOS/},
        {s: 'OS/2', r: /OS\/2/},
        {s: 'Search Bot', r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/}
    ];
    for (const id in clientStrings) {
        if (clientStrings[id].r.test(navigator.userAgent)) {
            os = clientStrings[id].s;
            break;
        }
    }

    return os;
}

export function getBrowser() {
    let browser = 'other';
    let version = String(parseFloat(navigator.appVersion));
    let majorVersion = parseInt(navigator.appVersion, 10);
    let nameOffset = 0;
    let verOffset = 0;

    // Opera is special
    if ((verOffset = navigator.userAgent.indexOf('Opera')) !== -1) {
        browser = 'Opera';
        version = navigator.userAgent.substring(verOffset + 6);
        if ((verOffset = navigator.userAgent.indexOf('Version')) !== -1) {
            version = navigator.userAgent.substring(verOffset + 8);
        }
    }

    // Get browser info
    if ((verOffset = navigator.userAgent.indexOf('OPR')) !== -1) {
        browser = 'Opera';
        version = navigator.userAgent.substring(verOffset + 4);
    } else if ((verOffset = navigator.userAgent.indexOf('MSIE')) !== -1) {
        browser = 'Microsoft Internet Explorer';
        version = navigator.userAgent.substring(verOffset + 5);
    } else if ((verOffset = navigator.userAgent.indexOf('Chrome')) !== -1) {
        browser = 'Chrome';
        version = navigator.userAgent.substring(verOffset + 7);
    } else if ((verOffset = navigator.userAgent.indexOf('Safari')) !== -1) {
        browser = 'Safari';
        version = navigator.userAgent.substring(verOffset + 7);
        if ((verOffset = navigator.userAgent.indexOf('Version')) !== -1) {
            version = navigator.userAgent.substring(verOffset + 8);
        }
    } else if ((verOffset = navigator.userAgent.indexOf('Firefox')) !== -1) {
        browser = 'Firefox';
        version = navigator.userAgent.substring(verOffset + 8);
    } else if (navigator.userAgent.indexOf('Trident/') !== -1) {
        browser = 'Microsoft Internet Explorer';
        version = navigator.userAgent.substring(navigator.userAgent.indexOf('rv:') + 3);
    } else if ((nameOffset = navigator.userAgent.lastIndexOf(' ') + 1) < (verOffset = navigator.userAgent.lastIndexOf('/'))) {
        browser = navigator.userAgent.substring(nameOffset, verOffset);
        version = navigator.userAgent.substring(verOffset + 1);
        if (browser.toLowerCase() === browser.toUpperCase()) {
            browser = navigator.appName;
        }
    }

    // Trim the version string
    if (version.indexOf(';') !== -1) {
        version = version.substring(0, version.indexOf(';'));
    }

    if (version.indexOf(' ') !== -1) {
        version = version.substring(0, version.indexOf(' '));
    }

    if (version.indexOf(')') !== -1) {
        version = version.substring(0, version.indexOf(')'));
    }

    majorVersion = parseInt(String(version), 10);
    if (isNaN(majorVersion)) {
        version = String(parseFloat(navigator.appVersion));
        majorVersion = parseInt(navigator.appVersion, 10);
    }

    // Get mobile version
    const mobile = (/Mobile|mini|Fennec|Android|iP(ad|od|hone)/).test(navigator.appVersion);

    return {
        browser,
        version,
        majorVersion,
        mobile
    };
}

export function isDesktopApp() {
    return userAgent.indexOf('Mattermost') !== -1 && userAgent.indexOf('Electron') !== -1;
}

export function isWindowsApp() {
    return isDesktopApp() && userAgent.indexOf('Windows') !== -1;
}

export function isMacApp() {
    return isDesktopApp() && userAgent.indexOf('Macintosh') !== -1;
}
