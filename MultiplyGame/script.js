const input = document.getElementById("input");
const button = document.getElementById("button");
const qus = document.getElementById("qustion");
const score = document.querySelector(".score");
const num1 = Math. ceil(Math. random() * 10);
const num2 = Math. ceil(Math. random() * 10);

let scr=JSON.parse(localStorage.getItem("scr"));

if(!scr){
    scr = 0;
}

score.innerText=`Score:${scr}`
qus.innerText=`What is ${num1} multiply by ${num2} ?`

const correctAns = num1 * num2 ;

button.addEventListener("click", ()=> {
    const userAns = +input.value
    if(userAns==correctAns){
        scr++
        updateLocalStorage()
    }else{
        scr--
        updateLocalStorage()
    }

    location.reload(true)
    
})


function updateLocalStorage(){
    localStorage.setItem("scr", JSON.stringify(scr))
}