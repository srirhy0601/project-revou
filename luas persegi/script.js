document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  var sisi = parseFloat(document.getElementById("sisi").value);
  var luas = sisi * sisi;

  document.getElementById("hasil").innerHTML = "Luas: " + luas;
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("sisi").value = "";
  document.getElementById("hasil").innerHTML = "";
});
