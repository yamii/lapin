'use strict';

const expect    = require( 'chai' ).expect;
const sinon     = require( 'sinon' );
const Publisher = require( process.cwd() + '/lib/pub-sub/publisher' );

describe( 'Publisher', function () {
	let producerStub, Lapin, producerSpy;

	const messageTest = { 'foo' : 'bar' };

	before( function () {
		Lapin = new Publisher( { 'messageType' : 'v1.consumer.verify' } );
	} );

	describe( 'publish', function () {
		before( function () {
			producerSpy  = sinon.spy();
			producerStub = sinon.stub( Lapin, 'publish', producerSpy );

			Lapin.produce( messageTest, sinon.spy() );
		} );

		after( function () {
			producerStub.restore();
		} );

		it( 'should should call Rabbus.publis with callback', function () {
			expect( producerStub.calledWith( messageTest ) ).to.equal( true );
		} );

		it( 'should call producerSpy only once', function () {
			expect( producerSpy.calledOnce ).to.equal( true );
		} );
	} );
} );

