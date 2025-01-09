const display = document.querySelector("#result");
const buttons = document.querySelectorAll(".bb");

for(const eachButton of buttons){
    eachButton.addEventListener("click",function(){
           

        if(eachButton.innerHTML==="AC"){
            display.innerText = ""
        }
        else if(eachButton.innerHTML==="="){
            display.innerText = eval(display.innerText)
        }
        else{
            display.innerText = display.innerText + eachButton.innerHTML 
        }
    })
    
}

