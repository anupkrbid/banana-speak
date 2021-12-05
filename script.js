const textarea = document.querySelector("#english-input");
const button = document.querySelector("#translate-btn");
const output = document.querySelector("#translated");

button.addEventListener("click", () => {
  const userInput = textarea.value;
  console.log(userInput);
  getData(userInput);
});

function getData(sentence) {
  // https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json // test server api
  // https://replit.com/@tanaypratap/lessonfourapi
  const url =
    "https://api.funtranslations.com/translate/minion.json?text=" + sentence;

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      if (data.error) {
        output.textContent = data.error.message;
      } else {
        output.textContent = data.contents.translated;
      }
    })
    .catch((err) => console.log(err));
}
