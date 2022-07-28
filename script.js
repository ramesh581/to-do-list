const button = document.querySelector(".btn");
button.addEventListener("click",()=>{
    const text = document.querySelector("#task");

    let newList = document.createElement("li");
    newList.innerHTML=text.value;
    let list = document.querySelector(".list");
    list.appendChild(newList);
    text.value="";

})