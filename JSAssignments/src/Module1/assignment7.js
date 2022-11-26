import { useEffect, useState } from "react";

const M1Assignment7 = () => {
    const [rolls, setRolls] = useState("3");
    const [dices, setDices] = useState("4");


    const handleRoll = () => {
        let randomDices = Array.from({ length: rolls }, () => Array.from({ length: parseInt(dices) }, () => 1 + Math.floor(Math.random() * parseInt(6))))
            ;

        console.log(randomDices)

        return (
            randomDices.map((d) =>
                <div>{d.reduce((p, a) => p + a, 0)}</div>
            )
         )
            

}

return (
    <>
        <div>Assignment7 </div>
        <input type="number" value={rolls} onChange={(e) => setRolls(e.target.value)} />
        <input type="number" value={dices} onChange={(e) => setDices(e.target.value)} />
        {handleRoll()}
    </>
)




}

export default M1Assignment7;


