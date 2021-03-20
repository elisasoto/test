import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const categoriesURL = "https://opentdb.com/api_category.php";
let quizURL = "https://opentdb.com/api.php?amount=15";

const difficulty = ["easy", "medium", "hard"];
const type = [
  {
    type: "multiple",
    alias: "Multiple Choice",
  },
  {
    type: "boolean",
    alias: "True / False",
  },
];

function App() {
  const [categoryList, setCategoryList] = useState<any[]>([]);
  const [quizOptions, setQuizOptions] = useState<any>(null);
  const [questions, setQuestions] = useState<any[]>([]);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    fetch(categoriesURL)
      .then((res) => res.json())
      .then((data) => {
        setCategoryList(data.trivia_categories);
      });
  }, []);


  // hay que meter esta funcion en un debounce para que se espere a hacer despliegue antes de hacer el fetch para luego usar los datos
  useEffect(() => {
    fetch(quizURL)
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data.results);
      });
  }, [quizOptions]);

  console.log(questions);

  function handleSubmitForm(values: any) {
    setQuizOptions(values);
  }

  // @team: hay que crear una funcion que obtenga los values de quizOptionz y revise que propiedades tiene, si existen o no para popular la URL final del fetch de las preguntas como abajo se muestra
  // https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple
  console.log(quizOptions);

  return (
    <div className="App">
      <h2>OUR OPEN TRIVIA</h2>
      <form onSubmit={handleSubmit((values) => handleSubmitForm(values))}>
        <label>Categoria</label>
        <select name="category" ref={register({ required: true })}>
          <option value="">Any</option>
          {categoryList.map((category, i) => (
            <option key={category.id} value={category.id} placeholder="a">
              {category.name}
            </option>
          ))}
        </select>
        <br />
        <label>Dificultad</label>
        <select name="difficulty" ref={register({ required: true })}>
          <option value="">Any</option>
          {difficulty.map((item, i) => (
            <option key={i} value={item} placeholder="a">
              {item}
            </option>
          ))}
        </select>
        <br />
        <label>Tipo</label>
        <select name="type" ref={register({ required: true })}>
          <option value="">Any</option>
          {type.map((type, i) => (
            <option key={i} value={type.type} placeholder="a">
              {type.alias}
            </option>
          ))}
        </select>
        <br />
        <button type="submit" id="submitBtn">
          Create Quiz 🚀
        </button>
      </form>

      <div className='trivia'>
        <div>
        Q1. {questions[0].question}
        </div>
        <div>
          <label className='correct'>{questions[0].correct_answer}</label>
          {questions[0].incorrect_answers.map((answer:any, i:any)=>(
            <label key={i}>{answer}</label>
          ))}
        </div>

      </div>
    </div>
  );
}

export default App;
