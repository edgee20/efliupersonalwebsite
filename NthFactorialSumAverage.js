function calculateOperations() {
    var n = parseInt(document.getElementById('number').value);

    if (isNaN(n) || n < 0) {
      alert("Please enter a non-negative integer.");
      return;
    }

    var factorial = 1;
    var sum = 0;

    var i = 1;
    while (i <= n) {
      factorial *= i;
      i++;
    }

    i = 1;
    do {
      sum += i;
      i++;
    } while (i <= n);

    var average = 0;
    for (i = 1; i <= n; i++) {
      average += i;
    }
    average /= n;

    // Display results
    document.getElementById('results').innerHTML =
      `<p>${n} factorial is: ${factorial}</p>` +
      `<p>Sum of the first ${n} numbers is: ${sum}</p>` +
      `<p>Average of the first ${n} numbers is: ${average.toFixed(2)}</p>`;
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