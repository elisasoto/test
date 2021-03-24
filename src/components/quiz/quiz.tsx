import { ReactElement } from "react"
import { QuizProps } from '../../constants/types'


const Quiz: React.FunctionComponent<QuizProps> =({questions}:QuizProps):ReactElement => {
    
    return (
        <div className='container-trivia'>
        {questions.length > 0 ? (
            <>
                <div className='question'>
                    <label
                        dangerouslySetInnerHTML={{
                            __html: questions[1].question,
                        }}
                    />
                </div>
                <div className='answers'>
                    {questions[1].incorrect_answers.map(
                        (answer: any, i: any) => (
                            <div key={i} className='answer'>
                                <label
                                    dangerouslySetInnerHTML={{
                                        __html: answer,
                                    }}
                                />
                            </div>
                        )
                    )}
                </div>
            </>
        ) : (
            <h4 className='loader'>
                Your trivia will appear here but first, select your options above!
             </h4>
        )}
        </div>
    )
}

export default Quiz