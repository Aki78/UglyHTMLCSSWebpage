import { useEffect, useState } from "react";
import isLeapYear from "leap-year";
import isPrime from "is-prime-number";

const Assignment9 = () => {
    const [num, setNum] = useState("0");
    console.log(isPrime(3))

    return (
        <>
            <div>Assignment9 </div>
            <input type="text" value={num} onChange={(e) => setNum(e.target.value)} />
            <br/>
            {isPrime(parseInt(num)).toString()}
        </>
    )

}

export default Assignment9;


