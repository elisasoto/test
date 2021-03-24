import { ReactElement } from "react"
import {FormValues}  from '../../constants/types'

import { useForm } from 'react-hook-form'


const Form: React.FunctionComponent<FormValues> =({}:FormValues):ReactElement => {
    //const { register, handleSubmit, errors } = useForm()
    return (
        <>
        <h2>OUR OPEN TRIVIA</h2>

        {/*<form
                className='form'
                onSubmit={handleSubmit((values) => handleSubmitForm(values))}>
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
               {errors.numberofquestions && errors.numberofquestions.type === 'required' ? (
                    <p>Hey! Select a number of questions!</p>
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
               <br />*/}

            </>
    )
}


export default Form