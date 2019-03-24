const letters = 'aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż';
const keyboard = document.querySelector('.keyboard')

const words = {
    zwierze: ['lama', 'pies', 'kot'],
    przedmiot: ['komputer', 'samochód', 'telefon'],
    imie: ['Ewelina', 'Mateusz', 'Zuzanna'],
    miasto: ['Konin', 'Poznań', 'Kraków']
}

const categoryArr = [words.zwierze, words.przedmiot, words.imie, words.miasto];

        const createKeyboard = () => {
            for (let i = 0; i < letters.length; i++) {
                const el = document.createElement("div");
                el.innerText = letters[i].toUpperCase();
                el.classList.add("letter");
                keyboard.appendChild(el);

            }
        }

        createKeyboard();