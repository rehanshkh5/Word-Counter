const textArea = document.getElementById("textArea");
const Word = document.getElementById("Word");
const Characters = document.getElementById("Characters");
function wordCounter() {
  let getTextInput = textArea.value.split(" ");
  let removeSapce = getTextInput.filter((el, In) => {
    return el.trim();
  });

  Word.innerText = removeSapce.length;
}

function CharactersCounter() {
  let textAreas = textArea.value;
  Characters.innerText = textAreas.length;
}
textArea.addEventListener("input", function () {
  wordCounter();
  CharactersCounter();
});
