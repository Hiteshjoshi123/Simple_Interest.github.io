var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function () {
  output.innerHTML = this.value;
}

function calculate() {

  var a = document.getElementById("amount").value;
  var b = document.getElementById("myRange").value;
  var c = document.getElementById("year").value;
  var x = (a * b * c) / 100;
  var y = 2021;
  var added = y + parseInt(c);
  if (a <= 0) {
    alert("Please Enter Positive Number");
    document.getElementById("amount").value = "";
    document.getElementById('answer') = "hide";
  } else if (a == "") {
    alert("Please Enter Positive Number");
    document.getElementById('answer') = "hide";
  } {
    document.getElementById('answer').innerText = "If you deposit" + " " + a + " "
      + "at an interest rate of" + " " + b + " " + "you will receive an amount of" + " " + x + " " + "in the year" + " " + added;
    }

}