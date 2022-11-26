import { useEffect, useState } from "react";

const M3Assignment7 = () => {
    const [dices, setDices] = useState([]);
    const [num, setNum] = useState(5);

    const rollDice = () => Math.floor(Math.random() * 21 + 1);

    let some_list = []

    useEffect(() => {
        let plays = 0
        let rolls = (list, num_plays) => {
            console.log("123", num_plays)
            const dice = rollDice()
            console.log("123", num_plays)
            if (isNaN(num_plays) || num > 1000) return []

            if (num_plays != num) {
                num_plays += 1
                return rolls([...list, dice], num_plays);
            }
            else {
                console.log("HIT")
                return ([...list, dice])
            }
        }

        setDices(rolls(some_list, plays))
        console.log("Final", dices)
        plays = 0

    }, [num])


    return (
        <>
            <div>Module 3 Assignment 7 </div>
            <input type="text"
                value={num}
                onChange={(e) => setNum(e.target.value)}
                autoFocus
            />
            <ol> {dices.map((n) => <li>{n}</li>)} </ol>

        </>

    )
}

export default M3Assignment7;

