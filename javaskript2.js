// Example 1
// Write a function that converts an array of strings into an array of numbers. Filter
//out all non-numeric values.
var niz = ["1","21",undefined,"42","1e+3",Infinity];
function checkNumber(arr){
    var outputArr= [];
    for(var i= 0; i <arr.length; i++){

    }
    if(isFinite(arr[i])){
        outputArr.push(parseFloat(arr[i]));
    }
    return outputArr;
}
console.log(checkNumber(niz));