//heart increasing
let hearts=document.getElementsByClassName("child")
let heartCount=0;
for(let heart of hearts){
    heart.addEventListener("click",function(){
    heartCount=heartCount+1
    document.getElementById("heart-count").innerText=heartCount;
})
}
// call btn functionality
let callBtn=document.getElementsByClassName("call-btn")
for(let btn of callBtn){
    btn.addEventListener("click",function(){
        let card=this.parentElement;
        let cardName=card.children[1].innerText;
        let phoneNumber=card.children[3].innerText;
        alert(`Calling ${cardName} on ${phoneNumber}`)
    })
}

