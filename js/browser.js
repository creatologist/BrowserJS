/*	
		=========================================================================================
 		*
		*	BrowserJS
 		*
 		=========================================================================================
		*----------------------------------------------------------------------------------------
 		*
 		*	lets you know which browser you're using as well as if it's a mobile device and touch enabled
 		*
 		=========================================================================================
		*
		*   author          >>  Christopher Miles
		* 
		*   site            >>  http://ChristopherMil.es
		*   github          >>  http://github.com/creatologist
		*
		=========================================================================================
*/

//===============================================================================================
//-----------------------------------------------------------------------------------------------

var Browser = function() {
				
	this.userAgent = navigator.userAgent;
	this.ua = this.userAgent.toLowerCase();
	
	if ( window.orientation != undefined ) this.mobile = true;
	else this.mobile = false;
	
	if ( 'ontouchstart' in window || 'onmsgesturechange' in window ) this.touch = true;
	else this.touch = false;
	
	this.name = null;
	this.version = null;
	
	this.device = {
		name	: null,
		osVersion : null,
		osVersionFull : null
	};
	
	this.ielt9 = false;
	
	if ( this.ua.indexOf( 'iphone' ) != -1 ) {
		this.device.name = 'iphone';
	} else if ( this.ua.indexOf( 'ipad' ) != -1 ) {
		this.device.name = 'ipad';
	} else if ( this.ua.indexOf( 'android' ) != -1 ) {
		this.device.name = 'android';
		if ( this.ua.indexOf( 'version/' ) != -1 ) this.device.osVersion = this.ua.split( 'version/' )[1].split( '.' )[0];
		if ( this.ua.indexOf( 'android ' ) != -1 ) this.device.osVersionFull = this.ua.split( 'android ' )[1].split( ';' )[0];
	}
	
	// iphone + ipad - full os version ie: 7.0.3
	if ( this.device.name && this.device.name == 'iphone' || this.device.name == 'ipad' ) {
		if ( this.ua.indexOf( 'version/' ) != -1 ) this.device.osVersion = this.ua.split( 'version/' )[1].split( '.' )[0];
		if ( this.userAgent.indexOf( ' OS ' ) ) {
			if ( this.userAgent.indexOf( ' like ' ) ) this.device.osVersionFull = this.userAgent.split( ' OS ' )[1].split( ( ' like ' ) )[0].split( '_' ).join( '.' );
		}
	}
	
	this.name = this.ua.match( /android/gi );
	if ( this.name == null ) this.name = this.ua.match( /chrome/gi );
	if ( this.name == null ) this.name = this.ua.match( /safari/gi );
	if ( this.name == null ) this.name = this.ua.match( /firefox/gi );
	if ( this.name == null ) this.name = this.ua.match( /msie/gi );
	
	if ( this.name ) this.name = this.name[0];
	
	switch( this.name ) {
		case 'android':
			if ( this.ua.indexOf( 'version/' ) != -1 ) this.version = this.ua.split( 'version/' )[1].split( '.' )[0];
			if ( this.ua.indexOf( 'android ' ) != -1 ) {
				this.fullVersion = this.ua.split( 'android ' )[1].split( ';' )[0];
			}
			break;
		case 'chrome':
			if ( this.ua.indexOf( 'chrome/' ) != -1 ) this.version = this.ua.split( 'chrome/' )[1].split( '.' )[0];
			break;
		case 'safari':
			if ( this.ua.indexOf( 'crios/' ) != -1 ) {
				// ios Chrome app
				this.name = 'chrome';
				this.version = this.ua.split( 'crios/' )[1].split( '.' )[0];
			} else if ( this.ua.indexOf( 'version/' ) != -1 ) {
				this.version = this.ua.split( 'version/' )[1].split( '.' )[0];
			}
			break;
		case 'firefox':
			if ( this.ua.indexOf( 'firefox/' ) != -1 ) this.version = this.ua.split( 'firefox/' )[1].split( '.' )[0];
			break;
		case 'msie':
			this.name = 'ie';
			if ( this.ua.indexOf( 'msie ' ) != -1 ) this.version = this.ua.split( 'msie ' )[1].split( '.' )[0];
			else if ( this.ua.indexOf( 'msie/' ) != -1 ) this.version = this.ua.split( 'msie/' )[1].split( '.' )[0];
				
				if ( this.version < 9 ) this.ielt9 = true;
				break;
	}
	
	if ( this.device.osVersion ) this.device.osVersion = Number( this.device.osVersion );
	if ( this.version ) this.version = Number( this.version );
	
	delete( this.ua );
	delete( this.userAgent );
		
};