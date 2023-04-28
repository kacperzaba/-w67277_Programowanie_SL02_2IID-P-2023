class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    allInformations(){
        return this.title + " " + this.author + "(" + this.year + ")";
    };
}

const Krzyżacy =new Book("Krzyżacy", "Henryk Sienkiewicz", 1900);
console.log(Krzyżacy.allInformations());



class Student{
    constructor(firstName, lastName, album, grades){
        this.firstName = firstName;
        this.lastName = lastName;
        this.album = album;
        this.grades = grades;
    }
    name_and_grades(){
        return this.firstName + " " + this.lastName + " " + this.album + " " + this.grades.reduce((a, b) => a+b)/this.grades.length
    }
}

const krzysztof = new Student("Krzysztof", "Nowak", "w2137", [5, 4, 4])
console.log(krzysztof.name_and_grades());



class Car{
    constructor(brand, model, productionYear, color, speed){
        this.brand = brand;
        this.model = model;
        this.productionYear = productionYear;
        this.color = color;
        this.speed = speed;
    }
    increaseSpeed(){
        return this.speed += 10
    }
    decrease(){
        return this.speed -= 10
    }
    infoCar(){
        return this.brand + " " + this.model + " " + this.productionYear + " " + this.color + " " + this.speed
    }
    carYearsOld(){
        return Date() - this.productionYear
    }
}

const peugeot = new Car("Peugeot", "405", 1994, "navy blue", 60)
peugeot.increaseSpeed()
peugeot.increaseSpeed()
peugeot.increaseSpeed()
console.log(peugeot.infoCar())
peugeot.decrease()
console.log(peugeot.infoCar())
console.log(peugeot.carYearsOld())


