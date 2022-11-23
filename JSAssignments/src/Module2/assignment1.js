import { useState } from "react";

const M2Assignment1 = () => {
    const [num0, setNum0] = useState(0);
    const [num1, setNum1] = useState(1);
    const [num2, setNum2] = useState(2);
    const [num3, setNum3] = useState(3);
    const [num4, setNum4] = useState(4);

    const reverseList = () => {
        let some_list = [num0, num1, num2, num3, num4];
        return some_list.map((e) => <div>{e}</div>
        )
    }
    return (
        <>
            <div>Module 2 Assignment 1 </div>
            <input type="number"
                value={num0}
                onChange={(e) => setNum0(e.target.value)}
            />
            <input type="number"
                value={num1}
                onChange={(e) => setNum1(e.target.value)}
            />
            <input type="number"
                value={num2}
                onChange={(e) => setNum2(e.target.value)}
            />
            <input type="number"
                value={num3}
                onChange={(e) => setNum3(e.target.value)}
            />
            <input type="number"
                value={num4}
                onChange={(e) => setNum4(e.target.value)}
            />

            <ul style={{display: "flex", flexDirection: "column-reverse"}}> {reverseList()}</ul>

        </>

    )
}

export default M2Assignment1;


