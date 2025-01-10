const display = document.querySelector("#result");
const buttons = document.querySelectorAll(".bb");
const historyList = document.querySelector("#history-listing")
let historyArray = []
for(const eachButton of buttons){
    eachButton.addEventListener("click",function(){
        if(eachButton.innerHTML==="AC"){
            display.innerText = ""
        }
        else if(eachButton.innerHTML==="="){
            const result = eval(display.innerText)
            historyArray.push(`${display.innerText} = ${result}`)
            showHistory()
            display.innerText = result
        }
        else{
            display.innerText = display.innerText + eachButton.innerHTML 
        }
    })
}

const showHistory = () => {
    historyList.innerHTML = ""
    historyArray.map((eachHistory)=>{
        let listItem = document.createElement("li");
        listItem.innerText = eachHistory
        historyList.appendChild(listItem)
    })
}