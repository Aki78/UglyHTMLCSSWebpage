import { useEffect } from "react"
import {Helmet} from "react-helmet"
const M3Assignment10 = () => {
    useEffect ( () => {
            document.getElementById('source').addEventListener("submit", e => {
            const firstName = document.querySelector(`input[name='firstname']`).value
            const lastName = document.querySelector(`input[name='lastname']`).value
            document.getElementById('target').innerText = `Your name is ${firstName} ${lastName}`
            e.preventDefault()
        });
     }, [])

    return (
        <>
            <Helmet>
    <meta charset="UTF-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Task 10</title>
            </Helmet>

            <div>Module 3 Assignment 10 </div>

    <form id="source">
        <input type="text" name="firstname" placeholder="enter first name"/>
        <br/>
        <input type="text" name="lastname" placeholder="enter last name"/>
        <br/>
        <input text="submit" type="submit"/>
    </form>
    <p id="target"></p>

        </>

    )
}

export default M3Assignment10;