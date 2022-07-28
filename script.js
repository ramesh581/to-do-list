const button = document.querySelector(".btn");
button.addEventListener("click",()=>{
    const text = document.querySelector("#task");

    let newList = document.createElement("li");
    let del = document.createElement("button");
    let text1 = document.createTextNode("done");
    del.appendChild(text1);
    newList.innerHTML=text.value;
    let list = document.querySelector(".list");
    list.append(newList,del);
    text.value="";

});

