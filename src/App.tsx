import { useState, useEffect, ReactElement } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'

import './styles/app.scss'
import './styles/quiz.scss'
import './styles/form.scss'
import './styles/container.scss'
import './constants/mocked-trivia.js'
import { mockedTrivia } from './constants/mocked-trivia.js'
import { categoriesURL, Difficulty } from './constants/constants'
import { Answers, AsycError, CategoryList, Questions, CategoriesType } from './constants/types'
import { FormValues } from './constants/types'

import Form from './components/form/form'
import Quiz from './components/quiz/quiz'

const App: React.FunctionComponent = (): ReactElement => {
    const [categoryList, setCategoryList] = useState<CategoryList[]>([])
    const [questions, setQuestions] = useState<Questions[]>([])
    const [shuffleAnswers, setshuffleAnswers] = useState<Answers[]>([])

    // This effect calls the array of categories and renders it in a select
    const getCategories = async (
        url: string
    ): Promise<CategoriesType | AsycError> => {
        try {
            const result = await (await fetch(url)).json()
            setCategoryList(result.trivia_categories)
            return { success: true, category: result }
        } catch (error) {
            console.info(error.message)
            return { success: false }
        }
    }

    useEffect(() => {
        getCategories(categoriesURL)
    }, [])

    // form handlers and props
    const { register, handleSubmit, errors } = useForm<FormValues>()
    const onSubmit: SubmitHandler<FormValues> = async ({ numberofquestions, category, difficulty }:FormValues) => {
        const amountQuery:string = `?amount=${numberofquestions}`;
        const categoryQuery:string = category ? `&category=${category}` : '';
        const difficultyQuery:string = difficulty ? `&difficulty=${difficulty}` : '';
        const defaultURL:string = `https://opentdb.com/api.php${amountQuery}${categoryQuery}${difficultyQuery}`
        // API call to set questions
        // const response = await fetch(difficultyURL)
        // const json = await response.json()
        // const apiData = json.results
        // console.log('apiData=>', apiData)
        // setQuestions(apiData)
        setQuestions(mockedTrivia.results)
    }

    // esta funcion randomiza las preguntas
    // como tipearla para poder hacer return de la funcion y poder hacer el map de las respuestas correctamente.

    if (questions.length > 0) {
        const { correct_answer, incorrect_answers } = questions[1]
        const shuffled = [correct_answer, ...incorrect_answers].sort(
            () => Math.random() - 0.5
            )
        // setshuffleAnswers(shuffled)
    }

    return (
        <div className='App'>
            {/*<Form />*/}

            <form className='form' onSubmit={handleSubmit(onSubmit)}>
                <label>Elige una categoría: </label>
                <br />
                <select name='category' ref={register({ required: false })}>
                    <option value=''>Any</option>
                    {categoryList.map((category, i) => (
                        <option
                            key={category.id}
                            value={category.id}
                            placeholder='a'>
                            {category.name}
                        </option>
                    ))}
                </select>
                <br />
                <label>Elige la dificultad de tu trivia</label>
                <br />
                <select name='difficulty' ref={register({ required: false })}>
                    <option value=''>Any</option>
                    {Object.values(Difficulty).map((item, i) => (
                        <option key={i} value={item} placeholder='a'>
                            {item}
                        </option>
                    ))}
                </select>
                <br />
                <label>Elige el número de preguntas de tu Quiz</label>
                <br />
                <input
                    name='numberofquestions'
                    type='number'
                    placeholder='10'
                    min='1'
                    max='15'
                    ref={register({
                        required: true,
                        max: 15,
                        min: 1,
                    })}
                />
                {errors.numberofquestions &&
                errors.numberofquestions.type === 'required' ? (
                    <p>Please select a number of questions!</p>
                ) : null}
                <br />

                <br />

                <br />
                <button
                    type='submit'
                    id='submitBtn'
                    className='button button--hover button--create'>
                    Create Quiz 🚀
                </button>
            </form>
            <br />
            <br />

            <Quiz questions={questions} />
        </div>
    )
}

export default App
