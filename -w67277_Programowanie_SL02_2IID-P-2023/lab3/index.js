function zmienTekst() {
        document.getElementById("tekst").innerHTML = "witaj na mojej stronie";
    }


function printAlert() {
    alert('Error')
}

for (let i=0; i<=100; i++) {
    if (i%2==0){ 
    console.log(i)
    }
}

function inputVariables() {
    let variable_a = prompt('Podaj zmienną a: ');
    let variable_b = prompt('Podaj zmienna b: ')
    window.alert(+variable_a + +variable_b)
}

function currentTime() {
    var today = Date();
    documet.write(today)
    setTimeout(currentTime, 1000)
}

