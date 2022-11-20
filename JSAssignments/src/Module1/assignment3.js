import { useState } from "react";

const Assignment3 = () => {
    const [valA, setValA] = useState("")
    const [valB, setValB] = useState("")
    const [valC, setValC] = useState("")
    return (
        <>
            <div>Assignment 3</div>
            <input type="text" value={valA} onChange={(e) => setValA(e.target.value)} />
            <input type="text" value={valB} onChange={(e) => setValB(e.target.value)} />
            <input type="text" value={valC} onChange={(e) => setValC(e.target.value)} />
            <div> sum : {parseInt(valA) + parseInt(valB) + parseInt(valC)}</div>
            <div> product: {parseInt(valA) * parseInt(valB) * parseInt(valC)}</div>
            <div> average: {(parseInt(valA) + parseInt(valB) + parseInt(valC))/3}</div>
        </>

    )
}

export default Assignment3;


