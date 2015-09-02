//'use strict';

/*
 * Collection of Responder Objects
 */

//var _      = require( 'lodash' );
//var Rabbus = require( 'rabbus' );
//var util   = require( 'util' );
//var events = require( 'events' );

/*
 * Collection of responders, an EventEmitter Class
 * Primarily used in supporting an array of messageType the responder
 * listens to.
 */

//function ResponderCollection () {
	//this.responders = [];
//}

//util.inherits( ResponderCollection, events.EventEmitter );

/*
 * every add listen to error and ready
 */

//ResponderCollection.prototype.add = function ( responder ) {
	//if ( responder instanceof Rabbus.Responder ) {
		//this.responders.push( responder );
	//} else {
		//this.emit( 'error', new Error( 'Not instance of Rabbus.Responder' ) );
	//}
//};

/*
 * Recommended to start events when all responders are already added
 * in the collection.
 * Todo: in the future if we wanted add responders even after invocation of this function
 * removing of previous event handlers should be made before attaching a new one
 */
//ResponderCollection.prototype.startEvents = function () {
	//// for now just listen to error and ready, add other events to listen in the future if needed
	//var that = this;
	//_.forEach( this.responders, function( responder, index ) {

		//responder.on( 'error', function ( error ) {
			//that.emit( 'error', error );
		//} );

		//responder.on( 'ready', function () {
			//that.emit( 'ready' ); // dont' know what to pass
		//} );

	//} );
//};

//module.exports = ResponderCollection;
