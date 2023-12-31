function getColor() {
  const ranNum = Math.floor(Math.random() * 16777215);
  const ranCode = "#" + ranNum.toString(16);
  console.log(ranNum, ranCode);
  document.body.style.backgroundColor = ranCode;
  document.getElementById("colorCode").innerText = ranCode;
}

document.getElementById("btn").addEventListener("click", getColor);
