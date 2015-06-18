//config
var use_lowercase_caracters = true;
var use_uppercase_caracters = false;
var use_numbers = false;
var use_simbols = false;
var extra_caracters = []; //an array of characters or strings

var min_pass_length = 1;
var max_pass_length = 6;

var test_pass = "senhaa";
//config


var lowercase_caracters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','x','w','y','z'];
var uppercase_caracters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','X','W','Y','Z'];

var numbers = ['1','2','3','4','5','6','7','8','9','0'];
var simbols = ['!','@','#','$','%','¨','&','*','(',')','_','+','-','=','/',';',':','.',',','<','>','~','^',']','[','{','}','`','´'];

var found_pass = false;

var using_caracters = [];
if(use_lowercase_caracters) using_caracters = using_caracters.concat(lowercase_caracters);
if(use_uppercase_caracters) using_caracters = using_caracters.concat(uppercase_caracters);
if(use_numbers) using_caracters = using_caracters.concat(numbers);
if(use_simbols) using_caracters = using_caracters.concat(simbols);
using_caracters = using_caracters.concat(extra_caracters);

function generate(len, chars)
{
    // Indices that indicate what char to use on corresponding place.
    var indices = [];
    for (var i = 0; i < len; ++i)
        indices.push(0);

    // While all indices in set of chars
    var str = "";
    while (indices[0] < chars.length)
    {
        // Print current solution
        str = "";
        for (var i = 0; i < indices.length; ++i)
            str += chars[indices[i]];
        //process.stdout.cursorTo(8);
        //process.stdout.write(str);
        if (str == test_pass){
          console.log("I found the password! It's: "+str);
          process.exit();
        }
        // Go to next solution by incrementing last index and adjusting
        // if it is out of chars set.
        indices[len-1]++;
        for (var i = len-1; i > 0 && indices[i] == chars.length; --i)
        {
            indices[i] = 0;
            indices[i-1]++;
        }
    }
}

function brute(chars, min, max)
{
  //process.stdout.write("Trying: ");
    for (var l = min; l <= max; ++l)
        generate( l, chars);
}

console.log("Trying to find a password. (If something go wrong, will be prompted)");
brute(using_caracters, min_pass_length, max_pass_length);
