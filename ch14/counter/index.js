const DEFAULT = 0
let counter = DEFAULT


$(document).ready(function() {
    const btnDecr = $('#btnDecr')
    const btnReset = $('#btnReset')
    const btnIncr = $('#btnIncr')

    btnDecr.on('click', function(){
        onDecreaseClicked();
    })

    btnReset.on('click', function(){
        onResetClicked();
    })

    btnIncr.on('click', function(){
        onIncreaseClicked();
    })
})

function onDecreaseClicked(){
    decreaseCounter()
}

function onResetClicked(){
    resetCounter()
}

function onIncreaseClicked(){
    increaseCounter()
}

function decreaseCounter(){
    counter--
    showCounter()
}

function resetCounter(){
    counter = DEFAULT
    showCounter()
}

function increaseCounter(){
    counter++
    showCounter()
}

function showCounter(){
    const counterDOM = $('#counter')
    counterDOM.text(counter)
    styleCounter(counterDOM)
}

function styleCounter(counterDOM){
    counterDOM.removeClass('green red black')
    if(counter < 0 ){
        counterDOM.addClass('red')
    }else if(counter > 0){
        counterDOM.addClass('green')
    }else{
        counterDOM.addClass('black')
    }
}



