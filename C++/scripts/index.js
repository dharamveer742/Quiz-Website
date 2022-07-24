"use strict";

const app = document.getElementById("quiz-app");
const quizCard = document.getElementById("quiz-details");
const questionsCard = document.getElementById("questions-card");
const resultCard = document.getElementById("result-card");

let quiz;

function initApp() {
    const questions = [
        {
            title: "What is the function all c++ program must contain ?",
            options: ["system()","main()","program()","start()"]
        }, {
            title: "What punctuation is used to signal the beginning and ending of code blocks",
            options: ["(and)","{}","BEgin and END","->and<-"]
        }, {
            title: "... point variables store decimal numbers 3.5,-5,123,4.0,etc",
            options: ["Integer","Float","Character","String"]
        }, {
            title: "The process of creating a new variable without value",
            options: ["naming","declaration","instantiation","assigning"]
            
        }, {
            title: 'Which of the following is a correct commment',
            options: ["{ comment }","/* comment */","** comment **","*/ comment /*"]
                
           
        }, {
            title: 'Which command moves the text shown text to next line ?',
            options: [
                "/\r/",
                "/\n/",
                "/\s/",
                "'/\t/'"
            ]
        }, {
            title: 'Which data type is used to create a variable that should store text',
            options: [
                'Txt',
                'string',
                'myString',
                'String'
            ]
        },
    ];

    quiz = new Quiz(
        "Basic C++ Quiz",
        `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`,
        70,
        questions);

    // questions.map(q => quiz.addQuestion(q.title, q.options));

    new QuizElementsHelper(app, quizCard, questionsCard, resultCard, quiz);
}

initApp();




