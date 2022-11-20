import { useEffect, useState } from "react";

const N2Assignment6 = () => {
    const [number, setNumber] = useState("");
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
                    <input type="text"
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

export default N2Assignment6;


