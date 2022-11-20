import { useEffect, useState } from "react";
import { ReactDOM } from "react-dom/client";

const M1Assignment2 = () => {
    const [name, setName] = useState("")
    return (
        <>
            <div>Assignment 2</div>
            <form>
                <label> What's your name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
            </form>
            <div> Hello, {name}</div>
        </>

    )
}

export default M1Assignment2;


