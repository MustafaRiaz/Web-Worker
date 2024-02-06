document.getElementById('changeColorButton').addEventListener('click', function() {
    changeBackgroundColor();
});

document.getElementById('calculateButton').addEventListener('click', function() {
    performCalculation();
});

function changeBackgroundColor() {
    const colors = ['#ffcccc', '#ccffcc', '#ccccff', '#ffffcc', '#ccffff'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}

function performCalculation() {
    const worker = new Worker('worker.js');
    worker.onmessage = function(event) {
        const result = event.data;
        displayResult(result);
    };
}

function displayResult(result) {
    const resultContainer = document.getElementById('result');
    resultContainer.textContent = `Result: ${result}`;
}
