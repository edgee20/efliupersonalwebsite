let payrollList = [];

        function addEmployee() {
            const employeeName = document.getElementById('employeeName').value;
            const daysWorked = parseInt(document.getElementById('daysWorked').value);
            const dailyRate = parseFloat(document.getElementById('dailyRate').value);
            const deductionAmount = parseFloat(document.getElementById('deductionAmount').value);

            const grossPay = daysWorked * dailyRate;
            const netPay = grossPay - deductionAmount;

            const payrollEntry = {
                employeeName,
                daysWorked,
                dailyRate,
                grossPay,
                deductionAmount,
                netPay
            };

            payrollList.push(payrollEntry);
            displayPayroll();
            clearInputFields();
            updateTotals();
        }

        function deleteEmployee() {
            const deleteLine = parseInt(document.getElementById('deleteLine').value);

            if (deleteLine > 0 && deleteLine <= payrollList.length) {
                payrollList.splice(deleteLine - 1, 1);
                displayPayroll();
            } else {
                alert("Invalid line number to delete.");
            }

            clearInputFields();
            updateTotals();
        }

        function displayPayroll() {
            const payrollTableBody = document.getElementById('payrollBody');
            payrollTableBody.innerHTML = '';

            payrollList.forEach((entry, index) => {
                const row = payrollTableBody.insertRow();

                row.insertCell(0).textContent = index + 1;
                row.insertCell(1).textContent = entry.employeeName;
                row.insertCell(2).textContent = entry.daysWorked;
                row.insertCell(3).textContent = entry.dailyRate;
                row.insertCell(4).textContent = entry.grossPay.toFixed(2);
                row.insertCell(5).textContent = entry.deductionAmount.toFixed(2);
                row.insertCell(6).textContent = entry.netPay.toFixed(2);
            });
        }
        function updateTotals() {
            let totalDailyRate = 0;
            let totalGrossPay = 0;
            let totalDeduction = 0;
        

            payrollList.forEach(entry => {
                totalDailyRate += entry.dailyRate;
                totalGrossPay += entry.grossPay;
                totalDeduction += entry.deductionAmount;
            });
        
            document.getElementById("totalDailyRate").textContent = totalDailyRate.toFixed(2);
            document.getElementById("totalGrossPay").textContent = totalGrossPay.toFixed(2);
            document.getElementById("totalDeduction").textContent = totalDeduction.toFixed(2);
        }
        

        function clearInputFields() {
            document.getElementById('employeeName').value = '';
            document.getElementById('daysWorked').value = '';
            document.getElementById('dailyRate').value = '';
            document.getElementById('deductionAmount').value = '';
            document.getElementById('deleteLine').value = '';
        }
        function clearPayroll() {
            document.getElementById('employeeName').value = '';
            document.getElementById('daysWorked').value = '';
            document.getElementById('dailyRate').value = '';
            document.getElementById('deductionAmount').value = '';
            document.getElementById('deleteLine').value = '';
        
            payrollList = [];
        
            displayPayroll();
            updateTotals();
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
