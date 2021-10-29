"use scrict";


const setWord = function () {
  word = words.splice(Math.floor(Math.random() * words.length), 1)[0];
  target.textContent = word;
  index = 0;
};

const words = ['angular',
                'magic',
                'brew',
                'while',
                // 'throw',
                // 'css',
                // 'break',
                // 'swing',
                // 'echo',
                // 'let',
                // 'wall',
                // 'laughter',
                // 'hash',
                // 'spinner',
                // 'beer',
                // 'ninja',
                // 'javascript',
                // 'master',
                // 'program',
                // 'coding',
                // 'hero',
                // 'learning',
                // 'work',
                // 'case',
                // 'react',
                // 'dragon',
                // 'rush',
                // 'api',
                // 'init',
                // 'motion',
                // 'google',
                // 'float',
                // 'damn',
                // 'block',
                // 'ranking',
                // 'nice',
              ];
let word;
let index = 0;
let startTime;
let isPlaying = false;
let wrongTimes = 0;

const target = document.getElementById("target");

document.addEventListener("click", () => {
  if (isPlaying) {
    return;
  }
  target.classList.add('game-text');
  isPlaying = true;
  startTime = Date.now();
  setWord();
});

document.addEventListener("keydown", (e) => {
  if (isPlaying) {
    return;
  }
  if (e.code === "Space") {
    target.classList.add('game-text');
    isPlaying = true;
    startTime = Date.now();
    setWord();
  }
});

document.addEventListener("keydown", (e) => {
  if (e.key !== word[index]) {
    wrongTimes++;
    return;
  }
  index++;

  target.textContent = "_".repeat(index) + word.substring(index);

  if (index === word.length) {
    if (words.length === 0) {
      elapsedTime = ((Date.now() - startTime) / 1000).toFixed(2);
      const result = document.getElementById("result");
      result.innerText = `Finished!\n${elapsedTime} seconds. ${wrongTimes} missed`;
      return;
    }
    setWord();
  }
});
