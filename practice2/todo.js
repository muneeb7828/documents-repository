

const body = document.querySelector("body")

const form = document.querySelector("#form")
const title = document.querySelector("#title")
const discription = document.querySelector("#discription")
const select = document.querySelector("#select")
const submit = document.querySelector(".btn")

const parentdiv = document.createElement("div")
parentdiv.className = "parentdiv"
body.appendChild(parentdiv)

class card {

    constructor(title, discription, status) {
        this.title = title
        this.discription = discription
        this.status = status

    }


}

let array = JSON.parse(localStorage.getItem("data2"))

array==null?array=[]:array=JSON.parse(localStorage.getItem("data2"))


function store() {
    parentdiv.innerHTML = ""
    array.forEach((v, i) => {

        parentdiv.innerHTML += `
    <div id="childdiv">
        <div id="child">
            <div>Title:${v.title}</div>
            <div class="discription">Discription:${v.discription}</div>
            <div>Status:${v.status}<input onclick="checkbox(${i})" type="checkbox" ${v.status == "Completed" ? "checked" : ""}></div>
            <button id="update" onclick="update(${i})">Update</button>
        </div>

        <div id="cross" onclick="dlt(${i})"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" color="#000000"
                    fill="none">
                    <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="currentColor"
                        stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                </svg></span></div>
    </div>

`
    })
}
store()





function dlt(d) {

    array.splice(d, 1)
    store()
    localStorage.setItem("data2", JSON.stringify(array))

}

function checkbox(d) {
    if (array[d].status == "Pending") {
        array[d].status = "Completed"
        store()
        localStorage.setItem("data2", JSON.stringify(array))
    }
    else {
        array[d].status = "Pending"
        store()
        localStorage.setItem("data2", JSON.stringify(array))
    }
}

function empty(){
title.value=""        
discription.value=""        
select.value="Pending"       
}


let up = false
let index = null

function update(d) {
    title.value = array[d].title
    discription.value = array[d].discription
    select.value = array[d].status
    up = true
    index = d
}


submit.addEventListener("click", (e) => {
    e.preventDefault()
    if (up == false) {
        obj = new card(title.value, discription.value, select.value)
        array.push(obj)
        store()
        localStorage.setItem("data2", JSON.stringify(array))
        console.log(array)
        empty()
    }
    else {
        obj = new card(title.value, discription.value, select.value)
        array.splice(index, 1, obj)
        store()
        localStorage.setItem("data2", JSON.stringify(array))
        up = false
        empty()
    }
})





















































