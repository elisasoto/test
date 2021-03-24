type CategoryList = {
    id: string;
    name: string;
}

type Questions = {
    category: string, 
    correct_answer: string,
    difficulty: string, 
    incorrect_answers: string[], 
    question: string, 
    type: string,
}

type Answers = {
    correct: string[];
    incorrect: string[];
}

type AsycError = {
    success: false
}

interface QuizProps {
    questions: any[];
}

type FormValues = {
    category: string, 
    difficulty: string, 
    numberofquestions: string,

}


export type {
    Answers,
    AsycError,
    QuizProps,
    FormValues,
    CategoryList,
    Questions,
}