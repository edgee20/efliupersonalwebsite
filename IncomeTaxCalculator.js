function calculateTax() {
    const income = document.getElementById('income').value;

    let tax = 0;

    if (income <= 250000) {
        tax = 0;
    } else if (income <= 400000) {
        tax = 0.2 * (income - 250000);
    } else if (income <= 800000) {
        tax = 30000 + 0.25 * (income - 400000);
    } else if (income <= 2000000) {
        tax = 130000 + 0.3 * (income - 800000);
    } else if (income <= 8000000) {
        tax = 490000 + 0.32 * (income - 2000000);
    } else {
        tax = 2410000 + 0.35 * (income - 8000000);
    }

    document.getElementById('result').innerHTML = `Income Tax: ${tax.toFixed(2)}`;
}

// <!-- Source code by the WPress Doctor-->
document.addEventListener('DOMContentLoaded', function(){
    var script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.onload = function(){
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