import { useEffect, useState } from "react";
import { ReactDOM } from "react-dom/client";

const N2Assignment2 = () => {
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

export default N2Assignment2;


