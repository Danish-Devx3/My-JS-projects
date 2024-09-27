const hEl = document.getElementById("h");
const mEl = document.getElementById("m");
const sEl = document.getElementById("s");

function updatedate(){
    let h = new Date().getHours()
    let m = new Date().getMinutes()
    let s = new Date().getSeconds()
    hEl.innerText = h; 
    mEl.innerText = m;
    sEl.innerText = s;
    setTimeout(()=>{
        updatedate();
    }, 1000)


}
updatedate();