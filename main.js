'use strict';

var Student = new Model({
    name: 'Piotr',
    age: 22,
    year: 5,
    examsTaken: 2,
    takeExam: function(){
        this.examsTaken++;
        this.changed = true;
    }
});

var StudentController = new Controller({
    model: Student,
    elementId: 'student-container',
    render: function(){
        return '<span>' + this.model.name + '</span><button id="student-exams-button">Increase exams taken</button>';
    },
    clickHandlers: {
        '#student-exams-button': 'updateExams'
    },
    updateExams: function(){
        this.model.takeExam();
    }
});


//console.log(StudentController.model.changed);
StudentController.isChanged();
//console.log(Student.examsTaken);