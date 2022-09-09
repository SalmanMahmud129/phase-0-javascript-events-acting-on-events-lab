// Your code here
const dodger = document.getElementById('dodger')

function moveDodgerLeft(){
    const leftNumbers = dodger.style.left.replace("px", "") //geting px value of where dodger is at currently and removing the px just to have the number
    const left = parseInt(leftNumbers, 10) //changing the value to be the an int so that we can change its value depending on the direction its going

    if(left > 0){ //moving left can only be done if the value is greater than 0 because if you move left at 0 it will go out of bounds
        dodger.style.left = `${left - 1}px`
    }
}

/*document.addEventListener('keydown', function(e){
    if(e.key === "ArrowLeft"){
        moveDodgerLeft()
    }
})
/*this is for adding the ability to listen or check for the keydown event. It checks whether if the keydown was the left arrow key. If it was then 
dodger will move left via the function we made for that
*/

function moveDodgerRight(){
    const rightNumbers = dodger.style.left.replace("px", "")
    const right = parseInt(rightNumbers, 10)

    if(right < 360){
        dodger.style.left = `${right + 1}px`
    }
}

