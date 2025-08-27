var allButtons = document.querySelectorAll('.box .button-container button')
var screenEle = document.querySelector('.box .screen p')
console.log(screenEle)

allButtons.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(btn.innerHTML ==='C'){
            screenEle.innerHTML = '0'
        }
        else if(btn.innerHTML === '='){
            let expr = screenEle.innerHTML
            screenEle.innerHTML = Number.parseFloat(eval(expr)).toFixed(4)
        }
        else if(screenEle.innerHTML === '0'){
            screenEle.textContent = btn.innerHTML
        }else{
            screenEle.innerHTML += btn.innerHTML
        }
    })
})