import { useState } from "react";

const N2Assignment10 = () => {
    //    const [rolls, setRolls] = useState("");
    const [dices, setDices] = useState("2");
    const [targetSum, setTargetSum] = useState("7");


    const handleRoll = () => {
        let totalNum = 100000

        if (parseInt(dices) > targetSum) return <div>The percentage is 0%</div>

        if (parseInt(dices)*6 < targetSum) return <div>The percentage is 0%</div>

        let randomDices = Array.from({ length: totalNum }, () => Array.from({ length: parseInt(dices) }, () => 1 + Math.floor(Math.random() * parseInt(6))))
            ;
        let hits = randomDices.map(r => r.reduce((p, a) => p + a, 0)).filter(d => d == parseInt(targetSum))
        console.log(hits.length)
        let hitSize = hits.length


        return (
            <div>The percentage is {(hitSize / totalNum * 100).toFixed(2)}%</div>
        )


    }

    return (
        <>
            <div>Assignment10 </div>
            <div>Target Sum</div>
            <input type="text" value={targetSum} onChange={(e) => setTargetSum(e.target.value)} />

            <div>Number of Dices</div>
            <input type="text" value={dices} onChange={(e) => setDices(e.target.value)} />
            {handleRoll()}
        </>
    )




}

export default N2Assignment10;


