type AsycError = {
    success: false
}

type FormValues = {
    category: string, 
    difficulty: string, 
    number: string,
}

type Questions = {
    category: string, 
    type: string, 
    difficulty: string, 
    question: string,
    correct_answer: string, 
    incorrect_answers: string[], 
}

type CategoryList = {
    success: Boolean,
    category: string[],
} 

interface QuestionsProps  {
    questions: string[];
}

export type {
    AsycError,
    FormValues,
    Questions,
    CategoryList,
    QuestionsProps,
}