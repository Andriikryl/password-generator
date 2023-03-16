const characterAmountRange = document.getElementById("characterRenge");
const characterAmountNumber = document.getElementById("characterNumber");
const form = document.getElementById("passwordGenerator");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumberElement = document.getElementById("includeNumbers");
const includeSymbolElement = document.getElementById("includeSymbols");

const UPPERCASE_CHAR_CODES = arrayFromHeighToLow(65, 90);
const LOWERCASE_CHAR_CODES = arrayFromHeighToLow(97, 122);
const NUMBER_CHAR_CODES = arrayFromHeighToLow(48, 57);
const SYMBOL_CHAR_CODES = arrayFromHeighToLow(33, 47)
  .concat(arrayFromHeighToLow(58, 64))
  .concat(arrayFromHeighToLow(91, 96))
  .concat(arrayFromHeighToLow(123, 126));

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

function generatePassword(
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  String.fromCharCode(65);
}

function arrayFromHeighToLow(low, heigh) {
  const array = [];
  for (let i = low; i <= heigh; i++) {
    array.push(i);
  }
  return array;
}

function syncCharacterAmount(e) {
  const value = e.target.value;
  characterAmountNumber.value = value;
  characterAmountRange.value = value;
}
