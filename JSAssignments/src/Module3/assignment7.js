import { useEffect } from "react"
import {Helmet} from "react-helmet"
const M3Assignment7 = () => {
    useEffect ( () => {
        const elem = document.querySelector("button")
        elem.addEventListener('click', () => alert('Button clicked'));
     }, [])

    return (
        <>
            <Helmet>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Task 7</title>
            </Helmet>

            <div>Module 3 Assignment 7 </div>
    <h1>Task 7</h1>
    <button>Click me!</button>

        </>

    )
}

export default M3Assignment7;