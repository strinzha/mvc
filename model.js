'use strict';

function Model (options) {
	this.options = options;
	for (var prop in this.options) {
		this[prop] = options[prop];
	}	
}