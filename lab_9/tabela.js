// Zadanie 1. Stwórz trzy przyciski, po kliknięciu każdego z nich, zmień kolor tła tylko
// klikniętego przycisku. Jeśli któryś z przycisków już ma zmienione tło, to przy kliknięciu
// innego przycisku jego kolor tła powinien powrócić do pierwotnego stanu, a kolor klikniętego
// przycisku powinien się zmienić.

const btns = document.querySelectorAll("button");

let activation;
for (let i = 0; i < btns.length; i++) {
  const btn = btns[i];
  btn.addEventListener("click", () => {
    if (activation) {
      activation.classList.remove("button");
    }

    btn.classList.add("button");
    activation = btn;
  });
}

// ZADANIE 2 FORMULARZ
const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  if (validForm()) {
    alert("Sukces");
  }
});
// imie
const nameField = document.querySelector("[name='name']");
nameField.addEventListener("input", () => {
  requiredValidation(nameField);
  minLengthValidation(nameField, 2);
});
// nazwisko
const surnameField = document.querySelector("[name='surname']");
surnameField.addEventListener("input", () => {
  requiredValidation(surnameField);
  minLengthValidation(surnameField, 2);
});

//email
const emailField = document.querySelector("[name='email']");
emailField.addEventListener("input", () => {
  requiredValidation(emailField);
  minLengthValidation(emailField, 2);
  emailValidation(emailField);
});

//haslo
const passwordField = document.querySelector("[name='password']");
passwordField.addEventListener("input", () => {
  requiredValidation(passwordField);
});

//płec
const sexFields = document.getElementsByName("sex");

sexFields.forEach((field) => {
  field.addEventListener("change", () => {
    validSexFileds();
  });
});

//numer telefonu
const phoneField = document.querySelector("[name='phone']");
phoneField.addEventListener("input", () => {
  requiredValidation(phoneField);
  minLengthValidation(phoneField, 9);
  maxLengthValidation(phoneField, 9);
});

phoneField.addEventListener("keypress", (event) => {
  var charCode = event.which ? event.which : event.keyCode;
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    event.preventDefault();
  }
  return true;
});
// data urodzin
const birthDateField = document.querySelector("[name='birthDate']");
birthDateField.addEventListener("input", () => {
  requiredValidation(birthDateField);
  validAge();
});
// powtórz haslo
const confirmPasswordField = document.querySelector(
  "[name='confirm-password']"
);
confirmPasswordField.addEventListener("input", () => {
  validConfirmPassword();
});

//kraj
const countyField = document.querySelector("[name='country']");
let provinceField = document.querySelector("[name='province']");
const province = document.querySelector(".province");
const provinceSelect = document.querySelector(".province.select");
countyField.addEventListener("change", () => {
  const result = requiredValidation(countyField);

  if (countyField.value === "Polska") {
    province.hidden = true;
    provinceSelect.hidden = false;
    provinceField = document.querySelector(
      ".province.select [name='province']"
    );

    provinceField.removeEventListener("input", provinceField);
    provinceField.addEventListener("change", () => {
      validProvince();
    });
  } else {
    province.hidden = false;
    provinceSelect.hidden = true;

    provinceField = document.querySelector("[name='province']");

    provinceField.removeEventListener("change", provinceField);
    provinceField.addEventListener("input", () => {
      validProvince();
    });
  }

  provinceField.disabled = result;
});
//adres
const addressField = document.querySelector("[name='address']");
const contactAddressField = document.querySelector("[name='contactAddress']");

function validProvince() {
  const result = requiredValidation(provinceField);
  addressField.disabled = result;
  contactAddressField.disabled = result;
}

addressField.addEventListener("input", () => {
  requiredValidation(addressField);
  minLengthValidation(addressField, 3);
});
contactAddressField.addEventListener("input", () => {
  requiredValidation(contactAddressField);
  minLengthValidation(contactAddressField, 3);
});

// adres kontaktowy
const checkboxField = document.querySelector("[name='hasSameContactAddress']");
const contactAddress = document.querySelector(".contactAddress");
checkboxField.addEventListener("change", () => {
  contactAddress.hidden = checkboxField.checked;
});

function requiredValidation(field) {
  const errorField = document.querySelector(
    `[name='${field.name}'] + span.error`
  );
  if (!field.value || field.value === "") {
    //Zad 2
    //field.setCustomValidity('To pole jest wymagane');
    errorField.innerHTML = "To pole jest wymagane";
    return true;
  } else {
    //Zad 2
    //field.setCustomValidity('');
    errorField.innerHTML = "";
    return false;
  }
}

function minLengthValidation(field, minLength = 0) {
  const errorField = document.querySelector(
    `[name='${field.name}'] + span.error`
  );
  if (field.value.length < minLength) {
    //Zad 2
    //field.setCustomValidity(`To pole musi mieć conajmniej ${minLength} znaków`);
    errorField.innerHTML = `To pole musi mieć conajmniej ${minLength} znaków`;
    return true;
  } else {
    //Zad 2
    //field.setCustomValidity('');
    errorField.innerHTML = "";
    return false;
  }
}

function maxLengthValidation(field, maxLength = 0) {
  const errorField = document.querySelector(
    `[name='${field.name}'] + span.error`
  );
  if (field.value.length > maxLength) {
    //Zad 2
    //field.setCustomValidity(`To pole musi mieć najwyżej ${maxLength} znaków`);
    errorField.innerHTML = `To pole musi mieć najwyżej ${maxLength} znaków`;
    return true;
  } else {
    //Zad 2
    //field.setCustomValidity('');
    errorField.innerHTML = "";
    return false;
  }
}
// do plci
function validSexFileds() {
  let result = false;

  const errorField = document.querySelector("span.sex.error");

  sexFields.forEach((field) => {
    result = field.checked || result;
  });

  errorField.innerHTML = result ? "" : "Prosze wybrać płeć";

  return !result;
}
// do emaila
function emailValidation(field) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const errorField = document.querySelector(
    `[name='${field.name}'] + span.error`
  );
  if (!emailRegex.test(field.value)) {
    errorField.innerHTML = "Proszę podać poprawny adres e-mail.";
    return true;
  } else {
    errorField.innerHTML = "";
    return false;
  }
}
// do hasla
function passwordValidation(field) {
  const passwordRegex =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{}|;':",./<>?])[0-9a-zA-Z!@#$%^&*()_+\-=[\]{}|;':",./<>?]{8,}$/;
  const errorField = document.querySelector(
    `[name='${field.name}'] + span.error`
  );
  if (!passwordRegex.test(field.value)) {
    //Zad 2
    //field.setCustomValidity("Hasło mieć co najmniej 8 znaków i zawierać przynajmniej jedną cyfrę, jedną małą literę i jedną dużą literę.");
    errorField.innerHTML =
      "Hasło mieć co najmniej 8 znaków i zawierać przynajmniej jedną cyfrę, jedną małą literę i jedną dużą literę.";
    return true;
  } else {
    //Zad 2
    //field.setCustomValidity('');
    errorField.innerHTML = "";
    return false;
  }
}
// do 18 lat
function validAge() {
  const today = new Date();
  const date = new Date(birthDateField.value);

  var age = today.getFullYear() - date.getFullYear();
  var m = today.getMonth() - date.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    age--;
  }

  const errorField = document.querySelector('[name="birthDate"] + span.error');

  errorField.innerHTML = age < 18 ? "Musisz być pełnoletni" : "";

  return age < 18;
}
// do potwierdzenia hasla
function validConfirmPassword() {
  const errorField = document.querySelector(
    `[name='confirm-password'] + span.error`
  );
  if (confirmPasswordField.value !== passwordField.value) {
    errorField.innerHTML = "Hasła nie są takie same";
    return true;
  } else {
    errorField.innerHTML = "";
    return false;
  }
}

function validForm() {
  if (
    requiredValidation(nameField) ||
    requiredValidation(surnameField) ||
    requiredValidation(emailField) ||
    requiredValidation(passwordField) ||
    validSexFileds() ||
    requiredValidation(phoneField) ||
    requiredValidation(provinceField) ||
    requiredValidation(birthDateField) ||
    requiredValidation(countyField) ||
    minLengthValidation(nameField, 2) ||
    minLengthValidation(surnameField, 2) ||
    minLengthValidation(emailField, 2) ||
    minLengthValidation(passwordField, 8) ||
    minLengthValidation(nameField, 2) ||
    minLengthValidation(phoneField, 9) ||
    maxLengthValidation(phoneField, 9) ||
    emailValidation(emailField) ||
    passwordValidation(passwordField) ||
    validAge() ||
    validConfirmPassword() ||
    requiredValidation(addressField) ||
    minLengthValidation(addressField, 3) ||
    (!checkboxField.checked &&
      (requiredValidation(contactAddressField) ||
        minLengthValidation(contactAddressField, 3)))
  ) {
    return false;
  }

  return true;
}

// Zadanie 3. Stwórz obiekt reprezentujący samochód zawierający takie dane jak marka, model,
// rok produkcji, kolor, prędkość. Następnie napisz metody zwiększające i zmniejszające
// prędkość samochodu o określoną wartość oraz metodę zwracającą informacje o samochodzie
// w formacie "Marka Model (Rok produkcji), Kolor: kolor, Prędkość: prędkość".
class Car {
  constructor(brand, model, yearofdistribiution, colour, vmax) {
    this.brand = brand;
    this.model = model;
    this.yearofdistribiution = yearofdistribiution;
    this.colour = colour;
    this.vmax = vmax;
  }
  increasespeed() {
    return (this.vmax += 10);
  }
  decreasespeed() {
    return (this.vmax -= 20);
  }
  carinfo() {
    return (
      this.brand +
      " " +
      this.model +
      " " +
      this.yearofdistribiution +
      " " +
      this.colour +
      " " +
      this.vmax +
      " "
    );
  }
  howoldcar() {
    return Date() - this.yearofdistribiution;
  }
}
const car = new Car("Audi", "A2", 2002, "silver", 50);
console.log(car.carinfo());
//
car.increasespeed();
car.increasespeed();

console.log(car.carinfo());
car.decreasespeed();

console.log(car.carinfo());
console.log(car.howoldcar());

// Zadanie 4. Dodaj dwa pola tekstowe oraz przycisk. Dodaj tabelę z dwoma kolumnami Imię i
// Nazwisko. Po kliknięciu przycisku wartość pól tekstowych powinna zostać dodana do tabeli.
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
