const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');


nameInputRef.addEventListener('input', changeName);

function changeName(event) {
  nameOutputRef.textContent = event.target.value === '' ? 'Anonymous' : event.target.value;
};