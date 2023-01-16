console.log(`I'm ready!`);

// Iteration 1: Names and Input
const hacker1 = 'Marisha';
console.log(`The driver's name is ${hacker1}.`);

const hacker2 = 'Tiago';
console.log(`The navigator's name is ${hacker2}.`)

// Iteration 2: Conditionals
const driver = hacker1.length;
const navigator = hacker2.length;

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${driver} characters.`)
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${navigator} characters.`)
} else {
    console.log(`Wow, you both have equally long names, ${navigator} characters!`)
}
// Iteration 3: Loops
//3.1
let driversCapitalized = '';
for (let i = 0; i < driver; i++) {
    driversCapitalized += hacker1[i].toUpperCase() + ' ';
}

console.log(driversCapitalized);

//3.2

let driversReversed = '';
for (let i = driver-1; i >= 0; i--) {
    driversReversed += hacker1[i];
}
console.log(driversReversed);

//3.3
if (hacker1.localeCompare(hacker2) === -1) {
    console.log(`The driver's name goes first.`)
} else if (hacker2.localeCompare(hacker1) === 1) {
    console.log(`Yo, the navigator goes first definitely.`)
} else {
    console.log(`What?! You both have the same name?`)
}

//Bonus 1
let longtext = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque finibus at nulla quis ultricies. Quisque risus mauris, egestas vel laoreet nec, consectetur tempor felis. Proin elementum sed lectus ut auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec non mauris non est convallis semper. Curabitur magna felis, dignissim nec posuere a, elementum non eros. Integer ante risus, tempor non diam non, molestie dapibus neque. Mauris placerat commodo eleifend. Phasellus dictum dolor non sem rhoncus accumsan. Integer ac semper neque. Sed leo ante, consectetur ac diam non, commodo aliquet nibh. Pellentesque porttitor turpis in est varius interdum. Sed rutrum posuere velit hendrerit congue. Quisque in eros vel mi posuere venenatis vel nec libero. Curabitur sed scelerisque orci, a sollicitudin eros. Maecenas in fermentum ex. Ut convallis mollis orci, eu mattis mi pretium eu. Aenean a egestas lectus. Etiam suscipit nulla nec felis tincidunt rhoncus. Quisque ullamcorper, nisi vitae volutpat varius, magna libero vulputate leo, ut tincidunt tortor lorem sit amet sem. Mauris in mauris id ligula rutrum faucibus. Cras consectetur velit ac velit ullamcorper, nec volutpat odio posuere. Vestibulum leo mi, hendrerit viverra sapien sagittis, accumsan commodo magna. Fusce vitae mollis est. Mauris ultrices dui in nisl vehicula blandit. Nulla egestas odio quis turpis aliquet dictum. Nam porta velit sed egestas malesuada. In quis neque sit amet odio accumsan pellentesque quis nec sem. Maecenas nec congue felis, at aliquet nisl. Morbi tempor gravida erat in dignissim. Aenean aliquam feugiat turpis at mattis. Nulla congue id lorem non laoreet. Nullam viverra urna eget ex sagittis fringilla. Donec vulputate, elit sit amet viverra convallis, lectus turpis varius justo, tempor facilisis felis velit et lorem. Sed posuere sollicitudin accumsan. Morbi a ex molestie dolor efficitur sollicitudin in in turpis. Suspendisse eget metus dolor. Aliquam eget quam faucibus, luctus dui aliquet, ullamcorper diam. Sed ut enim id lacus maximus elementum ut eget tortor. Maecenas ipsum nunc, volutpat a lacinia vel, ullamcorper sit amet purus. Donec quis eros convallis, hendrerit dolor sit amet, sagittis ante. In ultricies nisi ac ipsum pulvinar, et rutrum nibh cursus.';

console.log(longtext.length);

let countEt = 0;
for(let i = 0; i < longtext.length; i++) {
    if (longtext[i] + longtext[i+1] === 'et') {
        countEt++;
    }
}

console.log(countEt);


//bonus 2

const phraseToCheck = 'step on no pets';
let phraseReversed = '';


for (let i = phraseToCheck.length-1; i >= 0; i--){
    phraseReversed += phraseToCheck[i];
}

let isEqual = false;

for (let i = 0; i < phraseToCheck.length; i++) {
    
    for(let j = 0; j < phraseReversed.length; j++){
         if(phraseToCheck[i] === phraseReversed[j]){
           isEqual = true;
        } else {
            isEqual = false;
        }
    }   
}

if(isEqual) {
    console.log('The sentence is a Palindrome');
} else {
    console.log('The sentence is NOT a Palindrome');
}