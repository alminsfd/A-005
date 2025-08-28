//heart increasing
let hearts=document.getElementsByClassName("child")
let heartCount=0;
for(let heart of hearts){
    heart.addEventListener("click",function(){
    heartCount=heartCount+1
    document.getElementById("heart-count").innerText=heartCount;
})
}