//heart increasing
let hearts=document.getElementsByClassName("heart-btn")
let heartCount=0;
for(let heart of hearts){
    heart.addEventListener("click",function(){
    heartCount=heartCount+1
    document.getElementById("heart-count").innerText=heartCount;
})
}
// call btn functionality
let history=document.querySelector(".history")
let callBtn=document.getElementsByClassName("call-btn")
for(let btn of callBtn){
    btn.addEventListener("click",function(){
        let coin=document.getElementById("coin").innerText
        let coinCount=parseInt(coin)
        if(coinCount>0){
            coinCount=coinCount-20
            document.getElementById("coin").innerText=coinCount
            let card=this.parentElement;
            let cardName=card.children[1].innerText;
            let phoneNumber=card.children[3].innerText;
            alert(`Calling ${cardName} on ${phoneNumber}...`)
            const data={
                serviceName:cardName,
                number:phoneNumber,
                date:new Date().toLocaleTimeString()
            }

            let div=document.createElement("div")
            div.innerHTML=`
             <div class="flex md:flex-row flex-col justify-between bg-white rounded-xl  p-5 shadow-xs">
                    <div class="dyanamics">
                        <h2 class="text-[#111111] text-xl hind-madurai-bold ">${data.serviceName}</h2>
                        <p class="hind-madurai-regular text-lg text-[#5C5C5C]">${data.number}</p>
                    </div>
                    <h3 class="hind-madurai-regular text-lg text-[#111111]">${data.date}</h3>
                </div>            
            
            `
            history.appendChild(div)
            
        }else{
            alert("You don't have enough coin, At lest 20 coin is need for call.")
        }
    })

}


//clear history  functionality
let clearBtn=document.getElementById("clear-btn")
clearBtn.addEventListener("click",function(){
    history.innerHTML=""
    history.innerText=""
})

//copy btn functionality
let copyCount=parseInt(document.getElementById("copy-nav").innerText)
let copyBtns=document.getElementsByClassName("copy-btn")
for(let copyBtn of copyBtns){
    copyBtn.addEventListener("click",function(){
        let card=this.parentElement
        let number=card.children[3].innerText
        navigator.clipboard.writeText(number);
        copyCount++
        document.getElementById("copy-nav").innerText=copyCount
        alert(`The number copy done:${number}`)
    })
}