import React from "react"
import { data } from "./data.js"
import HomePage from "./HomePage.jsx"
import he from "he"

export default function App() {

    const [startQuiz, setStartQuiz] = React.useState(false)
    const [quizData, setQuizData] = React.useState([])

    async function fetchQuiz() {
        setStartQuiz(!startQuiz)

        const res = await fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")
        const data = await res.json()
        // console.log(JSON.stringify(data, null, 2))

        const formattedData = data.results.map((question, index) => {
            const options = [...question.incorrect_answers]
            const randomIndex = Math.floor(Math.random() * (options + 1))
            options.splice(randomIndex, 0, question.correct_answer)

            return {
                question: question.question,
                options
              }

        })
        
        setQuizData(formattedData)
    }

    // console.log(quizData)
   
    const quizElements = quizData.map((question, index) => {
        return (
            <div key={index} className="question">
                <h2>{he.decode(question.question)}</h2>
                <div className="quiz-options">
                    {question.options.map((option, index) => <span key={index}>{option}</span>)}
                </div>
            </div>
            )
    })



    return (
        <main>
          {startQuiz ? quizElements : <HomePage fetchQuiz={fetchQuiz}/>}
          {startQuiz && <button className="check-ans">Check answer</button>}
        </main>
    )
}