// Make a list of sound bars in HTML
// Create audio tag in HTML
// Create an element in JS for each sound bar
// Create an element in JS for audio
//

window.addEventListener('DOMContentLoaded', () => {
  // This assigns the sound of 'work-it' to the first li
  const li = document.getElementById('Work-it');
  // Below adds a mouse over function. When mouse hovers over the li audio plays
  li.addEventListener('mouseover', function() {
  // Below assigns audio to the li
    const audio = document.getElementById('audio');
  // Below adds audio link to the li
    audio.src = '../sounds/work_it.wav';
    audio.play();
  });
  // This assigns the sound of 'make-it' to the 2nd li
  const li2 = document.getElementById('Make-it');
  li2.addEventListener('mouseover', function () {
    const audio = document.getElementById('audio');
    audio.src = '../sounds/make_it.wav';
    audio.play();
  });
  // This assigns the sound of 'do-it' to the 3rd li
  const li3 = document.getElementById('Do-it');
  li3.addEventListener('mouseover', function () {
    const audio = document.getElementById('audio');
    audio.src = '../sounds/do_it.wav';
    audio.play();
  });
  // This assigns the sound of 'makes-us' to the 4th li
  const li4 = document.getElementById('Makes-us');
  li4.addEventListener('mouseover', function () {
    const audio = document.getElementById('audio');
    audio.src = '../sounds/makes_us.wav';
    audio.play();
  });
  // This assigns the sound of 'work-it' to the 5th li
  const li5 = document.getElementById('Harder');
  li5.addEventListener('mouseover', function () {
    const audio = document.getElementById('audio');
    audio.src = '../sounds/harder.wav';
    audio.play();
  });
  // This assigns the sound of 'better' to the 6th li
  const li6 = document.getElementById('Better');
  li6.addEventListener('mouseover', function () {
    const audio = document.getElementById('audio');
    audio.src = '../sounds/better.wav';
    audio.play();
  });
  const li7 = document.getElementById('Faster');
  li7.addEventListener('mouseover', function () {
    const audio = document.getElementById('audio');
    audio.src = '../sounds/faster.wav';
    audio.play();
  });
  const li8 = document.getElementById('Stronger');
  li8.addEventListener('mouseover', function () {
    const audio = document.getElementById('audio');
    audio.src = '../sounds/stronger.wav';
    audio.play();
  });
  const li9 = document.getElementById('More-than');
  li9.addEventListener('mouseover', function () {
    const audio = document.getElementById('audio');
    audio.src = '../sounds/more_than.wav';
    audio.play();
  });
  const li10 = document.getElementById('Hour');
  li10.addEventListener('mouseover', function () {
    const audio = document.getElementById('audio');
    audio.src = '../sounds/hour.wav';
    audio.play();
  });
  const li11 = document.getElementById('Our');
  li11.addEventListener('mouseover', function () {
    const audio = document.getElementById('audio');
    audio.src = '../sounds/our.wav';
    audio.play();
  });
  const li12 = document.getElementById('Never');
  li12.addEventListener('mouseover', function () {
    const audio = document.getElementById('audio');
    audio.src = '../sounds/never.wav';
    audio.play();
  });
  const li13 = document.getElementById('Ever');
  li13.addEventListener('mouseover', function () {
    const audio = document.getElementById('audio');
    audio.src = '../sounds/ever.wav';
    audio.play();
  });
  const li14 = document.getElementById('After');
  li14.addEventListener('mouseover', function () {
    const audio = document.getElementById('audio');
    audio.src = '../sounds/after.wav';
    audio.play();
  });
  const li15 = document.getElementById('Work-is');
  li15.addEventListener('mouseover', function () {
    const audio = document.getElementById('audio');
    audio.src = '../sounds/work_is.wav';
    audio.play();
  });
  const li16 = document.getElementById('Over');
  li16.addEventListener('mouseover', function () {
    const audio = document.getElementById('audio');
    audio.src = '../sounds/over.wav';
    audio.play();
  });
});
