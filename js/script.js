//=======slider
let slider = document.querySelector('.slider')
let bg = document.querySelector('.bg')
let sliderWidth = slider.offsetWidth
let sliderHeight = slider.offsetHeight
let bgMovment = 40

slider.addEventListener('mousemove' , (e)=>{
  
    movement(e)
})

function movement(e) {
      //console.log(e.offsetX , e.offsetY);
    let mousX = Math.floor(-(e.offsetX - (sliderWidth /2)) *(bgMovment/sliderWidth))
    let mousY = Math.floor(-(e.offsetY - (sliderHeight /2))*(bgMovment/sliderHeight))
    //console.log(mousX , mousY);
    bg.style.transform = `translate(${mousX}px , ${mousY}px)`
    
}

//=============== imeges 

let nextBtn = document.querySelector('.nextBtn')
let prevBtn = document.querySelector('.prevBtn')
let Container = document.querySelector('.imges')

let counter = 0
nextBtn.addEventListener('click' , nextSlide)
prevBtn.addEventListener('click' , prevSlide)

function nextSlide() {
    Container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000 , fill:'forwards'})
    nextBtn.animate([{transform:'rotate(180deg)'} , {transform:'rotate(0deg)'}] , {duration:1000 , fill:'forwards'})
    
    if (counter === 4) {
        counter = 1
    }
    counter++
    Container.style.backgroundImage = `url(img/parket3d-${counter}.jpg)` 
}

function prevSlide() {
    Container.animate([{opacity:'0.1'},{opacity:'1.0'}],{duration:1000 , fill:'forwards'})
    prevBtn.animate([{transform:'rotate(180deg)'} , {transform:'rotate(0deg)'}] , {duration:1000 , fill:'forwards'})
    if (counter === 0) {
        counter = 4
    }
    counter--
    Container.style.backgroundImage = `url(img/parket3d-${counter}.jpg)` 
}