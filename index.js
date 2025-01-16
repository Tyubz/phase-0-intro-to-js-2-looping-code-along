// Code your solutions in this file
function writeCards(names, sherehe) {
    const messages = [];
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${sherehe} gift!`);
    }
    return messages;
}

const names = ["Vic", "Otieno", "Nyambura"];
const event = "birthday";
const thankYouMessages = writeCards(names, sherehe);

console.log(thankYouMessages);

function countDown(number) {
    while (number >= 0) {
        console.log(number);
        number--;
    }
}
countDown(10);
