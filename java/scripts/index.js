"use strict";

const app = document.getElementById("quiz-app");
const quizCard = document.getElementById("quiz-details");
const questionsCard = document.getElementById("questions-card");
const resultCard = document.getElementById("result-card");

let quiz;

function initApp() {
    const questions = [
        {
            title: " What is the size of int variable??",
            options: ["8 bit","32 bit","16 bit","64 bit"]
        }, {
            title: "What is the default value of float variable?",
            options: ["0.0d","0.0f","0","not defined"]
        }, {
            title: "Which of the following is true about String?",
            options: ["String is mutable","String is immutable","String is a data type","None of the above"]
        }, {
            title: " What is Encapsulation?",
            options: ["Encapsulation is a technique to diefine different methods of same type","Encapsulation is the technique of making fields in a class private and providing access to the fields via public methods","Encapsulation is the ability of an object to make many forms","None of the above"]
        }, {
            title: ' Dynamic binding uses which information for binding?',
            options: [
                "type",
                "object",
                "both of above",
                "None of above"
            ]
        }, 
    ];

    quiz = new Quiz(
        "Core Java Quiz",
        `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`,
        70,
        questions);

    // questions.map(q => quiz.addQuestion(q.title, q.options));

    new QuizElementsHelper(app, quizCard, questionsCard, resultCard, quiz);
}

initApp();

