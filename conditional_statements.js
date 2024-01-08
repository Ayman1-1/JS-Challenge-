// start tsak 1 Even or Odd
let number=5;
if(number %2 == 0){
    console.log("number is even")
}
else{
    console.log("number is odd")
}

// end tsak 1 Even or Odd


// start tsak 2 Days of the week
var day=4;
switch (day){
    case 1:
    console.log('Monday');
    break;
    case 2:
    console.log('Tuesday');
    break;
    case 3:
    console.log('Wednsday');
    break;
    case 4:
    console.log('Thursday');
    break;
    case 5:
    console.log('Friday');
    break;
    case 6:
    console.log('Saturday');
    break;
    case 7:
    console.log('Sunday');
    break;
    default:
        console.log("Unvalid Day.");
}
// end tsak 2 Days of the week


//Start task 3 Maximum

let a = -15;
let b = 6;
let c = 2.6;


let max ;
 if (a>b && a>c){
    max=a;
 }
 else if (b>a && b>c) {
    max=b;
 }
 else{ max=c}

// end tsak 3 Maximum


// ! start Task 4 : The Teacher

let score =80;
if(score>0 &&score<=100){
    if (score>85){
        console.log("grade is A");
    }
    else if (score<=85 && score>70){
        console.log("grade is B");
    }
    else if (score<=70 && score>55){
        console.log("grade is C");
    }
    else if (score<=55 && score>40){
        console.log("grade is D");
    }
    else if (score<=40 && score>15){
        console.log("grade is E");
    }
    else{
        console.log("grade is F");
    }
}
// ! end Task 4 : The Teacher