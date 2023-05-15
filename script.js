'use strict';

/* è molto utile perchè ti consente di avere un controllo sugli errori che altrimenti non ci sarebbe
 */
/* let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive'); */

/* function logger() {
    console.log('My name is Jonas');
} */

// calling running or invoking the function
/* logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    console.log(apples, oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

//la funzione return ti rende disponibile il valore per operazioni future ma non lo stampa.
fruitProcessor(5, 0);

//possiamo dire che il fruit processor è sostituito da quello che avviene nella funzione grazie a juice ma per poterlo vedere bisogna stiparlo all'interno di una funzione

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log("appleOrangeJuice = " + appleOrangeJuice);
console.log(`apple orange juice = ${appleOrangeJuice}`);
 */

//////////////////////////////////////////////////////////////////////
///LECTURE: Functions

/* function describeCountry(country, population, capitalCity) {
    //console.log(country, population, capitalCity);
    const city = (`${country} has ${population} million people and its capital city is ${capitalCity}.`);
    return city;

}

//describeCountry("Finland", 6, "Helsinki");

const cityF = describeCountry("Finland", 6, "Helsinki");
console.log(cityF);


const cityI = describeCountry("Italy", 50, "Rome");
console.log(cityI);

const cityA = describeCountry("Spain", 46, "Madrid");
console.log(cityA); */

//////////////////////////////////////////////////////////////////////
///LECTURE FUNCTION EXPRESSION VS DECLARATION

//function declaration la cosa buona è che posso chiamarla ancora prima di averla dichiarata mentre con la function expression non posso
/* function calcAge1(birthYeah) {
    return 2037 - birthYeah;
}
const age1 = calcAge1(1991);

//function expression
const calcAge2 = function (birthYeah) {
    return 2037 - birthYeah;
}
const age2 = calcAge2(1991); */
//la differenza è che una funzione è un'espressione che genera un valore di conseguenza è preferibile il secondo metodo poichè do il nome ad un variabile che è una funzione così alla fine il risultato della funzione sarà giaà allinterno di una variabile pre dichiarata la funzione non è un type ma un valore boolean numeric o stringa e per questo lo stocco in una variabile

/* console.log(age1, age2); */

/* function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}

const pop1 = percentageOfWorld1(1441);
console.log(pop1 + "%");

const percentageOfWorld2 = function (population) {
    return (population / 7900) * 100;
}

const pop2 = percentageOfWorld2(1441);
console.log(pop2 + "%");
console.log(percentageOfWorld2(1441) + "%");
console.log(percentageOfWorld1(1441)); */

//ATTENZIONE CERCARE BENE DIFFEREMZA TRA EXPRESSION E DECLARATION
//////////////////////////////////////////////////////////////////////
///LECTURE ARROW FUNCTION

/* const percentageOfWorld3 = population => (population / 7900) * 100;
console.log(percentageOfWorld3(1441)); */

//da utilizzare  per funzioni semplici che stanno su una riga diciamo.

//////////////////////////////////////////////////////////////////////
///LECTURE FUNCTION CALLING OTHER FUNCTION
/* function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice = `Juice with ${applePieces} piece of apples and ${orangePieces} piece of oranges.`;
    return juice;
}

console.log(fruitProcessor(2, 3)); */

//qui dentro cosa faccio ho una funzione che dtati i numeri di mele e arance mi stampa con quanti feutti ho fatto il succo, per approfondire voglio chiamare una funzione dentro l'altra perciò mi creo la funzione cutFruitpieces che non fa altro che moltiptlicare il numero dei frutti per 4 , quindi la eseguo all'interno della mia funzione madre e poi utilizzo i suoi risultati constipati in variabili che richimao poi nell'ultima variabile juice in cui le richiamo per stamparle.

/* function describePopulation(country, population) {
    const resa = percentageOfWorld1(population);

    const tot = `${country} has ${population} million people, which is about ${resa}% of the world.`;
    return tot;
}

console.log(describePopulation("China", 1441)); */

//con ctrl + D seleziona la stessa parola ovunque e si puo modificare
//la funzione return oltre a generare un putput valido termina l'esecuzione della funzione, mentre la cosnole.log all'interno di una funzione non lo fa ma stampa solo.

//////////////////////////////////////////////////////////////////////
/// JavaScript Fundamentals – Part 2 Coding Challenge #1

/* d1 = 44;
d2 = 23;
d3 = 71;
k1 = 65;
k2 = 54;
k3 = 49; */

/* const calcAverage = (num1, num2, num3) => (num1 + num2 + num3) / 3;

let avgDolphins = (calcAverage(85, 54, 41));
console.log(`Media squadra Dolphins ${avgDolphins}`);

let avgKoalas = (calcAverage(23, 34, 27));
console.log(`Media squadra Koalas ${avgKoalas}`);

const teamA = "Dolphins";
const teamB = "Koalas";

const chcekWinner = function (avgDolphins, avgKoalas) {
    if (avgDolphins >= avgKoalas * 2) {
        console.log(`${teamA} win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= avgDolphins * 2) {
        console.log(`${teamB} win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log("No one wins!")
    };
}

chcekWinner(506, 56);
chcekWinner(avgDolphins, avgKoalas); */

//////////////////////////////////////////////////////////////////////
///LECTURE INTRODCING TO ARRAY
/* const friend1 = 'Michael';
const friend2 = 'Steven';
const friend3 = 'Peter';

const friends = ['Michael', 'Steven', 'Peter'];
console.log(friends);

const years = new Array(1991, 1984, 2008, 2020);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]); */

//posso sostituire un valore all'interno dell'array
/* friends[2] = 'Jay';
console.log(friends); */

//posso fare un array che contiene altri array oppure operazioni oppure variabili
/* const firstName = 'Jonas';
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends];
console.log(jonas); */

//non possiamo proprio fare operazioni con gli array tranne che con calcAge prendedno un valore alla volta

/* const calcAge = function (birthYeah) {
    return 2037 - birthYeah;
}
const years_1 = [1990, 1967, 2002, 2010, 2018];

const age1 = calcAge(years_1[0]);
const age2 = calcAge(years_1[1]);
const age3 = calcAge(years_1[years_1.length - 1]);
console.log(age1, age2, age3); */

//gli attributi all'interno dei paramentri degli array possono essere espressioni che generano un valore perciò all'interno degli arrai ci posso ficcare una funzione direttamente eseguibile

/* const ages = [calcAge(years_1[0]), calcAge(years_1[1])];
console.log(ages); */

//////////////////////////////////////////////////////////////////////
///LECTURE BASIC ARRAY OPERATIONS (METHODS)

//con la funzione "push" vado ad aggiungere un nuovo elemento in findo alla lista dell'array
/* const friends = ['Michael', 'Steven', 'Peter']; */

//mi stipo anche la lunghezza dell'array che si aggiorna automaticamente quando inserisco nuovi o più valori
/* const newLength = friends.push('JMark', 'Tony'); */

//questo aggiunge alla fine
/* friends.push('Jay'); */

//questo lo aggiunge all'inizio
/* friends.unshift('John');

console.log(friends);
console.log(newLength); */

//rimuove elementi dalla fine
/* friends.pop();
const popped = friends.pop();
console.log(popped);
console.log(friends); */

//rimuove dall'inizio
/* friends.shift();
console.log(friends); */

//controlla se il valore nella lista esiste e ti risponde con la posizione
/* console.log(friends.indexOf('Steven'));
console.log(friends.indexOf('Bob')); */

// qui invece controlla se il vaore è presente nella lista e restitsicehe true or false
/* console.log(friends.includes('Steven'));
console.log(friends.includes('Bob')); */

/* const neighbours = ['france', 'germany', 'spain'];
 */
/* neighbours.push('Utopia');

console.log(neighbours);

neighbours.pop('Utopia');

console.log(neighbours);

if (neighbours.includes('germany')) {
    console.log('You are a central europe country');
} else {
    console.log('you arent a central europe country');
}; */

//con questo gli dico indicami la posizione dell'array della parola francia e sostituiscila con repubblica francese
/* neighbours[neighbours.indexOf('france')] = 'Republic of france';

neighbours[1] = 'Australia';

console.log(neighbours) */ // Coding Challenge #2

/* const tip1 = 0.15;
const tip2 = 0.20;

let bill = 100; */

/* let bills = [125, 555, 44];
let tips = [0.15, 0.20];
 */

/* const calcTip = function (bills) {
    if (bills >= 50 && bills <= 300) {
        return bills * (tips[0]);
    } else {
        return bills * (tips[1]);
    }
}; */
/* const calcTip2 = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
} */

/* const tipsL = [calcTip2(bills[0]), calcTip2(bills[1]), calcTip2(bills[2])];
 */

/* const resultsss = [
    calcTip(bills[0]),
    calcTip(bills[1]),
    calcTip(bills[2])
];

const total = [
    bills[0] + resultsss[0],
    bills[1] + resultsss[1],
    bills[2] + resultsss[2]
]

console.log(bills, resultsss, total);
 */

//////////////////////////////////////////////////////////////////////
///LECTURE OBJECT

//queste sono le property i dati  e tipo firstName si chiama "key"
/* const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    age: 2037 - 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven']
};
console.log(jonas); */

//come richimare una property specifica
/* console.log(jonas.lastName);
//oppure
console.log(jonas['lastName']); */

//creo una variabile in cui stocco la parte che si ripete in firstname e last name
/* const namekey = 'Name'; */
//usiamo quella variabile per recuperare name e lastname quindi al posto di richiamare direttamente "firstName" ho creato una stringa concatenata dove scrivo "first" e name in vece me lo ricavo dalla variabile nameKey
/* console.log(jonas['first' + namekey]);
console.log(jonas['last' + namekey]); */

//vediamo un esempio del perchè a volte è necessario usare le parentesi quadre al posto del punto
/* const interestedIn = prompt('What do you want to know about Jonas? Choose between firstname, lastName, age , job, and friends');


if (jonas[interestedIn]) {
    console.log(jonas[interestedIn]);
} else {
    console.log("Wrong request! Choose between firstname, lastName, age , job, and friends");
}
 */
//posso aggiungere anche campi che non ci sono
/* jonas.location = 'Portugal';
jonas['twitter'] = '@jonas';
console.log(jonas); */

//scrivi la frase jonas has 3 friends, and his best friedn is called michael
/* const jonas = {
    friends: ['Michael', 'Jo', 'Tony']
}; */
/*
const best = function () {
    console.log("Jonas has " + jonas.friends.length + " friends, and his best friend is called " + jonas.friends[0] + ".");
}

best(jonas); */

/////////////////////////////////////////////////////////////////////
///LECTURE: Dot vs. Bracket Notation
/* const myCountry = {
    country: "Italy",
    capital: "Rome",
    language: "Italian",
    population: 45,
    neighbours: ["France", "Germany", "Spain"],
    isIsland: true,
    describe: function () {
        return (`${this.country} has ${this.population} milion ${this.language}-speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`);
    },
    checkIsIsland: function () {
        return (`This country ${this.isIsland ? 'is' : 'is not'} a island`);
    }
};
console.log(myCountry.describe());
console.log(myCountry.checkIsIsland());

console.log(myCountry.country + " has " + myCountry.population + " milion " + myCountry.language + "-speaking people, " + myCountry.neighbours.length + " neighbouring countries and a capital called " + myCountry.capital + "."); */

/////////////////////////////////////////////////////////////////////
///44 OBJECT METHODS

/* const jonas = {
    firstName: 'Jonas',
    lastName: 'Schmedtmann',
    birthYeah: 1991,
    job: 'teacher',
    friends: ['Michael', 'Peter', 'Steven'],
    hasDriversLicense: true, */
//qualsiasi funzione dentro o attaccata ad un oggetto vinee definita come "method"
/* calcAge: function (birthYeah) {
    return 2037 - birthYeah;
} */
//la funzione this. è uguale riporta all'oggetto che viene richiamato, è ugualle all'oggetto che chiama il method(la funzione dentro l'oggetto)
/* calcAge: function () {
    console.log(this); 
    //this è come se fosse jonas
    return 2037 - this.birthYeah;
} */
//dato che calcolare ogni volta la funzione può risultare pesante pensiamo di calcolare una volta sola l'età e stoccara im una proprieties in modo tale da avercela gia pronta e richiamarla
/* calcAge: function () {
    this.age = 2037 - this.birthYeah;
    return this.age;
}, */

/* getSummary: function () {
    return (`${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`)
}
} */
//puoi rappresentarlo o usando il puntino oppure usando i brackets
//prima di loggare la roba .this ricordati di far girare la funzione altrimenti non va nulla e ti da "undefined"
/* console.log(jonas.calcAge());
console.log(jonas.age);
console.log(jonas.getSummary());
console.log(jonas.age); */

///CHALLENGE
//"Jomas is a 46-year old teacher , and he has a driver's license"
/* console.log(jonas.getSummary()); */

////////////////////////////////////////////////////////////////////////Coding Challenge #3

/* const mark = {
    fullName: "Mark Miller",
    mass: 80,
    height: 1.69,
    calcBMI: function () {
        return (this.mass / (this.height * this.height))
    },
};

const john = {
    fullName: "John Smith",
    mass: 52,
    height: 1.95,
    calcBMI: () => {
        return (this.mass / (this.height * this.height))
    }
};

const winner = function (user1, user2) {
    return (user1.calcBMI() > user2.calcBMI())
};

const finalText = (win) => {
    if (win) {
        return `${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})!`;

    } else {
        return `${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})!`;

    };

};

console.log(`${winner(mark, john) ? mark.fullName : john.fullName}'s BMI (${winner(mark, john) ? mark.calcBMI() : john.calcBMI()}) is higher than ${winner(mark, john) ? john.fullName : mark.fullName}'s (${winner(mark, john) ? john.calcBMI() : mark.calcBMI()})!`);

console.log(mark.calcBMI());
console.log(john.calcBMI());
console.log(typeof john.calcBMI);
console.log(typeof john.calcBMI());
console.log(finalText(winner(mark, john))); */

///////////////////////////////////////////////////////////////////////////////////////////////
/// THE FOR LOOPS

/* console.log('Lifting Weights repetition 1');
console.log('Lifting Weights repetition 2');
console.log('Lifting Weights repetition 3'); */

//il loop funziona finche la condizione è vera, cioè la condizione è vera fino al 10 perchè ogni giro si incrementa rep di 1 fino ad arrivare a 10 quando si ferma

/*  for (let rep = 1; rep <= 10; rep++) {
     console.log(`Lifting Weights repetition ${rep}`);
 };

 for (let vote = 1; vote <= 50; vote++) {
     console.log(`Voter number ${vote} is currently voting`);
 }; */

//////////////////////////////////////////////////////////////

/* const jonas = [
    'Jonas',
    'Schedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Peter', 'Steven'],
    true
];

const types = [];

for (let i = 0; i < jonas.length; i++) {
    console.log(jonas[i], typeof jonas[i]);
    //con questa funzione aggiunguiamo elemnte all'array vuoto
    // types[i] = typeof jonas[i];
    types.push(typeof jonas[i]);
};

console.log(types); */

/* const years = [1991, 2007, 1969, 2020];
const ages = [];
 
for (let i = 0; i < years.length; i++) {
    ages.push(2037 - years[i]);
}
console.log(ages); */

/*
const populations = [10, 1441, 332, 83];
const percentages2 = [];

const percento = function percentageOfWorld1(populations) {
    return (populations / 7900) * 100;
}

for (let i = 0; i < populations.length; i++) {

    const perc = percento(populations[i]);
    percentages2.push(perc);
}

console.log(percentages2);
 */

///////////////////////////////////////////////////////////////
/// LOOPING BACKWARDS ADN LOOPS IN LOOPS

/* const jonas = [
    'Jonas',
    'Schmedtmann',
    2037 - 1991,
    'teacher',
    ['Michael', 'Jonas', 'Peter'],
    true
];

for (let i = jonas.length - 1; i >= 0; i--) {
    console.log(i, jonas[i]);
}; */

///////////////////////////////////////////////////////////
///LOOP INSIDE A LOOP

/* for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`------------ Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    };
};
 */

/* const listOfNeighbours = [
    ['Canada', 'Mexico'],
    ['Spain'],
    ['Norway', 'Sweden', 'Russia'],
];

for (let giro = 0; giro < listOfNeighbours.length; giro++) {
    for (let nei = 0; nei < listOfNeighbours[giro].length; nei++) {
        console.log(`Neighbour: ${listOfNeighbours[giro][nei]}`);
    };
}; */

////////////////////////////////////////////////////////////////////////////////////////
/// WHILE LOOPS

/* let rep = 1;
while (rep <= 10) {
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
} */

//trunc toglie i decimali e random crea numeri casuali e metto il + 1 cosi non parte da zero e poi arriva a 6
/* let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop in about to end...');
}
 */

//con questo dichiari il dice sopra poi fai un ciclo while che continua a girare fichè non esce un 6, quando esce il 6 lui si ferma.

//quindi in conclusione quando devi fare un loop senza incrementi ma con condizioni specifiche utilizzi il while loop

//////////////////////////////////////////////////////////////////////////////////////////////
///Coding Challenge 4

/* const bills = [22, 295, 1976, 440, 37, 105, 10, 1100, 86, 525];

const tips = [];

const totals = [];

const calcTip = function (bills) {
    return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
};

//dentro il ciclo devo prendere 1 valore alla volta dell'array bills, fare il calcolo della mancia e pusharlo all'interno della lista tips, dopo prendo bills e prendo tips li sommo e il loro risultato lo pusho a totals.

for (let loop = 0; loop < bills.length; loop++) {
    // console.log(calcTip(bills[loop]));
    tips.push(calcTip(bills[loop]));
    totals.push(tips[loop] + bills[loop]);
};

// console.log(bills, tips, totals);

///BONUS CHALLENGE
const calcAverage = function (arr) {

    let sum1 = 0;

    for (let i = 0; i < arr.length; i++) {

        sum1 = sum1 + arr[i];
    }
    return sum1 / arr.length;
}
console.log(calcAverage(totals));
console.log(calcAverage(tips));
console.log(calcAverage(bills));


///SCRITTA IO 

let sum = 0;
for (let i = 0; i < totals.length; i++) {

    sum += totals[i];
    //console.log(sum);
}

console.log("Questa è la media dei conti complessivi di mancia: $" + Math.trunc(sum / totals.length)); */

/////////////////////////////////////////////////////////////////////////////////////////////
//// PART 3 PRETTIER ON VISUAL STUDIO

/* const xyzcbauei = '23';

const calcAge = birthYear => 2037 - birthYear;

console.log(calcAge(1991)); */

/////////////////////////////////////////////////////////////////////////////////////////////
/// USING GOOGLE, STACKOVERFLOW, MDN

/* const temperatures = [3, -2, -6, -1, 'eror', 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [2, 56, 324, -89, 25, 'ciao', 3, -96, 558];
const t3 = temperatures.concat(temperatures2);

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    //abbiamo aggiunto questa if per dire che se attributo non è un numero al posto di andare in errore e fermarsi, proseguire con l'array grazie alla funzione continue.

    if (typeof curTemp !== 'number') continue;

    //qui ci sono i due calcoli se temps[i] cioè l'attuale numero dell'array che stiamo scorrendo è > max allora max = temps[i] valore che noi abbiamo sostituito con la const curTemp per pulire il codice, stessa cosa abbiamo fatto per individuare il numero minore.

    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);

  //qui ritorniamo il calcolo che cercavamo il max - min e poi lo andiamo a richiamare in console.log che adesso grazie allo snippet si chiama cl

  return max - min;
};
const amplitute = calcTempAmplitude(t3);
//max = 17, min = -6
console.log(amplitute);

//ADD NOW 2 ARRAYS use " array3= array1.concat(array2); " */

//////////////////////////////////////////////////////////////////////////////////////////
///DEBUGGIN come scoprire i problemi grazie ai vari tipi di console.

/* const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    value: Number(prompt('Degrees celsius:')),
  };

  //   console.table(measurement);
  //   console.warn(measurement.value);
  //   console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
console.log(measureKelvin()); */

/////////////////////////////////////////////////////////////////////////////////////////////////CODING CHALLENGE #1

/* const t1 = [17, 21, 23];
const t2 = [12, 5, -5, 0, 4];

// for (let i = 0; i < t1.length; i++) {
//   const temp = t1[i];
//   const day = i;
//   console.log(`... ${temp}°C in ${day} days ...`);
// }

//per poter agiungere degli elementi di un'array e dare come risultato una stringa concatenata bisogna creare un accumulatore come il sum = sum + sum[i] in modo tale da concateanre i valori

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str = str + `${arr[i]}°C in ${i + 1} days ...`;
  }
  console.log(`... ${str}`);
};

printForecast(t1); */

/////////////////////////////////////////////////////////////////////////////////////////////////FIRST PROJECT JavaScript in the Browser: DOM and Events Fundamentals guess my num
//cia
