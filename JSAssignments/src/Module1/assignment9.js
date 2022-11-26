import { useEffect, useState } from "react";
import isLeapYear from "leap-year";
import isPrime from "is-prime-number";

const M1Assignment9 = () => {
    const [num, setNum] = useState("5");
    console.log(isPrime(3))

    return (
        <>
            <div>Assignment9 </div>
            <input type="number" value={num} onChange={(e) => setNum(e.target.value)} />
            <br/>
            is prime: {isPrime(parseInt(num)).toString()}
        </>
    )

}

export default M1Assignment9;


