//Part A
let celsius = 36;
let fahreheit = Math.round(((celsius * 9) / 5 + 32) * 10) / 10;

console.log(`${celsius}\u00B0C is ${fahreheit}\u00B0F.`);

document.getElementById('partA1').innerHTML = `${celsius}\u00B0C is ${fahreheit}\u00B0F.`;

fahreheit = 100;
celsius = Math.round(((fahreheit - 32) * 5 / 9) * 10) / 10;

console.log(`${fahreheit}\u00B0C is ${celsius}\u00B0F.`);

document.getElementById('partA2').innerHTML = `${fahreheit}\u00B0C is ${celsius}\u00B0F.`;

//Part B
let JohnHeight = 1.75;
let JohnWeight = 75;
let LucasHeight = 1.9;
let LucasWeight = 80;

let LucasBMI = Math.round((LucasWeight / (LucasHeight * LucasHeight)) * 10) / 10;
let JohnBMI = Math.round((JohnWeight / (JohnHeight * JohnHeight)) * 10) / 10;

if (JohnBMI > LucasBMI) {
    console.log (`John's BMI (${JohnBMI}) is higher than Lucas's BMI(${LucasBMI})!`);
    document.getElementById("partB").innerHTML = `John's BMI (${JohnBMI}) is higher than Lucas's BMI(${LucasBMI})!`;
}
    
else {
    console.log (`Lucas's BMI (${LucasBMI}) is higher than John's BMI(${JohnBMI})!`);
    document.getElementById("partB").innerHTML = `Lucas's BMI (${LucasBMI}) is higher than John's BMI(${JohnBMI})!`;
}
    
//Part C Functions
function calSum (array){
    let sum = 0;
    for (let i = 0; i < array.length; i++){
    sum += array[i];
    }
    return sum;
}

function calAvg (num, array){
    return Math.round((num/array.length) * 10) / 10;
}

function compare(NetsAvg, KnicksAvg) {
    if (NetsAvg > KnicksAvg) {
        let msg = `Nets average score (${NetsAvg}) is higher than Knicks average score (${KnicksAvg}), so the winner is Nets!`;
        console.log(msg);
        return msg;
    }
        
    else if (NetsAvg < KnicksAvg) {
        let msg = `Knicks average score (${KnicksAvg}) is higher than Nets average score (${NetsAvg}), so the winner is Knicks!`;
        console.log(msg);
        return msg;
    }
    
    else {
        let msg = `Nets average score (${NetsAvg}) is same as Knicks average score (${KnicksAvg}), so the competition result is draw!`;
        console.log(msg);
        return msg;
    }
}

function compareWithMinimum(NetsAvg, KnicksAvg) {
    if (NetsAvg > KnicksAvg && NetsAvg >= 100) {
        let msg = `Nets average score is (${NetsAvg}) is higher than Knicks average score (${KnicksAvg}), so the winner is Nets!`;
        console.log(msg);
        return msg;
    }
        
    else if (NetsAvg < KnicksAvg && KnicksAvg >= 100) {
        let msg = `Knicks average score (${KnicksAvg}) is higher than Nets average score (${NetsAvg}), so the winner is Knicks!`;
        console.log(msg);
        return msg;
    }
    
    else if (NetsAvg === KnicksAvg && NetsAvg >= 100){
        let msg = `Nets average score (${NetsAvg}) is same as Knicks average score (${KnicksAvg}), and the score was at least 100, so the competition result is draw!`;
        console.log(msg);
        return msg;
    }
    
    else {
        let msg = `Nets average score is ${NetsAvg} and Knicks average score is ${KnicksAvg}, none of their score are at least 100, so no winner!`;
        console.log(msg);
        return msg;
    }
}



//Part C_1: refers to Part C Functions
let Nets = [96, 108, 89];
let Knicks = [88, 91, 110];
let NetsSum = 0;
let KnicksSum = 0;
let NetsAvg = 0;
let KnicksAvg = 0;

NetsSum = calSum(Nets);
KnicksSum = calSum(Knicks);
NetsAvg = calAvg(NetsSum, Nets);
KnicksAvg = calAvg(KnicksSum, Knicks);

console.log(`Nets average score is ${NetsAvg}, and Knicks average score is ${KnicksAvg}`);

document.getElementById("partC1").innerHTML = `Nets average score is ${NetsAvg}, and Knicks average score is ${KnicksAvg}`;

//Part C_2: refers to Part C Functions
document.getElementById("partC2").innerHTML = compare(NetsAvg, KnicksAvg);

//Part C_3: refers to Part C Functions
Nets = [97, 112, 101];
Knicks = [109, 95, 123];
NetsSum = 0;
KnicksSum = 0;
NetsAvg = 0;
KnicksAvg = 0;;

NetsSum = calSum(Nets);
KnicksSum = calSum(Knicks);
NetsAvg = calAvg(NetsSum, Nets);
KnicksAvg = calAvg(KnicksSum, Knicks);

document.getElementById("partC3").innerHTML = compareWithMinimum(NetsAvg, KnicksAvg);


//Part C_4: refers to Part C Functions
Nets = [97, 112, 101];
Knicks = [109, 95, 106];
NetsSum = 0;
KnicksSum = 0;
NetsAvg = 0;
KnicksAvg = 0;;

NetsSum = calSum(Nets);
KnicksSum = calSum(Knicks);
NetsAvg = calAvg(NetsSum, Nets);
KnicksAvg = calAvg(KnicksSum, Knicks);

document.getElementById("partC4").innerHTML = compareWithMinimum(NetsAvg, KnicksAvg);

//Part D
const userInput = prompt("Please enter a number!");

if (userInput === '' || isNaN(userInput)) {
    let msg = "Please enter a number!";
    console.log(msg);
    document.getElementById("partD").innerHTML = msg;
}
 
else if (userInput === '10') {
    let msg = "The number is matched";
    console.log(msg);
    document.getElementById("partD").innerHTML = msg;
}

else if (userInput === '8') {
    let msg = `Number ${userInput} is also matched`;
    console.log(msg);
    document.getElementById("partD").innerHTML = msg;
}
else {
    let msg = "NOT MATCHED!!";
    console.log(msg);
    document.getElementById("partD").innerHTML = msg;
}