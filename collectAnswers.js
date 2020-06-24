const readline = require("readline");

const { EventEmitter } = require("events");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*const questions = [
    "what is your name?",
    "where do you live?",
    "what are you going to do with node js?"

];*/
// change const collectAnswers to module.exports
module.exports = (questions, done) => {
    const answers = [];
    const [firstQuestion] = questions;

    const emitter = new EventEmitter();

    const questionAnswered = answer => {
        emitter.emit("answer", answer);
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else {
            emitter.emit("complete", answers);
            done(answers);
        }
    }

    //done(answers);

    rl.question(firstQuestion, questionAnswered);

    return emitter;

};

/*collectAnswers(questions, answers => {
    console.log("Thank you for your answers. \n\n ");
    console.log(answers);
    process.exit();
});*/