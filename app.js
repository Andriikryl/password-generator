const characterAmountRange = document.getElementById("characterRenge");
const characterAmountNumber = document.getElementById("characterNumber");
const form = document.getElementById("passwordGenerator");
const includeUppercaseElement = document.getElementById("includeUppercase");
const includeNumberElement = document.getElementById("includeNumbers");
const includeSymbolElement = document.getElementById("includeSymbols");
const passwordDisplay = document.getElementById("passwordDisplay");

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
  passwordDisplay.innerText = password;
});

function generatePassword(
  characterAmount,
  includeUppercase,
  includeNumbers,
  includeSymbols
) {
  let charCodes = LOWERCASE_CHAR_CODES;
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CHAR_CODES);
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CHAR_CODES);
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CHAR_CODES);
  const passwordCharcters = [];
  for (let i = 0; i < characterAmount; i++) {
    const characterCode =
      charCodes[Math.floor(Math.random() * charCodes.length)];
    passwordCharcters.push(String.fromCharCode(characterCode));
  }
  return passwordCharcters.join("");
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
