import { useState } from "react";

const M1Assignment3 = () => {
    const [valA, setValA] = useState("1")
    const [valB, setValB] = useState("2")
    const [valC, setValC] = useState("3")
    return (
        <>
            <div>Assignment 3</div>
            <input type="number" value={valA} onChange={(e) => setValA(e.target.value)} />
            <input type="number" value={valB} onChange={(e) => setValB(e.target.value)} />
            <input type="number" value={valC} onChange={(e) => setValC(e.target.value)} />
            <div> sum : {parseInt(valA) + parseInt(valB) + parseInt(valC)}</div>
            <div> product: {parseInt(valA) * parseInt(valB) * parseInt(valC)}</div>
            <div> average: {(parseInt(valA) + parseInt(valB) + parseInt(valC))/3}</div>
        </>

    )
}

export default M1Assignment3;


