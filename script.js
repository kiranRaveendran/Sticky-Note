console.log('tessssss');
let btn=document.querySelector('#btn')
let texArea= document.getElementById("text_area")
let color =document.getElementById("color");
let notes_container=document.getElementById("notes_container")
let empty_content=document.querySelector(".empty_content")
// let notes_container = document.querySelector(".notes_container");

let refresh= document.querySelector("#refresh")

function addNotes(){

    if( texArea.value===""){
        alert("please enter something")
        return;
    }

let div=document.createElement("div")
let p=document.createElement("p")
let cross_btn=document.createElement("button")

div.style.height="130px";
div.style.width="130px";
div.style.display="flex";
div.style.justifyContent= "space-between";
div.style.marginRight = "10px";
div.style.marginTop = "10px";
div.appendChild(p);
div.appendChild(cross_btn)

cross_btn.innerText='X';
cross_btn.style.height="20px"
p.innerText=texArea.value;
p.style.overflow="hidden"
div.style.backgroundColor=color.value;
console.log(div);
notes_container.appendChild(div);
texArea.value=""
empty_content.innerHTML=""

cross_btn.addEventListener("click",function(){
    div.style.display="none"
})
}


btn.addEventListener("click",addNotes)


refresh.addEventListener("click",function(){
    notes_container.style.display="none"
    // notes_container.style.innerText="none"
})