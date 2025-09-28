import yellowBlob from "./images/blob-yellow.png"
import blueBlob from "./images/blob-blue.png"

export default function HomePage(props) {
    return (
        <div className="home-page"> 
            <img className="yellow-blob" src={yellowBlob} alt="decorative background image"/>
            <h1>Quizzical</h1>
            <p>Test your brainpower with quick-fire trivia!</p>
            <button className="start-quiz" onClick={props.fetchQuiz}>Start Quiz</button>
            <img className="blue-blob" src={blueBlob} alt="decorative background image"/>
        </div>
    )
}



