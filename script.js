 function calculateNewSalary() {
    const currentSalaryInput = document.getElementById("currentSalary");
    const percentageIncreaseInput = document.getElementById("percentageIncrease");
    
    let currentSalary = parseFloat(currentSalaryInput.value);
    let percentageIncrease = parseFloat(percentageIncreaseInput.value);

    const newSalaryResult = document.getElementById("newSalaryResult");
    const monthlySalaryResult = document.getElementById("monthlySalaryResult");
    
    if (!isNaN(currentSalary) && !isNaN(percentageIncrease) && currentSalary >= 0 && percentageIncrease >= 0) {
        let increaseAmount = currentSalary * (percentageIncrease / 100);
        let newSalary = currentSalary + increaseAmount;
        let monthlySalary = newSalary / 12;
        
        const formatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });
        
        newSalaryResult.innerText = "New Annual Salary: " + formatter.format(newSalary);
        monthlySalaryResult.innerText = "Estimated Monthly Salary: " + formatter.format(monthlySalary);
    } else {
        newSalaryResult.innerText = "⚠️ Please enter valid, non-negative numbers.";
        monthlySalaryResult.innerText = "";
    }
}


function calculatePercentageIncrease() {
    const currentSalaryInput2 = document.getElementById("currentSalary2");
    const expectedSalaryInput = document.getElementById("expectedSalary");
    
    let currentSalary = parseFloat(currentSalaryInput2.value);
    let expectedSalary = parseFloat(expectedSalaryInput.value);

    const percentageIncreaseResult = document.getElementById("percentageIncreaseResult");
    const monthlySalaryResult2 = document.getElementById("monthlySalaryResult2");
    
    if (!isNaN(currentSalary) && !isNaN(expectedSalary) && currentSalary > 0 && expectedSalary >= 0) {
        let percentageIncrease = ((expectedSalary - currentSalary) / currentSalary) * 100;
        let monthlySalary = expectedSalary / 12;
        
        const formatter = new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' });
        
        percentageIncreaseResult.innerText = "Percentage Increase: " + percentageIncrease.toFixed(2) + "%";
        monthlySalaryResult2.innerText = "Estimated Monthly Salary: " + formatter.format(monthlySalary);
    } else if (currentSalary <= 0) {
         percentageIncreaseResult.innerText = "⚠️ Current Salary must be greater than zero.";
         monthlySalaryResult2.innerText = "";
    }
    else {
        percentageIncreaseResult.innerText = "⚠️ Please enter valid numbers.";
        monthlySalaryResult2.innerText = "";
    }
}

function clearNewSalaryFields() {
    document.getElementById("currentSalary").value = '';
    document.getElementById("percentageIncrease").value = '';
    document.getElementById("newSalaryResult").innerText = '';
    document.getElementById("monthlySalaryResult").innerText = '';
}


function clearPercentageFields() {
    document.getElementById("currentSalary2").value = '';
    document.getElementById("expectedSalary").value = '';
    document.getElementById("percentageIncreaseResult").innerText = '';
    document.getElementById("monthlySalaryResult2").innerText = '';
}