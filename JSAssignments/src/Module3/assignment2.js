import { useEffect, useState } from "react";

const M3Assignment2 = () => {
    const [num, setNum] = useState(5);
    const [names, setNames] = useState(Array(parseInt(num)).fill(""));

    const changeArraySize = (e) => {
        if (e != 0) {
            setNum(e);
            console.log("SETTING")
        } else {setNum(0)}
        setNames(Array(parseInt(e)).fill(""))
        console.log(names)
    }
    const getNames = () => {
        return names.map((n, i) =>
            <input type="text"
                value={names[i]}
                onChange={(e) => handleElement(e.target.value, i)}
            />


        )
    }

    const reverseList = () => {
        let cnames = [...names].sort()
        return cnames.map((e) => <div>{e}</div>)
    }
    const handleElement = (e, i) => {
        const updatedNames = [...names]
        console.log("updated", updatedNames, i)
        updatedNames[i] = e
        setNames(updatedNames)

    }
    const printNum = () => {
        if (parseInt(num) == 0) {
            return ""
        }
        else return num
    }
    return (
        <>
            <div>Module 3 Assignment 2 </div>
            <input type="number"
                value={printNum()}
                onChange={(e) => changeArraySize(e.target.value)}
            />
            {getNames()}
            <ol style={{ display: "flex", flexDirection: "column-reverse" }}> {reverseList()}</ol>

        </>

    )
}

export default M3Assignment2;


