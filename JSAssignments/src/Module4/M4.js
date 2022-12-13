import { useEffect, useState } from "react";
import {Helmet} from "react-helmet"
import "./module4.css"

const M4 = () => {
const getTVMaze = async (input) => {
    let json
    try {
        const response = await fetch("https://api.tvmaze.com/search/shows?q="+input)
        json = await response.json()
    }
    catch (e) {console.log(e.message)}
    return json
}
const step4 = async (e) => {
    console.log("starting 4")
    e.preventDefault()
    const check = document.getElementById("container")
    if(check!=null) {check.remove()}

    const word = document.getElementById("search-box").value
    const api = await getTVMaze(word)
    const container = document.createElement("div")
    container.id = "container"

     api.map((val, index) => {
        const mydiv = document.createElement("h3")
        const article = document.createElement("article")
        const mygenre = document.createElement("p")

        mygenre.classList.add("genre")
        mygenre.innerText = "genre: "
        article.classList.add("card")

        if(api[index].show.genres.length==0) {mygenre.innerText+="noname"}
        else if(api[index].show.genres.length==1) {mygenre.innerText+=api[index].show.genres}
        else{
            mygenre.innerText+=api[index].show.genres[0]
            api[index].show.genres.map( (val, index2) => {
                mygenre.innerText+=` | ${api[index].show.genres[index2]}`
            })
        }

        const img = document.createElement("img")
        const a = document.createElement("a")
        const desc = document.createElement("div")

        desc.classList.add("summary")

        mydiv.innerText = api[index].show.name

        a.target = "_blank"
        a.href = api[index].show.url
        a.innerText = "TV Maze"


        if(api[index].show.image==null) {img.src = "https://via.placeholder.com/100x200?text=No+image"}
        else{img.src = api[index].show.image.medium}

        img.alt = "image"

        desc.innerHTML = api[index].show.summar

        article.appendChild(img)
        article.appendChild(mygenre)
        article.appendChild(a)
        article.appendChild(desc)
        article.appendChild(mydiv)

        container.appendChild(article)
    })
    document.body.appendChild(container)
}

const mainFunc = async (e) => {
    console.log("main")
    e.preventDefault()

    const check = document.getElementById("container")
    if(check!=null) {check.remove()}

    const word = document.getElementById("search_box").value
    const api = await getTVMaze(word)
    console.log(api)
    console.log("main2")

    const container = document.createElement("div")
    container.id = "container"

    api.map( (val, index) => {
        const mydiv = document.createElement("h3")
        const img = document.createElement("img")
        const a = document.createElement("a")
        const desc = document.createElement("div")
        const article = document.createElement("article")
        const mygenre = document.createElement("p")

        desc.classList.add("summary")

        mydiv.innerText = api[index].show.name

        a.target = "_blank"
        a.innerText = "TVMaze"

        if(api[index].show.image==null) {img.src = "https://via.placeholder.com/200x300"}
        else{img.src = api[index].show.image.medium}

        img.alt = "image"

        mygenre.classList.add("genre")
        article.classList.add("card")
        mygenre.innerText = "genre: "

        if(api[index].show.genres.length==0) {mygenre.innerText+="noname"}
        else if(api[index].show.genres.length==1) {mygenre.innerText+=api[index].show.genres}
        else{
            mygenre.innerText+=api[index].show.genres[0]
            api[index].show.genres.map( (val, index2) => {mygenre.innerText+=`/${api[index].show.genres[index2]}`}
            )
        }
        desc.innerHTML = api[index].show.summary

        article.appendChild(a)
        article.appendChild(desc)
        article.appendChild(img)
        article.appendChild(mydiv)
        article.appendChild(mygenre)
        container.appendChild(article)
        step5(a, api, index)

    })
    document.body.appendChild(container)
}

const step5 = (a, api, index) => {
        const check = document.getElementById("dialog")
        if(check!=null) {check.remove()}
        const dialog = document.createElement("dialog")
        const span = document.createElement("span")
        const myiframe = document.createElement("iframe")

        dialog.appendChild(span)

        a.addEventListener("click",(e) => {
            e.preventDefault()

            myiframe.width = "1000px"
            myiframe.height = "1000px"

            myiframe.src = api[index].show.url
            myiframe.title = "shows"

            dialog.appendChild(myiframe)
            document.body.appendChild(dialog)
            dialog.showModal()
        })

        span.addEventListener("click",(e) => {
            e.preventDefault()

            myiframe.removeAttribute("src")
            myiframe.removeAttribute("title")
            dialog.removeChild(myiframe)
            dialog.close()
            document.body.removeChild(dialog)
        })

}
    useEffect( () => {
        document.getElementById("searchButton").addEventListener("click",async e => mainFunc(e))
        document.getElementById("searchButton").addEventListener("click",async e => step4(e))
        console.log("starting")
    }, [])
    return (
        <>
    <Helmet>
        <meta charset="UTF-8"/>
        <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>VT Shows</title>
    </Helmet>

    <div class="search_bar">
        <input id="search_box" type="text"/>
        <button id="searchButton">search TV show</button>
    </div>
        </>
    )
}

export default M4;
