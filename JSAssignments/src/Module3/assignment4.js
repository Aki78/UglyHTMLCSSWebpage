import { useEffect, useState } from "react";

const M3Assignment4 = () => {
    const [numbers, setNumbers] = useState([""])
    const [num, setNum] = useState("");


    const showList = () => {
        if (numbers.indexOf("0") !== -1)
            return numbers.map((e) => <div>{e}</div>)
    }

    const updateInputs = (e, i) => {
        console.log(e)
        if (e.key === 'Enter' && e.target.value != "" && i == numbers.length - 1 && numbers.indexOf("0") == -1) {
            const newInputs = [...numbers, ""]
            setNumbers(newInputs)
        }

    }

    const showNumber = (e, i) => {
        if (i == numbers.length - 1 && !isNaN(+e)) {
            const updatedNumbers = [...numbers]
            updatedNumbers[i] = e
            setNumbers(updatedNumbers)

        }

    }

    const getNumbers = () => {
        return numbers.map((n, i) =>
            <input type="text"
                value={numbers[i]}
                onChange={(e) => showNumber(e.target.value, i)}
                onKeyDown={(e) => updateInputs(e, i)}
autoFocus
            />


        )
    }

    return (
        <>
            <div>Module 3 Assignment 4 </div>
            {getNumbers()}
            <ol > {showList()}</ol>

        </>

    )
}

export default M3Assignment4;

