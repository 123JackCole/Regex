const regex1 = new RegExp('love');
const regex2 = /regex/i;

const string = "i love regex and regex loves me";

string.match(regex1); // ["love"]
string.match(regex2); // ["regex"]
string.replace(/i/, 'I'); // "I love regex and regex loves me"

/me/.test(string); // true

