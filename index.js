let win=document.getElementById('winner')
let dice1=document.querySelector('#member1')
let dice2=document.querySelector('#member2')
let dice3=document.querySelector('#member3')
let button=document.querySelector('#roll')
button.addEventListener('click',function(){
    dice1.style.backgroundColor="white"
    dice2.style.backgroundColor="white"
    dice3.style.backgroundColor="white"
    let num1=Math.floor(Math.random()*6)+1
    let num2=Math.floor(Math.random()*6)+1
    let num3=Math.floor(Math.random()*6)+1
    dice1.textContent=num1
    dice2.textContent=num2
    dice3.textContent=num3
    if ((num1>num2) && (num1>num3)){
        win.textContent="Player 1 Won!"
        dice1.style.backgroundColor="green"
        
        if (num2>num3){
            dice2.style.backgroundColor="yellow"
            dice3.style.backgroundColor="red"
        } else if(num3>num2){
            dice3.style.backgroundColor="yellow"
            dice2.style.backgroundColor="red"
        } else{
            dice3.style.backgroundColor="blue"
            dice2.style.backgroundColor="blue"
        }
    }
    
    else if ((num2>num1) && (num2>num3)){
        win.textContent="Player 2 Won!"
        dice2.style.backgroundColor="green"
        if (num1>num3){
            dice1.style.backgroundColor="yellow"
            dice3.style.backgroundColor="red"
        } else if(num3>num1){
            dice3.style.backgroundColor="yellow"
            dice1.style.backgroundColor="red"
        } else{
            dice3.style.backgroundColor="blue"
            dice1.style.backgroundColor="blue"
        }
    }
    
    else if ((num3>num2) && (num3>num1)){
        win.textContent="Player 3 Won!"
        dice3.style.backgroundColor="green"
        if (num2>num1){
            dice2.style.backgroundColor="yellow"
            dice1.style.backgroundColor="red"
            
        } else if(num1>num2){
            dice1.style.backgroundColor="yellow"
            dice2.style.backgroundColor="red"
        } else{
            dice1.style.backgroundColor="blue"
            dice2.style.backgroundColor="blue"
        }
    }
    else if ((num1==num2)&&(num1>num3)){
        win.textContent="Player 1 and 2 won!"
        dice1.style.backgroundColor="green"
        dice2.style.backgroundColor="green"
        dice3.style.backgroundColor="yellow"
    }
    else if ((num2==num3)&&(num2>num1)){
        win.textContent="Player 2 and 3 won!"
        dice2.style.backgroundColor="green"
        dice3.style.backgroundColor="green"
        dice1.style.backgroundColor="yellow"
    }
    else if ((num1==num3)&&(num1>num2)){
        win.textContent="Player 1 and 3 won!"
        dice3.style.backgroundColor="green"
        dice1.style.backgroundColor="green"
        dice2.style.backgroundColor="yellow"
    }
    else if ((num1==num2)&&(num2==num3)){
        win.textContent="Three way tie!"
        dice1.style.backgroundColor="blue"
        dice2.style.backgroundColor="blue"
        dice3.style.backgroundColor="blue"
    }
})