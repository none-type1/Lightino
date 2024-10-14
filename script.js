// =======================================================================| header
/* ==============================| title */
window.addEventListener("load",function(x){
    /* ==========*/
    $(".charts:nth-of-type(2) div span:nth-child(1)").css({"height": "16px"})
    $(".charts:nth-of-type(2) div span:nth-child(2)").css({"height": "38px"})
    $(".charts:nth-of-type(2) div span:nth-child(3)").css({"height": "50px"})
    $(".charts:nth-of-type(2) div span:nth-child(4)").css({"height": "28px"})
    $(".charts:nth-of-type(2) div span:nth-child(5)").css({"height": "42px"})
    /* ==========*/
    $(".charts:nth-of-type(3) .value").css({"stroke-dashoffset": "250", "transform": "rotate(-130deg)"})
    /* ==========*/
    $(".charts:nth-of-type(4) .value").css({"stroke-dashoffset": "239"})
})
// =======================================================================| main
/* ==============================| item-slider */
document.querySelectorAll(".item-slider").forEach(function(itemSlider) {
    const max = $(`#${itemSlider.id}`).css("width").slice(0,-2) - $(`.item-slider-cover`).css("width").slice(0,-2)
    let cursorX
    let sliderGingTo
    /* ========================| slider */
    let isPressed = false
    itemSlider.addEventListener("mousedown", (x) => {
        isPressed = true
        cursorX = x.clientX - itemSlider.style.transform.slice(10,-8)
    })
    document.addEventListener("mouseup", () => {
        isPressed = false
    })
    itemSlider.addEventListener("mousemove", (x) => {
        if (isPressed) {
            x.preventDefault()
            sliderGingTo = x.clientX  - cursorX
            if (sliderGingTo < 0) {sliderGingTo = 0}
            if (sliderGingTo > max) {sliderGingTo = max}
            itemSlider.style.transform = `translate(${sliderGingTo}px, 0)`
            console.log(itemSlider.style.transform.slice(10,-8))
        }
     })
     /* ========================| botton */
     const pruvBotton = $(`#${itemSlider.id}-break .pruv`)
     const nextBotton = $(`#${itemSlider.id}-break .next`)
     
     const moveAvrage = Number($(`#top-sale > div:first-child`).css("width").slice(0,-2)) + 20
     pruvBotton.click(function(){
        cursorX = Number(itemSlider.style.transform.slice(10,-8))
        sliderGingTo = cursorX - moveAvrage
        if (sliderGingTo < 0) {
            sliderGingTo = 0
            pruvBotton.css({"fill": "#3c3d42"})
        }
        nextBotton.css({"fill": "#ffffff"})
        itemSlider.style.transform = `translate(${sliderGingTo}px, 0)`
        itemSlider.style.transition = `all .3s`
     })
     nextBotton.click(function(x){
        cursorX = Number(itemSlider.style.transform.slice(10,-8))
        sliderGingTo = cursorX + moveAvrage
        if (sliderGingTo > max) {
            sliderGingTo = max
            nextBotton.css({"fill": "#3c3d42"})
        }
        pruvBotton.css({"fill": "#ffffff"})
        itemSlider.style.transform = `translate(${sliderGingTo}px, 0)`
        itemSlider.style.transition = `all .3s`
     })
})