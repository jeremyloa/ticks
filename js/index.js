$(document).ready(function(){
    const $slider = $('.carousel')
    const $container = $('.carousel-container')
    const $img = $('.carousel-container img')
    const length = $img.length
    var width = $img.width()
    var height = $img.height()
    var total_width = $img.outerWidth();
    const leftArrow = $("#left-arrow")
    const rightArrow = $("#right-arrow")

    $slider.css({
        width: width,
        height: height
    })

    $container.css({
        width: total_width,
    })

    var position = 0
    leftArrow.on("click", ()=>{
        position--
        if (position < 0)
            position = length - 1

        $container.animate({ marginLeft: -position * width }, 'slow');
    })

    rightArrow.on("click", ()=>{
        position++
        if (position >= length)
            position = 0
            
        $container.animate({ marginLeft: -position * width }, 'slow');
    })
})