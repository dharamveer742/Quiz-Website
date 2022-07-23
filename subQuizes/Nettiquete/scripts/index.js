"use strict";

const app = document.getElementById("quiz-app");
const quizCard = document.getElementById("quiz-details");
const questionsCard = document.getElementById("questions-card");
const resultCard = document.getElementById("result-card");

let quiz;

function initApp() {
    const questions = [
        {
            title: "Typing in all capitals in electronic communications means:",
            options: [" this message is very important.","you are shouting.","it's okay to forward this message to others.","nothing special--typing in all caps is normal."]
        }, {
            title: "It is OK to forward or post an email message that you received if",
            options: ["the message is typed in all capitals.","the author of the message has given you permission to forward or post it.","it does not contain any copyrighted material.","the author of the message hasn't marked it as confidential"]
        }, {
            title: "A flame is",
            options: ["an expert programmer.","a post or email message that expresses a strong opinion or criticism.","a person who consistently breaks the rules of Netiquette."," an online chain letter."]
        }, {
            title: "The Golden Rule of Netiquette is",
            options: [" a smiley in every message.","remember the human!","follow the other rules of netiquette","never flame a friend."]
        }, {
            title: 'The phrase "lurk before you leap" means',
            options: [
                "post test messages to several USENET newsgroups before posting a real message",
                "familiarize yourself with a discussion group before actively participating",
                "make sure there isn't a host moderating the chat before you scroll the chat screen",
                "send your post to the moderator via email before posting it to a discussion group."
            ]
        }, 
    ];

    quiz = new Quiz(
        "Nettiquete Quiz",
        `Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.`,
        50,
        questions);

    // questions.map(q => quiz.addQuestion(q.title, q.options));

    new QuizElementsHelper(app, quizCard, questionsCard, resultCard, quiz);
}

initApp();

