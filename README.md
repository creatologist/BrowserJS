#BrowserJS
In case you need some more information about your browser. For major browsers/devices only - Chrome/Safari/Firefox/IE - iPad/iPhone/Android

### Example
[http://christophermil.es/BrowserJS](http://christophermil.es/BrowserJS)

### Example Code
```javascript
var browser = new Browser();

browser.onOrientationChange = function( browserRef ) {
	// browserRef == browser
	console.log( browserRef.orientation ); // 0, 90, 180, -90
	console.log( browserRef.layout ); //'portrait' -or- 'landscape'
};
```

### 
```javascript
// Browser event
+ onOrientationChange( browserRef ) {...}

// Browser properties
+ name //String
+ version //Number
+ versionFull //String

+ mobile //Boolean
+ touch	//Boolean
	
+ device //undefined -or- Object
+ device.name //String
+ device.osVersion //Number
+ device.osVersionFull //String

// only available if a mobile device
+ orientation // undefined -or- 0, 90, 180, -90
+ layout // 'portrait' -or- 'landscape'

+ ielt9 (ie version<9) //Boolean
```

### Output Samples
![alt text](https://raw2.github.com/creatologist/BrowserJS/8e16fc7381c077d766d5db1aed64e7a0e84a422f/img/iphone.jpg "iphone")

![alt text](https://raw2.github.com/creatologist/BrowserJS/8e16fc7381c077d766d5db1aed64e7a0e84a422f/img/chrome.jpg "Chrome")
