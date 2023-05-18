// zad 1
// function factorial(n) {
//     let result = 1;
//     for (let i = 2; i <=  n; i++) {
//         result *= i;
//     }
//     return result
// }
// console.log(factorial(5))

// zad 2
const btns = document.querySelectorAll("button");

let activeBtn;

for (let i = 0; i < btns.length; i++) {
  const btn = btns[i];
  btn.addEventListener("click", () => {
    if (activeBtn) {
      activeBtn.classList.remove("button");
    }
    btn.classList.add("button");
    activeBtn = btn;
  });
}

// zad 3
// const item = document.querySelector("p")
// if(item.style.display == 'none') {
//     item.style.display = 'block';
// }
//     else {
//         item.style.display = 'none'
//     }
// console.log(item);
function toggleVisibility() {
  var element = document.getElementById("myElement");
  if (element.style.display === "none") {
    element.style.display = "block";
  } else {
    element.style.display = "none";
  }
}

// zad 4
function addToList() {
  var input = document.getElementById("textInput");
  var value = input.value;

  if (value.trim() !== "") {
    var listItem = document.createElement("li");
    listItem.textContent = value;

    var list = document.getElementById("myList");
    list.appendChild(listItem);

    input.value = "";
  }
}

// Zad 5
function dodajDoTabeli() {
  var imie = document.getElementById("imie").value;
  var nazwisko = document.getElementById("nazwisko").value;
  var tabela = document.getElementById("tabela");
  var nowyWiersz = tabela.insertRow();
  var komorkaImie = nowyWiersz.insertCell();
  var komorkaNazwisko = nowyWiersz.insertCell();
  komorkaImie.innerHTML = imie;
  komorkaNazwisko.innerHTML = nazwisko;
  console.log(imie);
  console.log(nazwisko);
}
