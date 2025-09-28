import React from "react"
import HomePage from "./HomePage.jsx"
import he from "he"
import clsx from 'clsx'

export default function App() {

    const [screen, setScreen] = React.useState("home") 
    const [quizData, setQuizData] = React.useState([])

    const score = quizData.filter(question => question.selectedAnswer === question.correct_answer).length

    async function fetchQuiz() {
        setScreen("quiz")

        const res = await fetch("https://opentdb.com/api.php?amount=5&category=9&difficulty=medium&type=multiple")
        const data = await res.json()
        // console.log(JSON.stringify(data, null, 2))

        const formattedData = data.results.map(question => {
            const options = [...question.incorrect_answers]
            const randomIndex = Math.floor(Math.random() * (options.length + 1))
            options.splice(randomIndex, 0, question.correct_answer)

            return {
                question: question.question,
                options,
                correct_answer: question.correct_answer,
                selectedAnswer: null
              }

        })
        
        setQuizData(formattedData)
    }

    // console.log(quizData)
   
    const quizElements = quizData.map((question, index) => {
        const questionIndex = index
        return (
            <div key={index} className="question">
                <h2>{he.decode(question.question)}</h2>
                <div className="quiz-options">
                    {question.options.map((option, index) => (
                    <button key={index} 
                        className={clsx("option-btn", question.selectedAnswer === option ? "selected" : undefined)}
                        onClick={() => handleSelectAnswer(questionIndex, option)}>
                        {he.decode(option)}
                    </button>
                    ))}
                </div>
            </div>
            )
    })

    function handleSelectAnswer(questionIndex, option) {
        setQuizData(prevData => (
            prevData.map((question, index) =>
                (questionIndex===index ? {...question, selectedAnswer:option} : question)
                )))
    }

    function handleShowResults() {
        // setShowResults(!showResults)
        
        setScreen("results")

    }
    
    const resultsElement = quizData.map((question, index) => {
        return (
            <div key={index} className="question">
                <h2>{he.decode(question.question)}</h2>
                <div className="quiz-options"> 
                    {question.options.map((option, index) => (
                    <button key={index} 
                        className={clsx("option-btn",
                            option === question.correct_answer && "green-bg",
                            option === question.selectedAnswer && option !== question.correct_answer && "red-bg",
                            option !== question.correct_answer && "faded"
                            
                        )}>
                        {he.decode(option)}
                    </button>
                    ))}
                </div>
            </div>
            )

    })
    

    return (
        <main>
          {screen === "home" && <HomePage fetchQuiz={fetchQuiz}/>}
          {screen === "quiz" && quizData.length > 0 &&
            <section className="quiz-page">
                {/* <p>Loading quiz…</p> */}
                {quizElements}
                <button className="check-ans" onClick={handleShowResults}>Check answer</button>
            </section>}
          {screen === "results" && 
            <section className="quiz-page">
                {resultsElement}
                <div className="resume-play">
                    <span>You scored {score}/{quizData.length}</span>
                    <button className="play-again" onClick={fetchQuiz}>Play again</button>
                </div>
            </section>}
        </main>
    )
}