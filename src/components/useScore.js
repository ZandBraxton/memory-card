import { useState } from "react";

export const useScore = () => {
    const [score, setScore] = useState(0)
    const [highscore, setHighscore] = useState(0)

    const updateScore = () => {
        setScore((prevState) => {
            const score = prevState + 1

            if (score > highscore) {
                setHighscore(score)
            }


            return score;
        })
    }

    const resetScore = () => {
        setScore(0)
    }


    return [score, highscore, updateScore, resetScore]
}