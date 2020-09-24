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

string = '1 r e g e x 2'

string.match(/./); // ["1"]
string.match(/^1/); // ["1"]
string.match(/2$/); // ["2"]
string.match(/[0-9]^/); // ["1"]
string.match(/^[0-9][a-z]/i); // ["1r"]
string.match(); // []