import ScoreBoard from "./scoreboard"
export default function Header({score, highscore}) {
    return(
        <header>
            <h1 className='title'>Memory Game</h1>
            <ScoreBoard score={score} highscore={highscore}></ScoreBoard>
        </header>
    )
}