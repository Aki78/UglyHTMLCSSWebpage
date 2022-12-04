import { useEffect, useState } from "react";

const M3Assignment8 = () => {

    useEffect( () => {
document.getElementById('start').addEventListener('click', (e) => {

    const n1= parseInt(document.getElementById('num1').value)
    const n2 = parseInt(document.getElementById('num2').value)
    const dec   = document.getElementById('operation').value

    const result = calculate(n1, n2, dec)

    document.getElementById('result').innerText = `Result: ${result}`

    e.preventDefault()
})
    }, [])
function calculate(n1, n2, dec) {   
    switch (dec){
        case 'add': return n1 + n2
        case 'sub': return n1 - n2
        case 'multi': return n1 * n2
        case 'div': return n1 / n2
        default: return 0
    }
}

    return (
        <>
            <div>Assignment 8 </div>
    <h1>Task 8</h1>
    <input id="num1" type="text" placeholder="enter first integer"/>
    <br/>
    <input id="num2" type="text" placeholder="enter second integer"/>
    <br/>
    <select id="operation">
        <option value="add">addition</option>
        <option value="sub">subtraction</option>
        <option value="multi">multiplication</option>
        <option value="div">division</option>
    </select>
    <br/>
    <button id="start">Calculate</button>
    <p id="result"></p>
            
        </>

    )
}

export default M3Assignment8;


