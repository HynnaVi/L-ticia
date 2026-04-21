const output = document.getElementById('output');
const terminalBody = document.getElementById('terminal-body');

const lines = [
    "Initializing birthday_protocol.sh...",
    "Searching for targets in Cuiabá database...",
    "Target identified: Letícia_Beatriz",
    "Bypassing firewall security...",
    "Access status: GRANTED",
    "---------------------------------------",
    "SISTEMA INVADIDO COM SUCESSO!",
    "---------------------------------------",
    "Oi Letícia! Hackeei o sistema só pra passar",
    "e te desejar o melhor aniversário de todos.",
    "Que seu dia seja incrível e que tenha comida boa também",
    " ",
    ">>> Parabéns, Tícia! 💜",
    "Terminating session... Enjoy your day!"
];

let lineIndex = 0;
let charIndex = 0;

function typeLine() {
    if (lineIndex < lines.length) {
        let currentLine = lines[lineIndex];
        
        if (charIndex < currentLine.length) {
            output.innerHTML += currentLine.charAt(charIndex);
            charIndex++;
            setTimeout(typeLine, 50);
        } else {
            output.innerHTML += "<br>";
            lineIndex++;
            charIndex = 0;
            terminalBody.scrollTop = terminalBody.scrollHeight;
            setTimeout(typeLine, 600);
        }
    }
}

window.onload = typeLine;