import axios from "axios";


function generateJoke() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
    axios
        .get("https://icanhazdadjoke.com/", config)
        .then((response) => {
        const joke = response.data.joke;
        const jokeText = document.querySelector("#joke");
        jokeText.textContent = joke;
        })
        .catch((error) => {
        console.log(error);
        });    
}
export default generateJoke;