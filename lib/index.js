var stringLengths = printStringLengths(args);

function stringLengthsMap(words) {
 
if(words === null || words ===undefined)
{
 return "Please provide appropriate arguments"; 
}
 
 return words.map(x => x.length);
}


function printStringLengths(args){

console.log(stringLengthsMap(args));

}

exports.stringLengths = stringLengths;
