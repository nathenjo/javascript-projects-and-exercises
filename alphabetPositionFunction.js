const alph_dict = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    'e': 5,
    'f': 6,
    'g': 7,
    'h': 8,
    'i': 9,
    'j': 10,
    'k': 11,
    'l': 12,
    'm': 13,
    'n': 14,
    'o': 15,
    'p': 16,
    'q': 17,
    'r': 18,
    's': 19,
    't': 20,
    'u': 21,
    'v': 22,
    'w': 23,
    'x': 24,
    'y': 25,
    'z': 26
}


function alphabetPosition(string) {
    const removeSpaces = string.replace(/[^A-Z0-9]/ig, "");
    const stringConvert = removeSpaces.toLowerCase().split("");
    const mapTest = stringConvert.map(letter => alph_dict[letter]
    );
    return mapTest.join(" ");
}

console.log(alphabetPosition('Hello!'))
console.log(alphabetPosition('t:u;9c_&'))
console.log(alphabetPosition('This is the way we wash our hands'))