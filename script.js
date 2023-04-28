function getComputerChoice() {

  const comp = Math.random();

  if (comp <= 0.34) return 'rock';
  if (comp <= 0.67) return 'paper';
  return 'scissors';

}


function getResult(comp, player) {
  if (player == comp) return 'DRAW!';
  if (player == 'rock') return (comp == 'paper') ? 'COM WIN!' : 'PLAYER 1 WIN!';
  if (player == 'paper') return (comp == 'scissors') ? 'COM WIN!' : 'PLAYER 1 WIN!';
  if (player == 'scissors') return (comp == 'paper') ? 'PLAYER 1 WIN!' : 'COM WIN!';
}

function loading() {
  const imgComputer = document.querySelector('.img-com');
  const images = ['rock-com', 'paper-com', 'scissors-com'];
  let i = 0;

  const startTime = new Date().getTime();

  setInterval(function () {

    if (new Date().getTime() - startTime > 1000) {
      clearInterval;
      return;
    }

    imgComputer.setAttribute('src', 'img/' + images[i++] + '.png');
    if (i == images.length) {
      i = 0;
    }

  }, 100)
}



const playerSideChoices = document.querySelectorAll('li img');

playerSideChoices.forEach(function (playerSideChoice) {
  playerSideChoice.addEventListener('click', function () {
    const comChoice = getComputerChoice();
    const playerChoice = playerSideChoice.className;
    const result = getResult(comChoice, playerChoice);

    loading();

    setTimeout(function () {
      const imgComputer = document.querySelector('.img-com');
      imgComputer.setAttribute('src', 'img/' + comChoice + '-com' + '.png');

      const resultTitle = document.querySelector('.result-title');
      resultTitle.innerHTML = result;

      score(result);
      finalScore();

    }, 1000)



  })
})


function score(result) {

  const scorePlayer = document.querySelector('.score-player');
  const scoreCom = document.querySelector('.score-com');


  if (result == 'PLAYER 1 WIN!') {
    scorePlayer.innerHTML = parseInt(scorePlayer.innerHTML) + 1;

  } else if (result == 'COM WIN!') {
    scoreCom.innerHTML = parseInt(scoreCom.innerHTML) + 1;

  }


}


function finalScore() {
  const scorePlayer = document.querySelector('.score-player');
  const scoreCom = document.querySelector('.score-com');
  const resultTitle = document.querySelector('.result-title');
  const imgComputer = document.querySelector('.img-com');



  setTimeout(function () {

    if (scorePlayer.innerHTML == 3) {
      alert('CONGRATS PLAYER 1 WON!');
      scorePlayer.innerHTML = '0';
      scoreCom.innerHTML = '0';
      resultTitle.innerHTML = 'LET\'S PLAY';
      imgComputer.setAttribute('src', 'img/rock-com.png');
    } else if (scoreCom.innerHTML == 3) {
      alert('CONGRATS COM WON!')
      scorePlayer.innerHTML = '0';
      scoreCom.innerHTML = '0';
      resultTitle.innerHTML = '';
      imgComputer.setAttribute('src', 'img/rock-com.png');
    }

  }, 100)


}






