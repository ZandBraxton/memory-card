export default function ScoreBoard({score, highscore}) {
    return (
        <div className="score-board">
            <p>Score: {score}</p>
            <p>Highscore: {highscore}</p>
        </div>
    )
}