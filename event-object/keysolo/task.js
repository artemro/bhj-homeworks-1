let counter = 0; // переменная для определения текущего символа

class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.currentSymbol = '';
    this.reset();

    this.registerEvents();
  }

  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.addEventListener('keyup', this.keyupHandler.bind(this)); 
  } 

  keyupHandler(event) {
    const symbols = Array.from(document.querySelectorAll('.symbol'));
    this.currentSymbol = symbols[counter];
    counter++; 
    if (event.key.toLowerCase() === this.currentSymbol.textContent.toLowerCase()) {
      this.success();
    }
    else {
      this.fail();
    }

  }

  success() {
    if(this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Победа!');
      this.reset();
    }
    let timer = this.setNewWord() - 1;
    console.log("ID received from setNewWord", timer, "finished successfully");
    clearInterval(timer); // 
  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('Вы проиграли!');
      this.reset();
    }
    let timer = this.setNewWord() - 1; 
    console.log("ID received from setNewWord", timer,  "failed");
    clearInterval(timer);
  }

  setNewWord() {
    const word = this.getWord();
    counter = 0;
    this.renderWord(word);
    console.log("Word set", word);
    const symbols = Array.from(document.querySelectorAll('.symbol'));
    let len = symbols.length;
    const timeLeft = document.querySelector('.time');
    let timerId = setInterval(() => {
      timeLeft.textContent = len;
      len -= 1;
      if (len < 0 ) { // если время закончилось - слово считается неправильно введённым
        this.fail();
      }
    }, 1000)
    console.log("Timer ID: ", timerId);
    return timerId;
  }

  getWord() {
    const words = [
        'bob',
        'awesome',
        'netology',
        'hello',
        'kitty',
        'rock',
        'youtube',
        'popcorn',
        'cinema',
        'love',
        'javascript'
      ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;
    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }
}

new Game(document.getElementById('game'))

