document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  var sisi = parseFloat(document.getElementById("sisi").value);
  var keliling = 4 * sisi;

  document.getElementById("hasil").innerHTML = "Keliling: " + keliling;
});

document.getElementById("reset").addEventListener("click", function () {
  document.getElementById("sisi").value = "";
  document.getElementById("hasil").innerHTML = "";
});
