function skaiteitBurtuA(str) {
    return str.toLowerCase().split('').filter(char => char === 'a').length;
}

console.log(skaiteitBurtuA("Kod studenti puortrauc git projektu: \"Nu ko… laiks jaunam klonam.\""));