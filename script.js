const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')

let currentActive = 1

next.addEventListener('click', () => {
    currentActive++

    if (currentActive > circles.length) {
        currentActive = circles.length
    }
    
    update()
})

prev.addEventListener('click', () => {
    currentActive--

    if (currentActive < 1) {
        currentActive = 1
    }
        update()
})

function update(){
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })

    const actives = document.querySelectorAll('.active')

    progress.style.width = ((actives.length -1) / (circles.length -1)) * 100 + '%'

    if(currentActive === 1){
        // if current active is 1 the previous button is disabled
        prev.disabled = true
    } else if(currentActive === circles.length){
        // if current active is 4(the number of circles) the next button is disabled
        next.disabled = true
    } else{
        // any other condition the buttons are both active
        prev.disabled = false
        next.disabled = false
    }
}