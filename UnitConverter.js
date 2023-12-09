function convertTemperature() {
    var fahrenheit = document.getElementById('temperature').value;
    var celsius = (fahrenheit - 32) * (5 / 9);
    document.getElementById('result').innerHTML = fahrenheit + " Fahrenheit is equal to " + celsius.toFixed(2) + " Celsius";
  }

  function convertLength() {
    var meters = document.getElementById('length').value;
    var feet = meters * 3.28084;
    document.getElementById('result').innerHTML = meters + " Meters is equal to " + feet.toFixed(2) + " Feet";
  }

  function convertToFahrenheit() {
    var celsius = document.getElementById('temperature').value;
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.getElementById('result').innerHTML = celsius + " Celsius is equal to " + fahrenheit.toFixed(2) + " Fahrenheit";
  }

  function convertToMeters() {
    var feet = document.getElementById('length').value;
    var meters = feet / 3.28084;
    document.getElementById('result').innerHTML = feet + " Feet is equal to " + meters.toFixed(2) + " Meters";
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