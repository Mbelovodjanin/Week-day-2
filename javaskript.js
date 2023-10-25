// Example 1
//Write a function to check whether the `input` is a string or not.
//&quot;My random string&quot; -&gt; true
//12 -&gt; false

function checkString(s) {
    if (typeof s === "string") {
        console.log(true);
        return true;
    } else {
        console.log(false);
        return false;
    }
}
checkString(2408);
checkString("hi");

// Example 2
// Write a function to check whether a string is blank or not.

function checkBlank(s) {
    if (s === " " || s != "string") {
        console.log(false);
        return false;
    } else {
        console.log(true);
        return true;
    }
}
checkBlank(" ");
checkBlank("24");
checkBlank(17);

// Example 3
// Write a function that concatenates a given string n times (default is 1).

function concatString(s, n = 1) {
    var newString = "";
    if (n === 1) {
        return s;
    }
    for (i = 0; i < n; i++) {
        newString += s;
    }
    return newString;
}
console.log(concatString("Ha"));
console.log(concatString("Ha", 3));
console.log(concatString("Ha", 5));

// Example 4
// Write a function to count the number of letter occurrences in a string.
// &quot;My random string&quot;, &quot;n&quot; -&gt; 2

function countLetters(s, letter) {
    var count = 0;
    for (i = 0; i < s.length; i++) {
        if (s[i].toLowerCase() === letter) {
            count = count + 1; //count++
        }
    }
    return count;
}
console.log(countLetters("Random String", "d"));
console.log(countLetters("Milan Belovodjanin", "n"));

// Example 5
// Write a function to find the position of the first occurrence of a character in a string. The
//result should be the position of character. If there are no occurrences of the character, the
//function should return -1.
function findPosition(string, n) {
    for (i = 0; i < string.length; i++) {
        if (string[i] === n) {
            return i;
        }
    }
    return -1;
}
console.log(findPosition("Milan Belovodjanin", "n"));

// Example 6
// Write a function to find the position of the last occurrence of a character in a string. The
//result should be in human numeration form. If there are no occurrences of the character,
//function should return -1.

function findPosition2(string, n) {
    var indexArray = [];
    for (i = 0; i < string.length; i++) {
        if (string[i] === n) {
            indexArray.push(i);
        }
    }
    if (indexArray.length > 0) {
        return indexArray[indexArray.length - 1];
    }
    return -1;
}
console.log(findPosition2("MilanB", "a"));

// Example 7
// Write a function to convert string into an array. Space in a string should be represented as
//“null” in new array.

function spaceToNull(InputString) {
    var outputArr = [];
    var n = InputString.length;
    for (var i = 0; i < n; i++) {
        if (InputString[i] === " ") {
            outputArr.push(null);
        } else {
            outputArr.push(InputString[i]);
        }
    }

    return outputArr;
}
console.log(spaceToNull("my random string"));

// Example 8
//Write a function that accepts a number as a parameter and checks if the number is prime or
//not.
//Note: A prime number (or a prime) is a natural number greater than 1 that has no positive
//divisors other than 1 and itself.
// prosti brojevi su deljivi sa 1 i sa samim sobom

function isPrime(inputNumber) {
    for (var i = 2; i < inputNumber / 2; i++) {
        //pre ovo pisalo inputNumber - 1
        if (inputNumber % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(isPrime(22));

// Example 9
//Write a function that replaces spaces in a string with provided separator. If separator is not
//provided, use “-” (dash) as the default separator.
function replaceSpace(inputString, charToReplace) {
    var outputString = "";
    var n = inputString.length;
    for (var i = 0; i < n; i++) {
        if (inputString[i] === " ") {
            outputString += charToReplace;
        } else {
            outputString += inputString[i];
        }
    }

    return outputString;
}
console.log(replaceSpace("my random string", "$"));

// Example random
// napisati f-ju koja ocekuje dva parametra: ime i prezime. F-ja treba da vrati string koje je pocetno slovo imena i pocetne slovo prezimena

function firstFirst(InputIme, InputPrezime) {
    return InputIme[0] + InputPrezime[0];
}
console.log(firstFirst("Milan", "Belovodjanin"));
