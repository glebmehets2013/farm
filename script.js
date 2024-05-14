let tree = document.getElementsByClassName('tree')
let doshka = document.getElementsByClassName('doshka')[0]
let body = document.getElementsByTagName('body')[0]
let flowers = document.getElementsByClassName('flower')

let currentPlant = ''

let squareLeft = 70
let squareTop = 80
let counter = -1

let maxwood = 10

$(".tree").click(function () {
    $(".menu").css('display', 'none')
})

$('.dolar').text(localStorage.getItem('money'))
$('.flower-sum').text(localStorage.getItem('flowers')) || 0


$('.apple-sum').text(localStorage.getItem('apple')) || 0
// 4 || 6
// 13 000 50 000
// 15 000
// micro - 10 site - 4-6
// 44 000 000 000 $
// 20 000$
// 1pdp - 60 UAH


// amount garden for create 
let garden = document.getElementsByClassName('garden')


let wSadj = 40 + 15;
let hSadj = 30 + 15;

for (let i = 0; i < garden.length; i++) {
    let h = garden[i].clientHeight // 400
    let w = garden[i].clientWidth

    let sadjInRow = Math.floor(w / wSadj) // 6
    let sadjInCol= Math.floor(h / hSadj) // 3
    let amount = sadjInRow * sadjInCol
    console.log( amount )
    for (let j = 0; j < amount; j++) {
        let newPlace = document.createElement('div')
        newPlace.classList.add('place')
        garden[i].appendChild(newPlace)
    }


}





$('.flower').hover(
    function(e){
        if($(this).hasClass('flower-hide')){
            let flowerSum = Number($('.flower-sum').text())
            $('.flower-sum').text(flowerSum + 1)
            localStorage.setItem('flowers', Number($('.flower-sum').text()))
            $(this).removeClass('flower-hide')

        } else {

      

        let flowerSum = Number($('.flower-sum').text())
        $('.flower-sum').text(flowerSum + 1)
        localStorage.setItem('flowers', Number($('.flower-sum').text()))
        $(this).addClass('flower-hide')
            el.style.transform = 'scale(0)'

        // $(this).addClass('flower-hide')

        // function showFlower(el) {
        //     // el.classList.add('flower')
        //     // a.css('visibility', 'visible')
        //     // a.css('transform', 'scale(1)')
        //     el.style.visibility = 'visible'
        //     el.style.transform = 'scale(1)'

        // }
        // setTimeout(function () {

        // }, 3000)
        //     setTimeout(showFlower(e.target), 3000)
    }

    }
)

const a = 5
// let name = 'Gleb'
// const birthday = '12.04.2004'
// Ctrl F - find






for (let i = 0; i < tree.length; i++) {
    tree[i].addEventListener('click', function (e) {
        if(counter != 59){
        counter++


       


        if(counter.toString().endsWith('0')){
            squareTop -= 4
            squareLeft = 70
        }

        tree[i].style.opacity = getComputedStyle( tree[i]).opacity - 0.1

        if(getComputedStyle( tree[i]).opacity == 0){
            tree[i].style.visibility = 'hidden'

            setTimeout(function() {
                tree[i].style.opacity = '1'
                tree[i].style.visibility = 'visible'
            }, 5000)


        }


       
    
        let newImg = document.createElement('img')
        newImg.src='img/doshka.png'
        newImg.classList.add('doshka')
    
        newImg.style.transition = '2s'
        newImg.style.display = 'block'
        newImg.style.position = 'absolute'
        newImg.style.left = e.clientX + 'px'
        newImg.style.top = e.clientY + 'px'

        let oldValue = $('.amount').text()
        $('.amount').text(+oldValue+1)
        $('.price').text((+oldValue+1)*2)

        newImg.addEventListener('click', function (e) {
            $(".menu").css('left', e.clientX + 'px')
            $(".menu").css('top', e.clientY + 'px')
    
            $(".menu").css('display', 'flex')
        })

        body.appendChild(newImg)
        setTimeout(()=>{
            squareLeft += 1
            newImg.style.left = squareLeft + '%'
            newImg.style.top = squareTop + '%'
        }, 50)
    } 
    })
}



for (let i = 0; i < flowers.length; i++) {
    flowers[i].addEventListener('click', function (e) {
      
    })
    
}


$('.sell').click(function(){
 
    let newMoney = Number($('.price').text())
    let oldMoney = Number($('.dolar').text())
    $('.dolar').text(oldMoney + newMoney)
    $('.doshka').remove()
    localStorage.setItem('money', Number($('.dolar').text()))
})



setInterval(
    function () {
        let randomApple = Math.round(Math.random()*20)
        $('.apple').eq(randomApple).addClass('activeApple').click(function(){
            $(this).css('display', 'none')
                let appleSum = Number($('.apple-sum').text())
                $('.apple-sum').text(appleSum + 1)
               
                localStorage.setItem('apple', Number($('.apple-sum').text()))
        }
        
        )
    }, 3000
)


// let newImg = document.createElement('img')
// newImg.classList.add('apple')
// newImg

let l=1400
let top1 = 400;

let lDog = 900;
let tDog = 450;



$('.sklad').click(
    function(){
        $('.car').css('left', '1700px')
    }
)

function right(){
    l += 20
    $('.farmer').css('left', l + 'px')
    $('.farmer').css('transform', 'scale(1, 1)')

}
    
function leftDog(){
    lDog -= 20
    $('.dog').css('left', lDog + 'px')
    $('.dog').css('transform', 'scale(-1, 1)')
}

function rightDog(){
    lDog += 20
    $('.dog').css('left', lDog + 'px')
    $('.dog').css('transform', 'scale(1, 1)')
}
    
function left(){
    l -= 20
    $('.farmer').css('left', l + 'px')
    $('.farmer').css('transform', 'scale(-1, 1)')

}



function goDown(){
    top1  += 20
    $('.farmer').css('top', top1 + 'px')
}


function goTop(){
    top1 -= 20
    $('.farmer').css('top', top1 + 'px')
}
document.addEventListener('keydown', (e) => {
    // alert(e.code)
    if(e.code == 'ArrowLeft'){
        left()
    }

    if(e.code == 'ArrowRight'){
        right()
    }
    if(e.code == 'ArrowUp'){
        goTop()
    }

    if(e.code == 'ArrowDown'){
        goDown()
    }

    if(e.code == 'KeyL'){
        leftDog()
     
    }
    if(e.code == 'KeyR'){
        rightDog()
     
    }

    if(e.code == 'KeyB'){
        bottomDog()
     
    }
    if(e.code == 'KeyT'){
        topDog()
     
    }



})

function bottomDog(){
    tDog += 20
    $('.dog').css('top', tDog + 'px')
}

function topDog(){
    tDog -= 20
    $('.dog').css('top', tDog + 'px')
}


$('.element-tomato').click(function () {
    $('.element').css('background', 'skyblue')
    $(this).css('background-color', 'lime')
    currentPlant = 'tomato'
})
$('.element-egplent').click(function () {
    $('.element').css('background', 'skyblue')
    $(this).css('background-color', 'lime')
     currentPlant = 'egplent'
 })

 $('.element-peper').click(function () {
    $('.element').css('background', 'skyblue')
    $(this).css('background-color', 'lime')
     currentPlant = 'peper'
 })
 $('.element-carrot').click(function () {
    $('.element').css('background', 'skyblue')
    $(this).css('background-color', 'lime')
     currentPlant = 'carrot'
 })


$('.place').hover(function () {


    if($(this).hasClass('ready')   && !$(this).hasClass('wait')   ) {
        // alert('money')
        currentPlant = '';
        $('.element').css('background', 'skyblue')
        $(this).css('background-color', '')
        $(this).css('background-image', '')
        var $element = $(this)
        $(this).addClass('wait')
        $(this).removeClass('ready')
        setTimeout(
            function () {
                $element.removeClass('wait')
            }
            , 2000
        )
        $(this).removeClass('vegetable')
        




        let oldMoney = Number($('.dolar').text())
        $('.dolar').text(oldMoney + 10)
        localStorage.setItem('money', Number($('.dolar').text()))


    } else if (!$(this).hasClass('vegetable')) {

        if (currentPlant == 'Carrot') {

            let oldMoney = Number($('.dolar').text())
            $('.dolar').text(oldMoney - 1)
            localStorage.setItem('money', Number($('.dolar').text()))

            $(this).css('background-image', 'url(img/Carot.webp)')
            $(this).addClass('vegetable')
            var $element = $(this)
            setTimeout(function(){
                $element.addClass('ready')
                $element.addClass('ready-Carrot')
            }, 10000
            )
        }



    if (currentPlant == 'tomato') {
        let oldMoney = Number($('.dolar').text())
        $('.dolar').text(oldMoney - 1)
        localStorage.setItem('money', Number($('.dolar').text()))

        $(this).css('background-image', 'url(img/tomato.png)')
        $(this).addClass('vegetable')
        var $element = $(this)
        setTimeout(function(){
            $element.addClass('ready')
            $element.addClass('ready-tomato')
        }, 10000
        )
    }
    if (currentPlant == 'egplent') {

        let oldMoney = Number($('.dolar').text())
        $('.dolar').text(oldMoney - 1)
        localStorage.setItem('money', Number($('.dolar').text()))

        $(this).css('background-image', 'url(img/egplent.png)')
        $(this).addClass('vegetable')
        var $element = $(this)
        setTimeout(function(){
            $element.addClass('ready')
            $element.addClass('ready-egplent')
        }, 10000
        )
    }
    if (currentPlant == 'peper') {
        let oldMoney = Number($('.dolar').text())
        $('.dolar').text(oldMoney - 1)
        localStorage.setItem('money', Number($('.dolar').text()))

        
        $(this).css('background-image', 'url(img/peper.webp)')
        $(this).addClass('vegetable')
        var $element = $(this)
        setTimeout(function(){
            $element.addClass('ready')
            $element.addClass('ready-peper')
        }, 10000
        )
    }
    if (currentPlant == 'carrot') {
        let oldMoney = Number($('.dolar').text())
        $('.dolar').text(oldMoney - 1)
        localStorage.setItem('money', Number($('.dolar').text()))


        $(this).css('background-image', 'url(img/Carrot.webp)')
        $(this).addClass('vegetable')
        var $element = $(this)
        setTimeout(function(){
            $element.addClass('ready')
            $element.addClass('ready-carrot')
        }, 10000
        )
    }

}




    
    $(this).css('background-size', 'cover')
}
)








function stopCar(){
    $('.car').attr('src', './img/car.png')
}

setTimeout(stopCar, 5000)