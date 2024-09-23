const latinToMorse = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..'
};

const morseToLatin = {
    '.-': "A", '-...': "B", '-.-.': "C", '-..': "D", '.': "E", '..-.': "F",
    '--.': "G", '....': "H", '..': "I", '.---': "J", '-.-': "K", '.-..': "L",
    '--': "M", '-.': "N", '---': "O", '.--.': "P", '--.-': "Q", '.-.': "R",
    '...': "S", '-': "T", '..-': "U", '...-': "V", '.--': "W", '-..-': "X",
    '-.--': "Y", '--..': "Z"
};


function getLatinCharacterList(text) {
    return text.split('');
}


function translateLatinCharacter(char) {
    return latinToMorse[char.toUpperCase()] || char;
}


function encode(text) {
    const characters = getLatinCharacterList(text);
    return characters.map(translateLatinCharacter).join(' ');
}


function encodeText() {
    const input = document.getElementById('textInput').value;
    const encoded = encode(input);
    document.getElementById('encodedOutput').innerText = encoded;
}


function getMorseCharacterList(morse) {
    return morse.split(' ');
}

function translateMorseCharacter(morseChar) {
    return morseToLatin[morseChar] || morseChar;
}


function decode(morse) {
    const morseChars = getMorseCharacterList(morse);
    return morseChars.map(translateMorseCharacter).join('');
}

function decodeMorse() {
    const input = document.getElementById('morseInput').value;
    const decoded = decode(input);
    document.getElementById('decodedOutput').innerText = decoded;
}

const title = "Encodeur/Décodeur Morse";
const animatedTitle = document.getElementById('animatedTitle');

title.split('').forEach((letter, index) => {
    const span = document.createElement('span');
    span.textContent = letter;
    span.style.display = 'inline-block'; // Pour permettre l'animation
    span.style.transition = 'color 0.5s'; // Durée de la transition
    span.style.animation = `colorChange 1s ${index * 0.1}s infinite`; // Animation avec délai
    animatedTitle.appendChild(span);
});

