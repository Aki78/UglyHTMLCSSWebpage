import { useState } from "react";

const M2Assignment1 = () => {
    const [dog0, setDog0] = useState("Bull");
    const [dog1, setDog1] = useState("Golden");
    const [dog2, setDog2] = useState("Black");
    const [dog3, setDog3] = useState("Brown");
    const [dog4, setDog4] = useState("Pink");
    const [dog5, setDog5] = useState("Yellow");

    const reverseList = () => {
        let some_list = [dog0, dog1, dog2, dog3, dog4, dog5];
        some_list.sort()
        return some_list.map((e) => <div>{e}</div>
        )
    }
    return (
        <>
            <div>Module 2 Assignment 1 </div>
            <input type="text"
                value={dog0}
                onChange={(e) => setDog0(e.target.value)}
            />
            <input type="text"
                value={dog1}
                onChange={(e) => setDog1(e.target.value)}
            />
            <input type="text"
                value={dog2}
                onChange={(e) => setDog2(e.target.value)}
            />
            <input type="text"
                value={dog3}
                onChange={(e) => setDog3(e.target.value)}
            />
            <input type="text"
                value={dog4}
                onChange={(e) => setDog4(e.target.value)}
            />
            <input type="text"
                value={dog5}
                onChange={(e) => setDog5(e.target.value)}
            />

            <ol style={{display: "flex", flexDirection: "column-reverse"}}> {reverseList()}</ol>

        </>

    )
}

export default M2Assignment1;


