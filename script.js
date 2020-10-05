/*
Write a JavaScript program to create a new string 
adding "Py" in front of a given string. 
If the given string begins with "Py" then 
return the original string.

*/

let originalString = "thon";  // Detta är den sträng som vi utgår från.

let firstTwoLetters = originalString.slice(0, 2);  // Dom två första tecknen i orginalsträngen
                                                   // kopieras in i en ny sträng. 

let returnString = "";  // Deklarerar en tom sträng.

// Kollar om dom två första tecknen i den strängen är "P" och "y"
if(firstTwoLetters==="Py"){
    // returera orginal sträng
    returnString = originalString;
}else{
    // Lägg till Py längst fram i strängen
    returnString = "Py" + originalString;
}

// Skriver till konsollen.
console.log(firstTwoLetters); // Skriver ut dom två tecknen som blev kopierade
console.log(returnString);  // Skriver ut resultatet.
console.log(originalString);  // Skriver ut orginalsträngen.




// Samma lösning fast på ett mordernare sätt i en funktion.

function checkString(originalString){
    if (originalString.slice(0, 2) === "Py") return originalString
     else return "Py"+originalString
}

console.log(checkString(originalString)); // Skriv ut resultatet.
