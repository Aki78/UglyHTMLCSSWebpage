import { useEffect, useState } from "react";

const M3Assignment6 = () => {
    const [dices, setDices] = useState([]);

    const rollDice = () => Math.floor(Math.random() * 6 + 1);

    var some_list = []
useEffect (() => {
    let rolls = (list) => {
        const dice = rollDice()
        // console.log(dice)
        // console.log(dices)
        if (dice != 6) {
            return rolls([...list, dice])
        }
        else {
            return ([...list, dice]);

        }
    }

    setDices(rolls(some_list))
    console.log("Final",dices)

},[])




    return (
        <>
            <div>Module 3 Assignment 6 </div>
            <ol> {dices.map((n, i) => <li>{n}</li>)} </ol>

        </>

    )
}

export default M3Assignment6;

