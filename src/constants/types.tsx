type AsycError = {
    success: false
}

type CategoryList = {
    id: string;
    name: string;
}

type CategoriesType = {
    success: Boolean
    category: string[]
}

enum Categories {
    HISTORY = '9',
    GEOGRAPHY = '10',
}

enum Difficulties {
    EASY = 'easy',
}

type QuizForm = {
    questions:number;
    difficulty:Difficulties;
    category:Categories;
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



type FormValues = {
    category: string, 
    difficulty: string, 
    numberofquestions: string,
    
}

interface QuizProps {
    questions: any[];
}

export type {
    Answers,
    AsycError,
    QuizProps,
    FormValues,
    CategoryList,
    Questions,
    CategoriesType
}