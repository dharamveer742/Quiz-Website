"use strict";

const app = document.getElementById("quiz-app");
const quizCard = document.getElementById("quiz-details");
const questionsCard = document.getElementById("questions-card");
const resultCard = document.getElementById("result-card");

let quiz;

function initApp() {
    const questions = [
        {
            title: "In which of the following, a person is constantly followed/chased by another person or group of several peoples?",
            options: ["Phishing","Stalking","Bulling","Identity theft"]
        }, {
            title: "Which of the following is considered as the unsolicited commercial email?",
            options: ["Virus","Spam","Malware","All of the above"]
        }, {
            title: "Which of the following refers to the violation of the principle if a computer is no more accessible?",
            options: ["Access control","Availability","Confidentiality","All of the above"]
        }, {
            title: "Which one of the following refers to the technique used for verifying the integrity of the message? ",
            options: ["Digital signature","Message Digest","Protocol","Decryption algorithm"]
        }, {
            title: ' Which one of the following usually used in the process of Wi-Fi-hacking? ',
            options: [
                "Wireshark",
                "Aircrack-ng",
                "Norton",
                "All of the above"
            ]
        }, 
    ];

    quiz = new Quiz(
        "Cyber Safety Quiz",
        `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`,
        50,
        questions);

    // questions.map(q => quiz.addQuestion(q.title, q.options));

    new QuizElementsHelper(app, quizCard, questionsCard, resultCard, quiz);
}

initApp();

