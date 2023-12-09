let stars = document.getElementById('stars')
let mountainbg = document.getElementById('mountainbg')
let canyon = document.getElementById('canyon')
let text = document.getElementById('text')
let btn = document.getElementById('btn')
let stevenleft = document.getElementById('stevenleft')
let stevenright = document.getElementById('stevenright')

let initialValue = window.scrollY;
stars.style.left = initialValue + 0.25 + 'px';
mountainbg.style.top = initialValue * 0.25 + 'px';
text.style.top = initialValue * 0.25 + 'px';

window.addEventListener('scroll', function(){
    let value = window.scrollY;
    stars.style.left = value + 0.25 +'px'
    mountainbg.style.top = value * 0.25 +'px'
    text.style.top = value * 0.25 + 'px';
})


document.getElementById('snowButton').addEventListener('click', function () {
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function () {
        particlesJS("snow", {
            "particles": {
                "number": {
                    "value": 200,
                    "density": {
                        "enable": true,
                        "value_area": 80000
                    }
                },
                "color": {
                    "value": "#ffffff"
                },
                "opacity": {
                    "value": 0.7,
                    "random": false,
                    "anim": {
                        "enable": false
                    }
                },
                "size": {
                    "value": 5,
                    "random": true,
                    "anim": {
                        "enable": false
                    }
                },
                "line_linked": {
                    "enable": false
                },
                "move": {
                    "enable": true,
                    "speed": 10,
                    "direction": "bottom",
                    "random": true,
                    "straight": false,
                    "out_mode": "out",
                    "bounce": false,
                    "attract": {
                        "enable": true,
                        "rotateX": 300,
                        "rotateY": 1200
                    }
                }
            },
            "interactivity": {
                "events": {
                    "onhover": {
                        "enable": false
                    },
                    "onclick": {
                        "enable": false
                    },
                    "resize": false
                }
            },
            "retina_detect": true
        });
    }
    document.head.append(script);
});