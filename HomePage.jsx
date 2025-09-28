export default function HomePage(props) {
    return (
        <div className="home-page"> 
            <img className="yellow-blob" src="images/blob-yellow.png" alt="decorative background image"/>
            <h1>Quizzical</h1>
            <p>Test your brainpower with quick-fire trivia!</p>
            <button className="start-quiz" onClick={props.fetchQuiz}>Start Quiz</button>
            <img className="blue-blob" src="images/blob-blue.png" alt="decorative background image"/>
        </div>
    )
}



