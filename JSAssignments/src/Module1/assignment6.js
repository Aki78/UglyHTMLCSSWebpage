import { useEffect, useState } from "react";

const M1Assignment6 = () => {
    const [number, setNumber] = useState("5");
    const [c, setC] = useState("");



    console.log(c)
    useEffect(() => {
        setC(window.confirm(
            "are you sure"
        ))
    }, [])

    console.log(c)
    const handleConfirm = () => {
        console.log("is true:", c)
        if (c) {
            return (
                <div>
                    <input type="number"
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                    />
                    <div> {c.toString} {Math.sqrt(number)}</div>
                </div>
            )
        }
        else {
            return (
                <div> No computations</div>
            )
        }

    }
    return (
        <>
            <div>Assignment6 </div>
            {handleConfirm()}
        </>
    )




}

export default M1Assignment6;


