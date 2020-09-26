const regex1 = new RegExp('love');
const regex2 = /regex/i;

let string = "i love regex and regex loves me";

string.match(regex1); // ["love"]
string.match(regex2); // ["regex"]
string.replace(/i/, 'I'); // "I love regex and regex loves me"

/me/.test(string); // true

string = 'test';

string.match(/test/); // ["test"]
string.match(/[test]/); // ["t"]
string.match(/[a-f]/); // ["e"]

string.match(/love/g); // ["love", "love"]
string.match(/I/i); // ["i"]

string = '1reg ex2'

string.match(/./); // ["1"]
string.match(/\S/g); // ["1regex2"]
string.match(/\d\D\S\S\s.../); // ["1reg ex2"]


string.match(/^1/); // ["1"]
string.match(/2$/); // ["2"]
string.match(/[0-9]^/); // ["1"]
string.match(/^[0-9][a-z]/i); // ["1r"]
string.match(/^[0-9].[a-z]./i); // ["1reg"]


string.match(/^[^a-z]/); // ["1"]
string.match(/[^0-9]/g); // ["reg ex"]

string = "1regex2regexredregexblueregex"

string.match(/[0-9]?/g); // ["12"]
string.match(/[a-z]*2/); // ["regex2"]
string.match(/ex+/); // ["ex"]
string.match(/[a-z]{4}/); // ["rege"]
string.match(/[gex]*[re]+c?/); // ["xre"]


string.match(//); // [""]