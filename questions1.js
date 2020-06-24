/*const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});*/
const collectAnswers = require("./lib/collectAnswers");

const questions = [
    "what is your name?",
    "where do you live?",
    "what are you going to do with node js?"

];

/*const collectAnswers = (questions, done) => {
    const answers = [];
    const [firstQuestion] = questions;

    const questionAnswered = answer => {
        answers.push(answer);
        if (answers.length < questions.length) {
            rl.question(questions[answers.length], questionAnswered);
        } else {
            done(answers);
        }
    }

    //done(answers);

    rl.question(firstQuestion, questionAnswered);

};*/

const answerEvents = collectAnswers(questions, answers => {
    console.log("Thank you for your answers. \n\n ");
    console.log(answers);
    process.exit();
});

answerEvents.on("answer", answer => console.log(`question answerd: ${answer}`));

answerEvents.on("complete", answers => {
    console.log("Thank you for your answers. \n\n ");
    console.log(answers);
});

answerEvents.on("complete", () => process.exit());