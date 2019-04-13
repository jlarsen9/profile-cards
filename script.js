//Link brightness to the slider 

var lightbulb = document.querySelector("#lightbulb")
var input = document.querySelector("#bulbslider")
var output = document.querySelector("output")

input.addEventListener("input", function () {
    output.innerHTML = input.value;
    lightbulb.style.opacity = input.value / input.max
    console.log(input.value)
});

//////////////////////////////////





//Change opacity of lightbulb
//var slider = document.getElementById("slider")
//output.innerHTML = input.value;
//slider.addEventListener("input", sliderChange);

// var onChangeToSlider = function () {
//     console.log(peanut)
// }

// onChangeToSlider.addEventListener("input", sliderChange)




