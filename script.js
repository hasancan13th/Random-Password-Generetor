const btnEl = document.querySelector(".btn");
const inputEl = document.querySelector(".input");
const copyIconEl = document.querySelector(".copy");
const alerContainerEl = document.querySelector(".alert-container")

btnEl.addEventListener("click", ()=> {
    CreatePassword()
})
copyIconEl.addEventListener("click", ()=>{
    copyPassword()
    alerContainerEl.classList.remove("active");
    setTimeout(()=>{
alerContainerEl.classList.add("active");
    },1000);
})
function CreatePassword(){
    const chars = 
    "0123456789abcdefghijkmmnopqrstuvwxtyz!@#$%&()_?:{}[]ABCDEFGHIJKMNOPQRSTUVWXTYZ";
    const passwordLength = 10;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
       const randomNum = Math.floor(Math.random() * chars.length)
        password += chars.substring(randomNum, randomNum+1);
    }
    inputEl.value = password;
    alerContainerEl.innerText =  password + " Kopyalandı!"
}

function  copyPassword(){
    inputEl.select();
    inputEl.setSelectionRange(0,9999);
    navigator.clipboard.writeText(inputEl.value);
    
}