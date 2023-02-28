import './less/index.less'

console.log('hello world')
//1- LOAD
window.onload = function (evt) {
    console.log(`event ${evt.type} fired! Ready to go!`)
    const heading = document.querySelector('h1')
    heading.textContent = 'Ready to go!!'
//2- COPY
window.addEventListener('copy', () => {
    navigator.clipboard.readText()
    .then(text => {
        heading.textContent += text
    })
})

//3- CLICK(edited in global.less)
document.body.addEventListener('click', evt => {
    evt.target.classList.toggle('mirror')
})

//4- DBLCLICK
document.body.addEventListener('dblclick', evt => {
    evt.target.outerHTML = ''
})

//5- KEYDOWN
window.addEventListener('keydown', evt => {
    if (evt.key == 6) {
        document.body.innerHTML = '<H1>YOU RAN ORDER 666</H1>'
    }
})

//6- MOUSEMOVE
document.body.addEventListener('mousemove', evt => {
    const { clientX, clientY} = evt
   // console.log(`Mouse is at ${clientX}, ${clientY} `)
})

//7- MOUSEENTER
//8- MOUSELEAVE
const destinations = document.querySelectorAll('.destination')
for (let destination of destinations) {
    destination.addEventListener('mouseenter', evt => {
        destination.style.fontWeight = 'bold'

    })
    destination.addEventListener('mouseleave', evt => {
        setTimeout(() => {
            destination.style.fontWeight = 'initial'
        }, 500)
    })
}










}
