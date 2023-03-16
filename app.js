const characterAmountRange = document.getElementById("characterRenge");
const characterAmountNumber = document.getElementById("characterNumber");
const form = document.getElementById("passwordGenerator");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumberElement = document.getElementById("includeNumbers");
const includeSymbolElement = document.getElementById("includeSymbols");

characterAmountNumber.addEventListener("input", syncCharacterAmount);
characterAmountRange.addEventListener("input", syncCharacterAmount);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const characterAmount = characterAmountNumber.value;
  const includeUppercase = includeUppercaseElement.checked;
  const includeNumbers = includeNumberElement.checked;
  const includeSymbols = includeSymbolElement.checked;
  const password = generatePassword(
    characterAmount,
    includeUppercase,
    includeNumbers,
    includeSymbols
  );
});

function syncCharacterAmount(e) {
  const value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}
