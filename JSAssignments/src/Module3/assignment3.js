import { useEffect } from "react"
import './t2/2.css'
import {Helmet} from "react-helmet"
const M3Assignment3 = () => {

    useEffect ( () => {
        const names = ['John', 'Paul', 'Jones'];
        const ul = document.querySelector("#target");
        names.map(e => {
                let elem = document.createElement("li")
                elem.innerText = e
                ul.appendChild(elem)
            })
        
     }, [])

    return (
        <>
            <Helmet>
                <meta charset="UTF-8"/>
                <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <title>Task 3</title>
            </Helmet>
            <div>Module 3 Assignment 3 </div>

            <h1>Task 3</h1>
            <ul id="target"></ul>
        </>

    )
}

export default M3Assignment3;

