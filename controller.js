'use strict';

function Controller (options) {
	var that = this;
	that.model = options.model;
	that.elementId = options.elementId;
	that.render = options.render;
	that.clickHandlers = options.clickHandlers;
	
	document.getElementById(that.elementId).innerHTML = that.render();

	that.isChanged = function() {
		that.model.takeExam();
		var interval = setInterval(function(){
			if (that.model.changed === true) {				
				that.render();
				that.model.changed = false;								
			}							
		}, 100);

	};	
	
	for (var properties in that.clickHandlers) {
		var el = document.querySelector(properties);
		
		el.onclick = function(){			
			var nameProperty = that.clickHandlers[properties];
			that[nameProperty] = options[nameProperty];
			that[nameProperty]();			
		};
	}	
}