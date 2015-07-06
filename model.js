'use strict';

function Model (options) {
	this.name = options.name;
	this.age = options.age;
	this.year = options.year;
	this.examsTaken = options.examsTaken;
	this.takeExam = options.takeExam;
	this.changed = options.changed;
}