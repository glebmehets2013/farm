

let squareLeft = 70
let squareTop = 80
let counter = -1







let l=0
let top1 = 600;



function right(){
    l += 20
    $('.farmer').css('left', l + 'px')
    $('.farmer').css('transform', 'scale(1, 1)')

}
    

function left(){
    l -= 20
    $('.farmer').css('left', l + 'px')
    $('.farmer').css('transform', 'scale(-1, 1)')

}



function goDown(){
    if(top1<600){
        top1  += 20
        $('.farmer').css('top', top1 + 'px')
    }
    
}


function goTop(){
    if(top1>0){
        top1 -= 20
        $('.farmer').css('top', top1 + 'px')
    }
  








}
document.addEventListener('keydown', (e) => {
    // alert(e.code)
    if(e.code == 'ArrowLeft'){
        if(l>0){
            left()
        }
       
    }

    // N.mehets@gmail.com
    // start678#H
    // glebmehets

    if(e.code == 'ArrowRight'){
        if(l<1350){
            right()
        }
    }
    if(e.code == 'ArrowUp'){
        goTop()
    }

    if(e.code == 'ArrowDown'){
        goDown()
    }






})



let price = {
    pepper: 2,
    eggplant: 3,
    tomato: 4,
}



$('.eggplant').click(function () {
    const amount = prompt('Сколько баклажанов вы хотите купить?')
   if(amount > 1000){
    let answer = confirm('Максимум - 1000. Хотите купить 1000?')
    if(answer == true){
        alert('Вы купили 1000 баклажанов')
        $('.eggplant').css('background', 'rgb(200 160 99)')
        
    } 
    if(answer == false){
        alert("Покупка отменена")
    }

    } else {
        confirm(amount*price.eggplant + ' coins')
        let money = Number(localStorage.getItem('money'))

        localStorage.setItem('money', money - amount*price.eggplant)
    }
$('.eggplant').css('background', 'rgb(200 160 99)')
})





