const questions = [
    "what is your name?",
    "what would you rather be doing?",
    "what is your preferred programing language?"
];

const ask = (i = 0) => {
    process.stdout.write(`\n\n\n ${questions[i]}`);
    process.stdout.write(` > `);
};

ask();

const answers = [];
process.stdin.on("data", data => {
    answers.push(data.toString().trim());

    if (answers.length < questions.length){
        ask(answers.length);
    } else {
        process.exit();
    }
});

process.on("exit", () => {
    const [name, activity, lang] = answers;
    console.log(`

    Thank you for your answers.

    GO ${activity} ${name} you can write ${lang} code later!!!
    
    
    
    
    `);
});