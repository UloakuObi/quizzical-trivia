export default function HomePage(props) {
    return (
        <>
            <h1>Quizzical</h1>
            <p>Some description if needed</p>
            <button onClick={props.fetchQuiz}>Start Quiz</button>
        </>
    )
}