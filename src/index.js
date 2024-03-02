import "./styles/main.scss";
import generateJoke from "./generateJoke";
import laughing from './assets/laughing.svg';

const img = document.querySelector('#laughImg');
img.src = laughing;
const jokeBtn = document.querySelector('#jokeBtn');

jokeBtn.addEventListener('click', () => {
    console.log('clicked');
    generateJoke();
});
generateJoke();

