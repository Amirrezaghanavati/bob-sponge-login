const $ = document;

// Select all Elements of DOM
const username = $.querySelector('.username');
const password = $.querySelector('.password');
const lefteye = $.querySelector('.lefteye')
const righteye = $.querySelector('.righteye')
const bob = $.querySelector('.bob')


//Main eye's position of bob sponge
let leftEyeLeftPos = 110
let leftEyeTopPos = 75
let rightEyeTopPos = 75
let rightEyeLeftPos = 175


// Set focus and blur event to inputs
username.addEventListener('focus', () => {

    let eyePosition = setInterval(() => {
        if (rightEyeTopPos === 85) {
            clearInterval(eyePosition)
        } else {
            lefteye.style.top = leftEyeTopPos + "px"
            lefteye.style.left = leftEyeLeftPos + "px"
            righteye.style.top = rightEyeTopPos + "px"
            righteye.style.left = rightEyeLeftPos + "px"


            leftEyeLeftPos--
            rightEyeTopPos++
            rightEyeLeftPos--
            leftEyeTopPos++
        }

    }, 10)


})


username.addEventListener('blur', () => {

    let eyePosition = setInterval(() => {
        if (rightEyeTopPos === 75) {
            clearInterval(eyePosition)
        } else {
            lefteye.style.top = leftEyeTopPos + "px"
            lefteye.style.left = leftEyeLeftPos + "px"
            righteye.style.top = rightEyeTopPos + "px"
            righteye.style.left = rightEyeLeftPos + "px"


            leftEyeLeftPos++
            rightEyeTopPos--
            rightEyeLeftPos++
            leftEyeTopPos--
        }

    }, 10)
})

password.addEventListener('focus', () => {

    leftEyeLeftPos = 110
    leftEyeTopPos = 75
    rightEyeTopPos = 75
    rightEyeLeftPos = 175

    let eyePosition = setInterval(() => {
        if (leftEyeTopPos === 60) {
            clearInterval(eyePosition);
        } else {

            lefteye.style.top = leftEyeTopPos + "px"
            lefteye.style.left = leftEyeLeftPos + "px"
            righteye.style.top = rightEyeTopPos + "px"
            righteye.style.left = rightEyeLeftPos + "px"


            leftEyeLeftPos++
            rightEyeTopPos--
            rightEyeLeftPos--
            leftEyeTopPos--
        }
    }, 10)

})

password.addEventListener('blur', () => {

    let eyePosition = setInterval(() => {
        if (leftEyeTopPos === 75) {
            clearInterval(eyePosition);
        } else {

            lefteye.style.top = leftEyeTopPos + "px"
            lefteye.style.left = leftEyeLeftPos + "px"
            righteye.style.top = rightEyeTopPos + "px"
            righteye.style.left = rightEyeLeftPos + "px"


            leftEyeLeftPos--
            rightEyeTopPos++
            rightEyeLeftPos++
            leftEyeTopPos++
        }
    }, 10)
})


// Set keyup event on username input
username.addEventListener('keyup', e => {

    if (e.keyCode === 8) {
        leftEyeLeftPos--
        rightEyeLeftPos--
    } else {
        leftEyeLeftPos++
        rightEyeLeftPos++
    }

    if (leftEyeLeftPos > 117) {
        return false;
    }

    if (leftEyeLeftPos < 100) {
        return false;
    }


    lefteye.style.left = leftEyeLeftPos + "px"
    righteye.style.left = rightEyeLeftPos + "px"

})