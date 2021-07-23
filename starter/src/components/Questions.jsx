const questions = [
    {
        questionText: 'Who Invented JavaScript?',
        answerOptions: [
            { answerText: 'Brendan Eich', isCorrect: true },
            { answerText: 'Donald Trump', isCorrect: false },
            { answerText: 'Barack Obama', isCorrect: false },
            { answerText: 'Mocha', isCorrect: false },
        ],
    },
    {
        questionText: 'Syntax of Fat Arrow function : ',
        answerOptions: [
            { answerText: 'function sayHello(){ ()=>{return "Hello"} }', isCorrect: false },
            { answerText: 'def sayHello: return "Hello"', isCorrect: false },
            { answerText: 'string sayHello(){ return "Hello" }', isCorrect: false },
            { answerText: 'sayHello = () => { return "Hello"}', isCorrect: true },
        ],
    },
    {
        questionText: 'Can you access cookies using JavaScript?',
        answerOptions: [
            { answerText: 'Yes', isCorrect: true },
            { answerText: 'No', isCorrect: false },
            { answerText: 'Dont know ', isCorrect: false },
            { answerText: 'You guys can decide', isCorrect: false },
        ],
    },
    {
        questionText: 'Is string a primitive data type in C++?',
        answerOptions: [
            { answerText: 'Yes', isCorrect: false },
            { answerText: 'No', isCorrect: true },
            { answerText: 'Dont know', isCorrect: false },
            { answerText: 'If you dont know the answer please go and study C++ :(', isCorrect: false },
            
        ],
    },
    {
        questionText: 'What is React JS?',
        answerOptions: [
            { answerText: 'Server Side frameWork', isCorrect: false },
            { answerText: 'JavaScript Library for UI', isCorrect: true },
            { answerText: 'None of the above', isCorrect: false },
            { answerText: 'I dont want to answer', isCorrect: false },
            
        ],
    },
    {
        questionText: 'How to create React App?',
        answerOptions: [
            { answerText: 'npm create-react-app app_name', isCorrect: false },
            { answerText: 'npx create-react-app app_name', isCorrect: true },
            { answerText: 'Harry Potter Spell', isCorrect: false },
            { answerText: 'npm i app_name', isCorrect: false },
            
        ],
    },
    {
        questionText: 'How many default exports are possible in a React Component?',
        answerOptions: [
            { answerText: '1', isCorrect: true },
            { answerText: '2', isCorrect: false },
            { answerText: '3', isCorrect: false },
            { answerText: '4', isCorrect: false },
            
        ],
    },
    {
        questionText: 'Have you learnt something from this bootcamp training?',
        answerOptions: [
            { answerText: 'No', isCorrect: false },
            { answerText: 'Yes kind of', isCorrect: true },
            { answerText: 'Maybe', isCorrect: false },
            { answerText: 'I dont know Time will tell', isCorrect: false },
            
        ],
    },
];
export default questions;