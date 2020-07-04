// Write a JavaScript function to calculate the sum of values in an array.

function sum(a){
    return a.reduce(function(a,b){
        return a+b;
    })
}
var b = [2,7,3];
console.log(sum(b));

// Write a JavaScript function to round a number to a specified number of digits and strip extra zeros (if any)
function toRound(num){
    var n = num.toFixed(4);
    return parseFloat(n);
}
console.log(toRound(-2.45679899));

// Write a JavaScript function to round up an integer value to the next multiple of 5

function int_round(num){
    if(num%5!==0){
        for(i=num; i%5!==0; i++);
        console.log(i);
    }else console.log(num);
}
int_round(53);

// Write a JavaScript function to get difference between given birth date and current date.
// It should return number of years, months and days.

function getdiff(day,mon,year){
    var currentDate = new Date().getTime();
    var birthDate = new Date(`${year}-${mon}-${day}`).getTime();
    var yearDiff = Math.floor((currentDate-birthDate)/31556952000);
    var monthDiff = Math.floor(((currentDate-birthDate)%31556952000)/2592000000);
    var dayDiff = Math.floor((((currentDate-birthDate)%31556952000)%2592000000)/8.64e+7);
    return yearDiff+" il "+monthDiff+" ay və "+dayDiff+" gündür həyatdasınız";
}

console.log(getdiff(15,12,2000));
// ----------------------------------------------------------------
// ALSO YOU CAN DU THİS METHOD BUT İT HAS 1 MONTH DİFFERENCE. I DO NOT WHY, PLEASE CHECK IT AND WRITE AS COMMENT WHAT IS WRONG
// ----------------------------------------------------------------------
// var year = 2000;
// var mon = 12;
// var day = 1;
// var yearDif=(a.getFullYear())-(year);
// var monDif =(a.getMonth())-(mon);
// var dayDif =(a.getDate())-(day);
// if(monDif<0){
//     monDif=12+monDif;
//     yearDif--;
// }
// if(dayDif<0){
//     dayDif=30+dayDif;
//     monDif--;
// }
// console.log(yearDif+" il "+monDif+" ay "+dayDif+" gündür həyatdasan");