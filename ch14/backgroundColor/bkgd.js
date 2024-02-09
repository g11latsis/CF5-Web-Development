let color  = undefined

/**
 * Listener
 */

$('#btn').on('click', function(){
    onClickMeClicked()
})


/**
 * Controller
 */
function onClickMeClicked() {
    updateBg()
}

/**
 * Model
 */
function updateBg() {
    let color = getBgColor()
    showBgColor(color)
}

function getBgColor() {  
    const colors = ['black', 'red', 'green', 'white', 'blue']
    return colors[Math.floor(Math.random() * colors.length)]
}

/**
 * View
 */
function showBgColor(bgColor){
    $('#hex').text(bgColor)
    $('body').css('background-color',bgColor)
}