export default function HomePage(props) {
    return (
        <div className="home-page"> 
            <img className="yellow-blob" src="https://raw.githubusercontent.com/UloakuObi/quizzical-trivia/main/blob-yellow.png"/>
            <h1>Quizzical</h1>
            <p>Test your brainpower with quick-fire trivia!</p>
            <button className="start-quiz" onClick={props.fetchQuiz}>Start Quiz</button>
            <img className="blue-blob" src="https://raw.githubusercontent.com/UloakuObi/quizzical-trivia/main/blob-blue.png"/>
        </div>
    )
}



