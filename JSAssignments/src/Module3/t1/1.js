const ul = document.querySelector('#target')
let lists =  "<li> First Item </li>\n"

lists +=  "<li> Second Item </li>\n"
lists +=  "<li> Third Item </li>"

ul.innerHTML = lists;
ul.classList.add("my-list")
