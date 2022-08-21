console.log("conditionals javascript file execution start");

// word1Word2Word3 this type of wording is called as camelcase
// WORD1WORD2WORD3 uppercase
// word1word2word3 lowercase

let yashPassed = true;
if(yashPassed){
    console.log('yash passed')
}else{
    console.log('yash failed');
}

let veduPassed = true, veduAte = false;
if(veduPassed && veduAte){
    console.log('vedu passed and vedu has finished dinner');
}else if(veduPassed){
    console.log('vedu passed');
}else if(veduAte){
    console.log("vedu has finished dinner")
}else{
    console.log('vedu failed and vedu is hungry');
}

if(veduPassed && veduAte){
    console.log('vedu passed and vedu has finished dinner');
}else {
    if(veduPassed){
        console.log('vedu passed');
    }else if(veduAte){
        console.log("vedu has finished dinner")
    }else{
        console.log('vedu failed and vedu is hungry');
    }
}

let condition = 'watermelon';
switch(condition){
    case 'mango' : {
        console.log("Condition is mango");
        break;
    }
    case 'apple' : {
        console.log("Condition is apple");
        break;
    }
    case 'guava' : {
        console.log("Condition is guava");
        break;
    }
    case 'pineapple' : {
        console.log("Condition is pineapple");
        break;
    }
    default : {
        console.log("nothing matched");
    }
}

switch(condition){
    case 'mango' : console.log("Condition is mango");break;
    case 'apple' : console.log("Condition is apple");break;
    case 'guava' : {
        console.log("Condition is guava");
        break;
    }
    case 'pineapple' : {console.log("Condition is pineapple");break;}
    default : {
        console.log("nothing matched");
    }
}

