document.getElementById("blondieImage").addEventListener("click", function() {
    var currentScore = parseFloat(document.getElementById("scoreValue").innerText);
    document.getElementById("scoreValue").innerText = (currentScore + 0.1).toFixed(1);
});
