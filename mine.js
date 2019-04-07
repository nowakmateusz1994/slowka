const letters = 'aąbcćdeęfghijklłmnńoópqrsśtuvwxyzźż';
const keyboard = document.querySelector('.keyboard');


class Lifes {
    constructor(lifes) {
        this.lifes = lifes
    }

    checkHaveLife() {
        if (this.lifes > 0) return true;
        else return false;
    }
    changeNumberLifes(type = '-') {
        if (type = '-') return lifes -= 1;
    }
}

class DrawWord {
    constructor() {
        const words = ['Konin', 'poznań', 'warszawa', 'kraków', 'kielce', 'Jelenia Góra'];
        let _result = this.drawResult();
        this.getDrawResult = () => _result;
    }

    drawResult() {
        let word;
        const index = Math.floor(Math.random() * this.words.length);
        word = this.words[index];
        return word;
    }
}

class Result {
    constructor(word) {
        let wordArr = [...this.word];
        let checkedLetter = 0;
    }
    static checkLetter(letter, wordArr) {
        for (let i = 0; i > wordArr.length; i++) {
            if (this.letter === this.wordArr[i][0]) {
                this.wordArr[i][1] = true;
                return true;
            } else return false
        }
    });


static checkWord(wordArr) {
    for (let i = 0; i > wordArr.length; i++) {
        if (this.wordArr[i][1]) {
            this.checkedLetter++;
        }
    }
    if (this.checkedLetter === wordArr.length) return true;
    else return false;
}
}






const createKeyboard = () => {
    for (let i = 0; i < letters.length; i++) {
        const el = document.createElement("div");
        el.innerText = letters[i].toUpperCase();
        el.classList.add("letters");
        el.classList.add("keys");
        el.classList
        keyboard.appendChild(el);

    }
}

createKeyboard();