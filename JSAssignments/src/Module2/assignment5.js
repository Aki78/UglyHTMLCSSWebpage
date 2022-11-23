import { useEffect, useState } from "react";

const M2Assignment5 = () => {
    const [numbers, setNumbers] = useState([""])
    const [num, setNum] = useState("");


    const showList = () => {
        if (numbers.indexOf("0") !== -1 || new Set(numbers).size !== numbers.length)
            return numbers.map((e) => <div>{e}</div>)
    }

    const updateInputs = (e, i) => {
        console.log(numbers,e.target.value)
        console.log(numbers.indexOf(e.target.value))
        if (e.key === 'Enter' && e.target.value != "" && i == numbers.length - 1 && numbers.slice(0,-1).indexOf(e.target.value) == -1) {
            console.log("Adding")
            const newInputs = [...numbers, ""]
            setNumbers(newInputs)
        }

    }

    const showNumber = (e, i) => {
        if (i == numbers.length - 1 && !isNaN(+e) ) {
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
            <div>Module 2 Assignment 5 </div>
            {getNumbers()}
            <ol > {showList()}</ol>

        </>

    )
}

export default M2Assignment5;

